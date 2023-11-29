import React, { Component } from "react";
import { post, get } from "./Utils/request";
import Routers from "./CodeTwo/Routes/Routers";
import HomeRouters from "./CodeTwo/Routes/HomeRouters";

Component.prototype.get = get;
Component.prototype.post = post;

function App() {

  return (
    <div>
      <HomeRouters></HomeRouters>
    </div>
  );
}

export default App;
