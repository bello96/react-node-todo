import React, { useState } from 'react';

// TodoForm 组件，用于添加新的 todo
const TodoForm = ({ onAddTodo }) => {
  // 状态管理输入框的值
  const [title, setTitle] = useState('');

  // 处理表单提交
  const handleSubmit = (e) => {
    // 阻止表单默认提交行为
    e.preventDefault();
    
    // 验证输入不为空
    if (title.trim()) {
      // 调用父组件传入的添加功能
      onAddTodo(title.trim());
      // 清空输入框
      setTitle('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="添加新的待办事项..."
      />
      <button type="submit" className="add-button">添加</button>
    </form>
  );
};

export default TodoForm;
