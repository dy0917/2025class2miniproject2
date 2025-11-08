const Todo = require("../Models/todo");

const addTodo = async (todo) => {
  const savedTodo = await Todo(todo).save();
  return savedTodo;
};

const getAllTodosFromService = async () => {
  const todos = await Todo.find({});
  return todos;
};
const getTodoById = async (id) => {
  const todo = await Todo.findById(id);
  return todo;
};

const deleteTodo = async (id) => {
  await Todo.findByIdAndDelete(id);
};

const updateTodo = async (id, body) => {
  const updatedTodo = await Todo.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updatedTodo;
};

module.exports = {
  addTodo,
  getAllTodosFromService,
  deleteTodo,
  updateTodo,
  getTodoById,
};
