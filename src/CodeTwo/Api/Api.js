import { get, post } from "../../Utils/request";
let currentUser = {};

//#region 用户
export async function login(params) {
  const md5 = require("md5");
  const hash = md5(params.password);
  const results = await get("/users", {
    username: params.username,
    password: hash,
  });
  console.log(results,'results');
  localStorage.setItem("token", results.token);
  localStorage.setItem(
    "CurrentUser",
    JSON.stringify({
      username: results.username,
      avatar: results.avatar,
    })
  );

  currentUser = results;
}
export async function getCurrentUser() {
  return currentUser;
}

export async function getUsers() {
  const results = get("/getUsers");
  return results;
}

export async function getTags() {
  const results = get("/getTags");
  return results;
}

export async function postArtical(params) {
  const results = post("/postArtical", params);
  return results;
}
export async function hiddenArticle(params) {
  post("/deleteArticle", params);
}
export async function updateArticle(params) {
  const results = post("/updateArticle", params);
  return results;
}
export async function getArticle() {
  const results = get("/getArticle");
  return results;
}

export async function getCommentByArticleId(params) {
  const results = get("/getCommentByArticleId", params);
  return results;
}
export async function postComment(params) {
  const results = post("/postComment", params);
  return results;
}

//#endregion
