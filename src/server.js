//require is similar to imports but acts synchronously,it loads by block

const server = require("http").createServer(); //create http server
const { timeStamp } = require("console");
const os = require("os-utils");

//setting up socket-io server!
const io = require("socket.io")(server, {
  transports: ["websocket", "polling"],
  // initilazes new socket-io server instance attached to http  server
  // options obj that specifies transport methods
  // transports: ['primary method', 'redundant method']
});

let tick = 0;
//1. we need to listen for socket connections
io.on("connection", (client) => {
  //2. every second, send a 'cpu' event to client
  setInterval(() => {
    console.log("setInterval is running");
    os.cpuUsage((cpuPercent) => {
      client.emit("cpu", {
        name: tick++,
        value: cpuPercent,
      });
    });
  }, 1000);
});

server.listen(3000);
