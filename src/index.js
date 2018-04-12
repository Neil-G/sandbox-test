import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="Neil" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <p>test</p>
  </div>
);

render(<App />, document.getElementById("root"));
