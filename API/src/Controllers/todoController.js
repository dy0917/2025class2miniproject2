const {
  addTodo,
  getAllTodosFromService,
  deleteTodo,
  updateTodo,
  getTodoById,
} = require("../Services/todoService");

const createTodo = async (todo) => {
  const newTodo = await addTodo(todo);
  return newTodo;
};

const getTodos = async () => {
  return await getAllTodosFromService();
};

const removeTodos = (id) => {
  const targetTodo = getTodoById(id);
  if (targetTodo) {
    deleteTodo(id);
    return true;
  } else {
    return false;
  }
};

const updateTodoAction = (id, body) => {
  const targetTodo = getTodoById(id);
  if (targetTodo) {
    const updatedTodo = updateTodo(id, body);
    return updatedTodo;
  } else {
    return undefined;
  }
};

module.exports = {
  createTodo,
  getTodos,
  removeTodos,
  updateTodoAction,
};
