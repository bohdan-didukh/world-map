import { h } from "preact";
import * as L from "leaflet";

import style from "./style.css";
import { useEffect } from "preact/hooks";

import WORLD_GEO from "./data.json";

const GEOJSON =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

const LAYER_OPEN_STREET_MAP = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const LAYER_BASEMAPS =
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";

const D3Map = () => {
  useEffect(() => {
    let map = L.map("map").setView([51.505, -0.09], 2);

    L.tileLayer("", {
      maxZoom: 5,
      minZoom: 2,
    }).addTo(map);

    L.geoJSON(WORLD_GEO, {
      style(feature) {
        switch (feature.properties.name) {
          case "Ukraine":
            return {
              color: "#000",
              fillColor: "#f5cf02",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.7,
            };
          default:
            return {
              color: "white",
              fillColor: "#68b3a3",
              fillOpacity: 1,
              weight: 1,
            };
        }
      },
    }).addTo(map);
  }, []);

  return (
    <div>
      <div
        id="map"
        class={style.map}
        style={{
          width: window.innerWidth,
          height: window.innerHeight / 2,
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
};

export default D3Map;
