# React Node Todo 应用

这是一个使用 React 前端和 Node.js 后端构建的全栈 Todo 应用程序。

## 功能特点

- 创建、查看、编辑和删除待办事项
- 标记待办事项为已完成
- 按状态过滤待办事项
- 响应式设计，适配不同设备

## 技术栈

### 前端
- React
- React Hooks
- Axios (用于API请求)
- CSS/SCSS (样式设计)

### 后端
- Node.js
- Express.js
- MongoDB (数据库)
- Mongoose (ODM)

## 安装说明

### 前提条件
- Node.js (v14.x 或更高版本)
- npm 或 yarn
- MongoDB

### 安装步骤

1. 克隆仓库
```
git clone [repository-url]
cd react-node-todo
```

2. 安装后端依赖
```
cd backend
npm install
```

3. 安装前端依赖
```
cd ../frontend
npm install
```

4. 配置环境变量
在后端目录创建 `.env` 文件并添加以下内容：
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo-app
```

## 运行应用

1. 启动后端服务
```
cd backend
npm start
```

2. 启动前端服务
```
cd frontend
npm start
```

3. 打开浏览器访问 `http://localhost:3000`

## API 端点

| 端点 | 方法 | 描述 |
|------|------|------|
| /api/todos | GET | 获取所有待办事项 |
| /api/todos | POST | 创建新的待办事项 |
| /api/todos/:id | GET | 获取单个待办事项 |
| /api/todos/:id | PUT | 更新待办事项 |
| /api/todos/:id | DELETE | 删除待办事项 |

## 项目结构

```
react-node-todo/
├── backend/            # Node.js 后端
│   ├── controllers/    # 路由控制器
│   ├── models/         # 数据模型
│   ├── routes/         # API 路由
│   └── server.js       # 服务器入口文件
├── frontend/           # React 前端
│   ├── public/         # 静态资源
│   └── src/            # 源代码
│       ├── components/ # React 组件
│       ├── services/   # API 服务
│       └── App.js      # 主应用组件
└── README.md           # 项目文档
```

## 贡献指南

1. Fork 该仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

该项目采用 MIT 许可证 - 详情请查看 LICENSE 文件
