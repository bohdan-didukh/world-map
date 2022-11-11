import { h } from "preact";

import * as d3 from "d3";
import { useEffect } from "preact/hooks";
import style from "./style.css";

const D3Map = () => {
  useEffect(() => {
    // The svg
    const svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    // Map and projection
    const projection = d3
      .geoNaturalEarth1()
      .scale(width / 1.3 / Math.PI)
      .translate([width / 2, height / 2]);

    // Load external data and boot
    d3.json(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    ).then((data) => {
      // Draw the map
      svg
        .append("g")
        .selectAll("path")
        .data(data.features)
        .join("path")
        .attr("fill", "#69b3a2")
        .attr("d", d3.geoPath().projection(projection))
        .style("stroke", "#fff");
    });
  }, []);

  return (
    <svg
      class={style.map}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default D3Map;
