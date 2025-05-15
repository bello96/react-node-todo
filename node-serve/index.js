// 服务器入口文件
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const todoRoutes = require('./routes/todoRoutes');

// 创建 Express 应用
const app = express();
const PORT = process.env.PORT || 5001;

// 中间件
app.use(cors()); // 允许跨域请求
app.use(express.json()); // 解析 JSON 请求体
app.use(morgan('dev')); // 日志中间件

// 设置 API 路由
app.use('/api', todoRoutes);

// 根路由
app.get('/', (req, res) => {
  res.json({ message: 'Todo API 服务正在运行' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
