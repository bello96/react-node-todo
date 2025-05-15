# Node.js Todo API 服务

这是一个简单的 Node.js Todo API 服务，用于学习简单的增删改查（CRUD）操作。

## 功能特点

- 获取所有 Todo 列表
- 添加新的 Todo
- 更新 Todo 的标题和完成状态
- 删除 Todo

## 技术栈

- Node.js
- Express.js
- 内存数据存储（实际应用中应使用数据库如 MongoDB、MySQL 等）

## 安装和运行

### 安装依赖

```bash
npm install
```

### 启动服务

```bash
# 使用 node 运行
npm start

# 使用 nodemon 进行开发（自动重启）
npm run dev
```

服务器将在 http://localhost:5001 运行。

## API 端点

| 方法   | 端点                 | 描述             |
|--------|----------------------|------------------|
| GET    | /api/getTodoList     | 获取所有 Todo    |
| POST   | /api/addTodo         | 添加新的 Todo    |
| PUT    | /api/updateTodo/:id  | 更新指定 ID 的 Todo |
| DELETE | /api/delTodo/:id     | 删除指定 ID 的 Todo |

## 请求和响应示例

### 获取所有 Todo

**请求**
```
GET /api/getTodoList
```

**响应**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "学习 Node.js",
      "completed": false,
      "createdAt": "2023-01-01T00:00:00.000Z"
    },
    {
      "id": 2,
      "title": "学习 React",
      "completed": true,
      "createdAt": "2023-01-02T00:00:00.000Z"
    }
  ]
}
```

### 添加新的 Todo

**请求**
```
POST /api/addTodo
Content-Type: application/json

{
  "title": "学习 Express"
}
```

**响应**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "title": "学习 Express",
    "completed": false,
    "createdAt": "2023-01-03T00:00:00.000Z"
  }
}
```

### 更新 Todo

**请求**
```
PUT /api/updateTodo/1
Content-Type: application/json

{
  "title": "学习 Node.js 和 Express",
  "completed": true
}
```

**响应**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "学习 Node.js 和 Express",
    "completed": true,
    "createdAt": "2023-01-01T00:00:00.000Z"
  }
}
```

### 删除 Todo

**请求**
```
DELETE /api/delTodo/3
```

**响应**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "title": "学习 Express",
    "completed": false,
    "createdAt": "2023-01-03T00:00:00.000Z"
  },
  "message": "ID 为 3 的 Todo 已删除"
}
```

## 学习要点

1. Node.js 基础和 Express 框架应用
2. RESTful API 设计和实现
3. 路由和控制器分离
4. 错误处理和状态码
5. HTTP 方法和 CRUD 操作的对应关系

## 进阶改进方向

- 添加数据持久化（使用数据库）
- 添加用户认证和授权
- 实现分页和过滤
- 添加单元测试和集成测试
- 添加 API 文档（如 Swagger）
