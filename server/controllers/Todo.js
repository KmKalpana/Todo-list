const Todo = require("../models/Todo");

const getAllTodo = (req, res) => {
  Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) => {
      res.status(404).json("There is not any Todo ", err);
    });
};

const CreateTodo = (req, res) => {
  Todo.create(req.body)
    .then((data) => res.status(200).json({message : "Task is successfully created ", data}))
    .catch((err) => {
      res.status(400).json("There is any error to create the task ");
    });
};

const UpdateTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body).then(() => res.status(200).json("Task is successfully updated"))
    .catch((err) => {
      res.status(400).json("There is any error to update the task ",err);
    });
};

const DeleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id, res.body).then(() =>
    res.status(200).json("TodoTask is successfully deleted.")
  ).catch((err) => {
      res.status(400).json("There is any error to delete the task",err);
    });
};

module.exports={getAllTodo, CreateTodo,UpdateTodo, DeleteTodo};