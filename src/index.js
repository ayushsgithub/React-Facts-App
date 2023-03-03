import React from "react";
import ReactDom from "react-dom";

import App2 from "./App2";


function App() {
  return (
    <>
      <App2 />
    </>
  );
}

ReactDom.render(<App /> , document.getElementById("root"));
// ReactDom.render(<h1>hello</h1>, document.getElementById("root"));
