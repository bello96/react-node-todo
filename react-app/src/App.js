import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "./api";

function App() {
  // 存储所有 todo 项的状态
  const [todos, setTodos] = useState([]);
  // 加载状态
  const [loading, setLoading] = useState(true);
  // 错误状态
  const [error, setError] = useState(null);

  useEffect(() => {
    getTodos();
  }, []);

  // 定义一个异步函数来获取数据
  const getTodos = async () => {
    try {
      setLoading(true);
      // 调用 API 获取所有 todos
      const res = await fetchTodos();
      // 更新状态
      setTodos(res.data);
      setError(null);
    } catch (err) {
      // 处理错误
      setError("获取 Todo 列表失败，请检查后端服务是否运行");
      console.error("获取数据错误:", err);
    } finally {
      // 无论成功还是失败，都设置加载状态为 false
      setLoading(false);
    }
  };

  // 处理添加新的 todo
  const handleAddTodo = async (title) => {
    try {
      // 调用 API 添加新 todo
      await addTodo(title);
    } catch (err) {
      setError("添加 Todo 失败");
      console.error("添加 Todo 错误:", err);
    } finally {
      getTodos();
    }
  };

  // 处理更新 todo 状态
  const handleToggleTodo = async (id) => {
    try {
      // 找到要更新的 todo
      const todoToUpdate = todos.find((todo) => todo.id === id);
      // 更新 todo 的完成状态
      const updatedTodo = await updateTodo(id, {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      });

      // 更新状态，替换更新后的 todo
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo.data : todo)));
    } catch (err) {
      setError("更新 Todo 状态失败");
      console.error("更新 Todo 错误:", err);
    }
  };

  // 处理删除 todo
  const handleDeleteTodo = async (id) => {
    try {
      // 调用 API 删除 todo
      await deleteTodo(id);
      // 更新状态，过滤掉已删除的 todo
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError("删除 Todo 失败");
      console.error("删除 Todo 错误:", err);
    }
  };

  return (
    <div className="container">
      {/* <h1>待办事项</h1> */}
      {/* 添加新 Todo 的表单 */}
      <TodoForm onAddTodo={handleAddTodo} />

      {/* 显示错误信息 */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 显示加载状态或 Todo 列表 */}
      {loading ? (
        <p className="loading">加载中...</p>
      ) : (
        <TodoList
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      )}
    </div>
  );
}

export default App;
