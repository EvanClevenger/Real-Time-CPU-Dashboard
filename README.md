Real-Time CPU Dashboard
This project is a real-time CPU usage monitoring dashboard that utilizes a client-server architecture. The server collects real-time CPU usage statistics and transmits the data to the client via WebSocket. The client visualizes the data in an interactive line chart, making it easy to track CPU performance over time.

Features
Real-time CPU usage monitoring.

Interactive line chart visualization using Recharts.

WebSocket communication with Socket.IO for seamless data streaming.

Timestamps for each CPU usage data point, displayed in hours and minutes.

Technologies Used
Here’s a list of technologies and libraries used in this project:

Backend:
Node.js: JavaScript runtime for building the server.

http (built-in): Creates the server to handle requests.

os-utils: Retrieves system-level CPU usage statistics.

Socket.IO: Enables real-time, bidirectional communication between the server and client.

Frontend:
React: Library for building the user interface.

Recharts: Library for creating data visualizations such as line charts.

Socket.IO Client: Establishes WebSocket communication with the server.

Getting Started
Follow these steps to set up and run the project locally.

Prerequisites
Make sure you have Node.js and npm installed. You can download them from Node.js Official Website.

A modern browser like Chrome or Firefox for running the client.

Installation
Clone this repository:

bash
git clone <repository-url>
cd Real-Time-CPU-Dashboard
Install dependencies for both server and client:

bash
npm install
Running the Project
Start the server:

bash
npm start
Open your browser and navigate to:

http://localhost:3000
You should see the real-time CPU monitoring dashboard displaying live updates.

Project Structure
Real-Time-CPU-Dashboard/
│
├── src/
│   ├── server.js        # Backend server file
│   ├── index.html       # Entry point for the client-side app
│   └── components/      # React components (e.g., LineChart visualization)
│
├── package.json         # Node.js dependencies and scripts
└── README.md            # Project documentation
How It Works
The server uses os-utils to calculate the CPU usage percentage every second.

Data is emitted to the client via Socket.IO, along with a timestamp generated using JavaScript's Date object.

The client listens for the cpu event and appends the data to a stateful array in React.

The React app renders the data in a real-time line chart using Recharts.
