import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 创建根节点并渲染 App 组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
