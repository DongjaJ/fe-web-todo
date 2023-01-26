import { TodosStatus, Todos, BeforeUpdateItem, InputData } from "./store.js";
import { makeTodoSection } from "./template.js";

/**
 * 전체 화면 렌더링하는 함수
 * 1. todolist 초기화
 * 2. status 마다 섹션 생성
 * 3. 생성한 섹션을 todolist안에 삽입
 */
const render = () => {
  let todolist = document.querySelector(".todolist");
  todolist.innerHTML = "";
  TodosStatus.forEach((status) => {
    console.log("🚘", status);
    const items = Todos.filter((item) => item.Status === status);
    const created_section = makeTodoSection(items, status);
    todolist.insertAdjacentHTML("beforeend", created_section);
  });
};

export { render };
