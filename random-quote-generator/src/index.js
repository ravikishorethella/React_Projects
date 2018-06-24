import React from "react";
import ReactDOM from "react-dom";
import Quotes from "./Quotes";

function App() {
  return (
    <div className="main">
      <h1>Quote Generator</h1>
      <Quotes />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
