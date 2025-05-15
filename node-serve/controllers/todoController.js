// Todo 控制器
const Todo = require('../models/todo');

// 内存中存储 Todos（实际应用中应使用数据库）
let todos = [
  { id: 1, title: '学习 Node.js', completed: false },
  { id: 2, title: '学习 React', completed: true },
];

// 获取所有 Todos
exports.getTodoList = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: todos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '获取 Todo 列表失败',
      message: error.message
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
        success: false,
        error: '标题是必需的'
      });
    }
    
    // 创建新的 Todo
    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const newTodo = new Todo(newId, title, false);
    
    // 添加到列表中
    todos.push(newTodo);
    
    res.status(201).json({
      success: true,
      data: newTodo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '添加 Todo 失败',
      message: error.message
    });
  }
};

// 更新 Todo
exports.updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    
    // 查找要更新的 Todo
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    
    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        error: `ID 为 ${id} 的 Todo 不存在`
      });
    }
    
    // 更新 Todo
    if (title !== undefined) todos[todoIndex].title = title;
    if (completed !== undefined) todos[todoIndex].completed = completed;
    
    res.status(200).json({
      success: true,
      data: todos[todoIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '更新 Todo 失败',
      message: error.message
    });
  }
};

// 删除 Todo
exports.deleteTodo = (req, res) => {
  try {
    const { id } = req.params;
    
    // 查找要删除的 Todo
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    
    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        error: `ID 为 ${id} 的 Todo 不存在`
      });
    }
    
    // 删除 Todo
    const deletedTodo = todos[todoIndex];
    todos = todos.filter(todo => todo.id !== parseInt(id));
    
    res.status(200).json({
      success: true,
      data: deletedTodo,
      message: `ID 为 ${id} 的 Todo 已删除`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: '删除 Todo 失败',
      message: error.message
    });
  }
};
