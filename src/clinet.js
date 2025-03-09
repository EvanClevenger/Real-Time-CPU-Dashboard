import io from "socket.io-client";
import React from "react";
import ReactDOM from "react-dom";
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
