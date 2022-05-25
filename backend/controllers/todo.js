const Todo = require("../models/todo");

const createTodo = (req, res) => {
  const { title, description } = req.body;

  const todo = new Todo({
    title,
    description,
  });

  todo.save((err) => {
    if (err) {
      res.status(500).json({
        Error: err,
      });
    }
    res.status(200).json(todo);
  });
};

const getTodo = (req, res) => {
  const { id } = req.params;

  Todo.findById(id, (err, todo) => {
    if (err) {
      res.status(500).json({
        Error: err,
      });
    }
    res.status(200).json(todo);
  });
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description, isCompleted } = req.body;

  Todo.findByIdAndUpdate(
    id,
    {
      title,
      description,
      isCompleted,
    },
    { new: true },
    (err, todo) => {
      if (err) {
        res.status(500).json({
          Error: err,
        });
      }
      res.status(200).json(todo);
    }
  );
};

const deleteTodo = (req, res) => {
  Todo.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({
        Error: err,
      });
    }
    res.status(200).json({
      message: "Todo deleted",
    });
  });
};

const getAllTodos = (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      res.status(500).json({
        Error: err,
      });
    }
    res.status(200).json(todos);
  });
};

const deleteAllTodos = (req, res) => {
  Todo.deleteMany({}, (err) => {
    if (err) {
      res.status(500).json({
        Error: err,
      });
    }
    res.status(200).json({
      message: "All todos deleted",
    });
  });
};

module.exports = {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
  getAllTodos,
  deleteAllTodos,
};
