const express = require("express"); //import express
const router = express.Router();

const homeController = require("./controllers/home");
const todoController = require("./controllers/todo");

router.get("/", homeController.welcome);

router.get("/todos", todoController.getAllTodos);
router.post("/todos", todoController.createTodo);
router.delete("/todos", todoController.deleteAllTodos);

router.get("/todos/:id", todoController.getTodo);
router.put("/todos/:id", todoController.updateTodo);
router.delete("/todos/:id", todoController.deleteTodo);

module.exports = router;
