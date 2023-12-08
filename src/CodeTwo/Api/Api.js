import { message } from "antd";
import { get, post } from "../../Utils/request";

//#region 用户
export async function login(params) {
  const md5 = require("md5");
  const hash = md5(params.password);
  const results = await get("/users", {
    username: params.username,
    password: hash,
  });
  sessionStorage.setItem("token", results.token);
  sessionStorage.setItem(
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

export async function postTag(params) {
  const results = await post("/postTag", params);
  message.success("标签新增成功");
  return results.res;
}

export async function hiddenTag(params) {
  const results = await post("/deleteTag", params);
  message.success("标签删除成功");
  return results.res;
}
export async function getTags() {
  const results = get("/getTags");
  return results;
}

export async function postCategory(params) {
  const results = post("/postCategory", params);
  message.success("分类新增成功");
  return results;
}
export async function hiddenCategory(params) {
  const results = post("/deleteCategory", params);
  message.success("分类删除成功");
  return results;
}
export async function getCategories() {
  const results = get("/getCategories");
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
  const results = await post("/updateArticle", params);
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
        dispatch({ type: "SET_COMMENTLIST", payload: updatedComments });
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
}

//#region 留言墙
export async function postMessage(params) {
  const results = await post("/postMessage", params);
  return results;
}

export async function hiddenMessage(params) {
  post("/deleteMessage", params);
}
export function getMessageAsync() {
  return function (dispatch) {
    get("/getMessage")
      .then((data) => {
        dispatch({ type: "SET_MESSAGE", payload: data.res });
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
}
//#endregion

//#region 相册
export async function postAlbum(params) {
  const results = await post("/postAlbum", params);
  return results;
}

export async function hiddenAlbum(params) {
  post("/DeleteAlbum", params);
}

export async function updateAlbum(params) {
  const results = await post("/updateAlbum", params);
  return results;
}
export function getAlbumAsync() {
  return function (dispatch) {
    get("/getAlbum")
      .then((data) => {
        dispatch({ type: "SET_ALBUM", payload: data.res });
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
}
export  function getAlbumPictureAsync() {
  return function (dispatch) {
    get("/getAlbumPicture")
      .then((data) => {
        dispatch({ type: "SET_PICTURE", payload: data.res });
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
}

//#endregion

//#region 图片
export async function putBosPicture(params) {
  const results = await post("/putBosPicture", params);
  return results;
}

export async function hiddenBosPicture(params) {
  post("/DeleteBosPicture", params);
}
export function getBosPictureAsync() {
  return function (dispatch) {
    get("/getBosPicture")
      .then((data) => {
        dispatch({ type: "SET_PICTURE", payload: data.res });
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
}
//#endregion

//#endregion
