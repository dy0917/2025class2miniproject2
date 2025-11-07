const todoList = [];
const todo = require("../Models/todo");
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

const updateTodo = (id, body) => {
  const targetTodo = getTodoById(id);
  const targetIndex = todoList.indexOf(targetTodo);
  const updatedTodo = { ...targetTodo, ...body };
  todoList.splice(targetIndex, 1, updatedTodo);
  return updatedTodo;
};

module.exports = {
  addTodo,
  getAllTodosFromService,
  deleteTodo,
  updateTodo,
  getTodoById,
};
