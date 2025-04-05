const express = require("express");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new todo
router.post("/", protect, createTodo);

// Get all todos
router.get("/", protect, getTodos);

// Update a todo
router.put("/:id", protect, updateTodo);

// Delete a todo
router.delete("/:id", protect, deleteTodo);

module.exports = router;
