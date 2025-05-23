// Todo 控制器
const { v4: uuidv4 } = require("uuid");
const dayjs = require("dayjs");
const Todo = require("../models/todo");

// 内存中存储 Todos（实际应用中应使用数据库）
let todos = [];

// 获取所有 Todos
exports.getTodoList = (req, res) => {
  try {
    res.status(200).json({
      status: true,
      message: "获取 Todo 列表成功",
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: "获取 Todo 列表失败",
      message: error.message,
    });
  }
};

// 添加新的 Todo
exports.addTodo = (req, res) => {
  try {
    const { title } = req.body;

    // 验证请求数据
    if (!title) {
      return res.status(400).json({
        status: false,
        error: "标题是必需的",
        message: "请提供 Todo 的标题",
      });
    }

    // 创建新的 Todo
    const newTodo = new Todo({
      id: uuidv4(),
      title,
      completed: false,
      createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    });

    // 添加到列表中
    todos.push(newTodo);

    res.status(201).json({
      status: true,
      message: "添加 Todo 成功",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: "添加 Todo 失败",
      message: error.message,
    });
  }
};

// 更新 Todo
exports.updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    // 查找要更新的 Todo
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({
        status: false,
        message: "Todo 不存在",
        error: `ID 为 ${id} 的 Todo 不存在`,
      });
    }

    // 更新 Todo
    if (title !== undefined) todos[todoIndex].title = title;
    if (completed !== undefined) todos[todoIndex].completed = completed;

    res.status(200).json({
      status: true,
      message: "更新 Todo 成功",
      data: todos[todoIndex],
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: "更新 Todo 失败",
      message: error.message,
    });
  }
};

// 删除 Todo
exports.deleteTodo = (req, res) => {
  try {
    const { id } = req.params;

    // 查找要删除的 Todo
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({
        status: false,
        message: "Todo 不存在",
        error: `ID 为 ${id} 的 Todo 不存在`,
      });
    }

    // 删除 Todo
    const deletedTodo = todos[todoIndex];
    todos = todos.filter((todo) => todo.id !== id);

    res.status(200).json({
      status: true,
      data: deletedTodo,
      message: `ID 为 ${id} 的 Todo 已删除`,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: "删除 Todo 失败",
      message: error.message,
    });
  }
};
