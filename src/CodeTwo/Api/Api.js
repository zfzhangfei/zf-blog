import { get, post } from "../../Utils/request";
let currentUser = {};

//#region 用户
export function login() {
  const md5 = require("md5");
  const hash = md5(12345);
  const results = get("/users", { username: "南风知我意", password: hash });
  currentUser = results;
}
export async function getCurrentUser() {
  return currentUser;
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
  post("/updateArticle", params);
}
export async function getArticle() {
  const results = get("/getArticle");
  return results;
}
//#endregion
