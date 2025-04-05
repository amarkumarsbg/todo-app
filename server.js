const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/auth", router);
app.use("/api/todos", todoRoutes);

connectDB();

app.listen(PORT, () => {
  console.log("Server is running on port:3000");
});
