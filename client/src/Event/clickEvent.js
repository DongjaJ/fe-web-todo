import { makeNewInput } from "../utils.js";
import { addInputEvent } from "./inputEvent.js";
import { storeDeletedItem } from "../dataProcessing.js";
import { modal } from "../Modal.js";
import { TodosStatus } from "../store.js";
import { render } from "../render.js";

function addColumn(button) {
  if (button) {
    TodosStatus.push("새로운 칼럼");
    render();
  }
}

function addAction(event) {
  const input_items = document.querySelector(".input-items");
  if (input_items) {
    input_items.remove();
    return;
  }
  const to_be_added_ul = event.target.closest("section").querySelector("ul");
  const input_new_element = makeNewInput("등록");
  to_be_added_ul.insertAdjacentHTML("afterbegin", input_new_element);
  addInputEvent();
  return;
}

function deleteList(event) {
  const delete_btn = event.target.closest(".delete-lst");
  const id = event.target.dataset.id;
  if (id && delete_btn) {
    storeDeletedItem(id);
    modal.classList.toggle("act");
  }
}

const clickEvent = (body) => {
  //클릭 이벤트 한꺼번에 설정해 위임
  body.addEventListener("click", (e) => {
    const add_btn = e.target.closest(".add");
    const add_column_btn = e.target.closest(".plus-column");

    // + 버튼 눌럿을때 add action
    if (add_btn) {
      addAction(e);
    }

    // x 버튼 눌렀을 때 리스트 내용 삭제하고 삭제 모달창 활성화
    deleteList(e);

    // 컬럼추가 기능
    /**
     * TODO
     * 서버에도 컬럼추가 반영
     */
    addColumn(add_column_btn);
  });
};

export { clickEvent };
