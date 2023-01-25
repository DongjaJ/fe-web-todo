import { TodosStatus } from "./store.js";

export function checkColumnNameValidity(newColumnName) {
  console.log("😇", newColumnName);
  if (TodosStatus.includes(newColumnName)) {
    alert("중복된 칼럼 이름입니다.");
    return true;
  } else {
    return false;
  }
}
