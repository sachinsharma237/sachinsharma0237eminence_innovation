require("dotenv").config(); // to access .env variables
const cors = require("cors");
const express = require("express");
const { Server } = require("socket.io");
const app = express();
const http = require("http");
const connectDB = require("./config/mongoConnection");
connectDB(); // Connect to MongoDB

// Create HTTP server and WebSocket server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

// Import Routes
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/task")(io);

app.use(express.json());
app.use(cors());

// Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});
