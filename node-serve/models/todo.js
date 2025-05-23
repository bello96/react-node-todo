// Todo 模型
const dayjs = require("dayjs");
const { v4: uuidv4 } = require("uuid");
class Todo {
  constructor({ id, title, completed = false, createdAt }) {
    this.id = id || uuidv4();
    this.title = title;
    this.completed = completed;
    this.createdAt = createdAt || dayjs().format("YYYY-MM-DD HH:mm:ss");
  }
}

module.exports = Todo;
