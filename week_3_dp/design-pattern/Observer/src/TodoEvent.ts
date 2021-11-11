import { ITodo } from "./type";

class TodoEvent {
  private static instance: TodoEvent;
  private todoData: ITodo[] = [];
  // 創建單例
  public static create(): TodoEvent {
    if (!TodoEvent.instance) {
      TodoEvent.instance = new TodoEvent();
    }
    return TodoEvent.instance;
  }

  public addTodo(todo: ITodo): Promise<ITodo> {
    return new Promise((resolve, reject) => {
      const _todo: ITodo = this.todoData.find(
        (t) => t.content === todo.content
      );
      if (_todo) {
        alert("該項已存在");
      }
      this.todoData.push(todo);
      resolve(todo);
    });
  }
  public removeTodo(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.todoData = this.todoData.filter((t) => t.id !== id);
      resolve(id);
    });
  }
  public toggleTodo(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.todoData = this.todoData.map((t) => {
        if (t.id === id) {
          t.completed = !t.completed;
          resolve(id);
        }
        return t;
      });
    });
  }
}
export default TodoEvent;
