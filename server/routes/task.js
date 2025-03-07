const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");

module.exports = function (io) {
  const router = express.Router();

  // Create Task
  router.post("/", auth, async (req, res) => {
    try {
      const { title, description } = req.body;
      const newTask = new Task({ title, description, user: req.user.userId });
      await newTask.save();

      io.emit("task_created", newTask); // Notify all clients
      res.status(201).json(newTask);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get User's Tasks
  router.get("/", auth, async (req, res) => {
    try {
      const tasks = await Task.find({ user: req.user.userId });
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Update Task
  router.put("/:id", auth, async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task || task.user.toString() !== req.user.userId) {
        return res.status(403).json({ message: "Not authorized" });
      }

      const { title, description, status } = req.body;
      task.title = title || task.title;
      task.description = description || task.description;
      task.status = status || task.status;

      await task.save();
      io.emit("task_updated", task); // Notify all clients
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Delete Task
  router.delete("/:id", auth, async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task || task.user.toString() !== req.user.userId) {
        return res.status(403).json({ message: "Not authorized" });
      }

      await task.deleteOne();
      io.emit("task_deleted", req.params.id); // Notify all clients
      res.json({ message: "Task deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
