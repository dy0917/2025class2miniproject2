const todoList = [];
const Todo = require("../Models/todo");

const addTodo = async (todo) => {
  const savedTodo = await Todo(todo).save();
  return savedTodo;
};

const getAllTodosFromService = async () => {
  const todos = await Todo.find({});
  return todos;
};
const getTodoById = (id) => {
  const todo = todoList.find((todo) => todo.id == id);
  return todo;
};

const deleteTodo = (id) => {
  const targetTodo = getTodoById(id);
  const targetIndex = todoList.indexOf(targetTodo);
  todoList.splice(targetIndex, 1);
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
