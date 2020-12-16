import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// const myName = "Pawel";
// const element = <h1>Hello {myName} element</h1>;
const componentElement = <App />; //always start component names with capital letter
// ReactDOM.render(element, document.getElementById("app"));
ReactDOM.render(componentElement, document.getElementById("app"));

// function tick() {
//   const element = (
//     <div>
//       <h1>Ticker</h1>
//       <h2>{new Date().toTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("ticker"));
// }

// setInterval(tick, 1000);
