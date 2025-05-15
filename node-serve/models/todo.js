// Todo 模型
class Todo {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.createdAt = new Date().toISOString();
  }
}

module.exports = Todo;
