import React, { Component } from "react";
import { post, get } from "./Utils/request";
import Routers from "./CodeTwo/Routes/Routers";

Component.prototype.get = get;
Component.prototype.post = post;

function App() {
  // window.addEventListener("beforeunload", () => {
  //   // 在这里执行清理操作，如清除localStorage
  //   localStorage.clear();
  // });

  return (
    <div>
      <Routers></Routers>
    </div>
  );
}

export default App;
