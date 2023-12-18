import BasicComponent from "./BasicComponent";
import { Component, Component1, Component2 } from "./Component";
import Props from "./Props";
import Counter from "./Counter";
import React from "react";

function App() {
  // go from component to props, to states, to hooks

  return (
    <div className="App">
      {/* <BasicComponent /> */}
      {/* <Component />
      <Component1 />
      <Component2 /> */}
      {/* <Props name="Pranav" /> */}
      <Counter />
    </div>
  );
}

export default App;
