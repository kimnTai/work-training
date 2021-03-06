import { IInputOptions } from "./type";
import Component from "./Components";
import List from "./List";

class Input extends Component {
  private options: IInputOptions;
  constructor(options: IInputOptions) {
    super();
    this.options = options;
  }
  public render(): void {
    const { placeholderText, buttonText } = this.options;
    this.options.wrapperEl.innerHTML += Component.inputView(
      placeholderText,
      buttonText
    );
  }

  public bindEvent(): void {
    const oAddBtn = document.querySelector(".add-btn");
    const oInput: HTMLInputElement = document.querySelector(".todo-input");
    oAddBtn.addEventListener(
      "click",
      this.handleBtnClick.bind(this, oInput),
      false
    );
  }
  private handleBtnClick(inputDom: HTMLInputElement): void {
    const val: string = inputDom.value.trim();
    if (val.length) {
      console.log(val);
      List.addItem(val);
      inputDom.value = "";
    }
  }
}

export default Input;
