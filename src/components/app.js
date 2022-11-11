import { h } from "preact";

import Map from "./Map";
import LeaflatMap from "./LeaflatMap";

const App = () => (
  <div id="app">
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
      integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
      crossorigin=""
    />
    <Map />
    <LeaflatMap />
  </div>
);

export default App;
