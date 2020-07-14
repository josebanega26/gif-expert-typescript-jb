import React, { useState, FunctionComponent } from "react";
import { render } from "react-dom";
import GifExpertApp from "./GifExpertApp";
import "./style.scss";

const App: FunctionComponent = () => {
  return (
    <div>
      <GifExpertApp />
    </div>
  );
};

export default App;

render(<App />, document.getElementById("root"));
