import TodoList from "./TodoList";

((doc) => {
  const oInput: HTMLInputElement = doc.querySelector("input");
  const oAddBtn: HTMLButtonElement = doc.querySelector(".add-btn");
  const oTodoList: HTMLElement = doc.querySelector(".todo-list");

  const todoList = TodoList.create(oTodoList);

  /**
   * 方法:
   * addItem(todo) { id: new Date().getTime(), content: oTodoList.value, completed:false }
   * removeItem   listItems -> id -> item -> remove
   * toggleCompleted    listItems -> id -> item -> content -> 刪除線
   */

  const init = (): void => {
    bindEvent();
  };
  function bindEvent() {
    oAddBtn.addEventListener("click", handleAddBtnClick, false);
    oTodoList.addEventListener("click", handleListClick, false);
  }

  function handleAddBtnClick() {
    const val: string = oInput.value.trim();
    if (!val.length) {
      return;
    }
    todoList.addItem({
      id: new Date().getTime(),
      content: val,
      completed: false,
    });
    oInput.value = "";
  }

  function handleListClick(e: MouseEvent) {
    const tar = e.target as HTMLElement;
    const tagName = tar.tagName;
    if (tagName === "input" || tagName === "button") {
      const id: number = parseInt(tar.dataset.id);
      switch (tagName) {
        case "input":
          todoList.toggleCompleted(id);
          break;
        case "button":
          todoList.removeItem(id);
          break;
        default:
          break;
      }
    }
  }
  init();
})(document);
