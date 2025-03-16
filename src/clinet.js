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

//connect to socket server
const socket = io("http://localhost:3000", {
  transports: ["websocket", "polling"],
});

const App = ({}) => {
  const [data, setData] = useState([]);

  //1. listen for cpu event and update status
  useEffect(() => {
    socket.on("cpu", (cpuPercent) => {
      setData((currentData) => [...currentData, cpuPercent]);
    });
  }, []);

  //2. render line chart using the state
  return (
    <div>
      <h1> Check Your Real Time CPU Usage</h1>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" />
      </LineChart>
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
