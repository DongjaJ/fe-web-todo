import * as fs from "fs";

let Todos = [];
let Status = [];
let Data = {};

const readJson = async () => {
  fs.readFile("./data.json", "utf8", async (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let jsonData = await JSON.parse(data);
    Data.todolist = jsonData["todolist"];
    Data.status = jsonData["status"];
    console.log(Data);
  });
};

const writeJson = () => {
  fs.writeFile("./data.json", JSON.stringify(Data), (err) => {
    if (err) console.log(err);
  });
};

/**
TODO 추가:
POST /api/todos
{ Status, Title, Contents } 
 */
export async function write(ctx) {
  const { Id, Status, Title, Contents } = ctx.request.body;
  const todo = { Id, Status, Title, Contents };
  Data.todolist.unshift(todo);
  await writeJson();
  ctx.body = todo;
}

/**
TODO 조회:
GET /api/todos/:id
 */
export async function list(ctx) {
  await readJson();
  ctx.body = Data.todolist;
}

/**
특정 포스트 조회
GET /api/todos/:id
 */
export function read(ctx) {
  const { id } = ctx.params;
  const todo = Data.todolist.find((todo) => todo.Id === id);
  if (!todo) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다.",
    };
    return;
  }
  ctx.body = todo;
}

/**
TODO 제거:
DElETE /api/todos/:id
 */
export async function remove(ctx) {
  const { id } = ctx.params;
  const index = Data.todolist.findIndex((todo) => todo.Id === id);
  //todo 없으면 오류
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "해당 todolist가 존재하지 않습니다.",
    };
    return;
  }
  Data.todolist.splice(index, 1);
  await writeJson();
  ctx.status = 204; // no content
}

/**
TODO update and move
PUT /api/todos/:id
{ Status } or {Title, Contents}
*/
export async function update(ctx) {
  const { id } = ctx.params;
  const index = Data.todolist.findIndex((todo) => todo.Id === id);
  //todo 없으면 오류
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "해당 todolist가 존재하지 않습니다.",
    };
    return;
  }
  Data.todolist[index] = {
    ...Data.todolist[index],
    ...ctx.request.body,
  };
  await writeJson();
  ctx.body = Data.todolist[index];
}
