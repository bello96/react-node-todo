
// TodoList 组件，用于显示所有的 todo 项
const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  // 如果没有 todo 项，显示提示信息
  if (todos.length === 0) {
    return <p>没有待办事项，请添加一些任务！</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
          />
          <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
            {todo.title}
          </span>
          <button 
            className="delete-button"
            onClick={() => onDeleteTodo(todo.id)}
          >
            移除
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
