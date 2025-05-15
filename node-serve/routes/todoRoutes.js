// Todo 路由
const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

// 获取所有 Todos
router.get('/getTodoList', todoController.getTodoList);

// 添加新的 Todo
router.post('/addTodo', todoController.addTodo);

// 更新 Todo
router.put('/updateTodo/:id', todoController.updateTodo);

// 删除 Todo
router.delete('/delTodo/:id', todoController.deleteTodo);

module.exports = router;
