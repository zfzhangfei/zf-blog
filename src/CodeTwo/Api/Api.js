import { get, post } from "../../Utils/request";

//#region 用户
export async function login(params) {
  const md5 = require("md5");
  const hash = md5(params.password);
  const results = await get("/users", {
    username: params.username,
    password: hash,
  });
  localStorage.setItem("token", results.token);
  localStorage.setItem(
    "CurrentUser",
    JSON.stringify({
      username: results.username,
      avatar: results.avatar,
    })
  );
}

export async function getUsers() {
  const results = get("/getUsers");
  return results;
}

export function getUsersAsync() {
  return function (dispatch) {
    get("/getUsers")
      .then((data) => {
        let userList = {};
        data.res.forEach((user) => {
          userList[user.id] = {
            username: user.username,
            avatar: user.avatar,
          };
        });
        dispatch({ type: "SET_USER_LIST", payload: userList });
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
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









export async function postComment(params) {
  const results = post("/postComment", params);
  return results;
}

export async function hiddenComment(params) {
  post("/deleteComment", params);
}
export async function getComments() {
  const results = get("/getComments");
  return results;
}

export async function getCommentByArticleId(params) {
  const results = get("/getCommentByArticleId", params);
  return results;
}

export function getCommentByArticleIdAsync(params) {
  return function (dispatch) {
    get("/getCommentByArticleId", params)
      .then((data) => {
        const updatedComments = data.res.map((comment) => {
          return {
            ...comment,
            IsReply: false,
          };
        });
        dispatch({ type: "SET_COMMENLIST", payload: updatedComments });
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
}


//#endregion
