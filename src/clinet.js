import io from "socket.io-client";
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// var ReactDom = require("react-dom");

const socket = io("http://localhost:1234", {
  transports: ["websocket", "polling"],
});

const App = ({}) => {
  //1. listen for cpu event and update status
  //2. render line chart using the state
  return (
    <div>
      <h1> Check Your Real Time CPU Usage</h1>
    </div>
  );
};

// document.addEventListener("DOMContentLoaded", () => {
//   const rootElement = document.getElementById("root");
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// });
// above method guarentees that the script will run after the DOM is loaded useful for legacy tech or bigger projects

const DOM = document.getElementById("root");
const root = createRoot(DOM);
root.render(<App />);
