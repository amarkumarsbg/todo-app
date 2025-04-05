const Todo = require("../models/todo");

// Create a new todo
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Later we'll get user from token, for now hardcoded
    const todo = await Todo.create({
      title,
      description,
      user: req.user._id,
    });

    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

// Get all todos (for a user)
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: "Failed to get todos" });
  }
};

// Update a todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update todo" });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
