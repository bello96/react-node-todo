import axios from 'axios';

// 后端 API 的基础 URL
const API_URL = 'http://localhost:5001/api'; // 端口5001

// 创建 axios 实例
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 获取所有 todos
export const fetchTodos = async () => {
  try {
    // 发送 GET 请求到 /todos 端点
    const response = await api.get('/getTodoList');
    return response.data;
  } catch (error) {
    console.error('获取 todos 失败:', error);
    throw error;
  }
};

// 添加新的 todo
export const addTodo = async (title) => {
  try {
    // 发送 POST 请求到 /todos 端点，携带 title 数据
    const response = await api.post('/addTodo', { title });
    return response.data;
  } catch (error) {
    console.error('添加 todo 失败:', error);
    throw error;
  }
};

// 更新 todo
export const updateTodo = async (id, todoData) => {
  try {
    // 发送 PUT 请求到 /todos/:id 端点，携带更新的数据
    const response = await api.put(`/updateTodo/${id}`, todoData);
    return response.data;
  } catch (error) {
    console.error(`更新 todo ${id} 失败:`, error);
    throw error;
  }
};

// 删除 todo
export const deleteTodo = async (id) => {
  try {
    // 发送 DELETE 请求到 /todos/:id 端点
    const response = await api.delete(`/delTodo/${id}`);
    return response.data;
  } catch (error) {
    console.error(`删除 todo ${id} 失败:`, error);
    throw error;
  }
};
