import React, { Component } from "react";
import { post, get } from "./Utils/request";
import Routers from "./CodeTwo/Routes/Routers";

Component.prototype.get = get;
Component.prototype.post = post;

function App() {

  return (
    <div>
      <Routers></Routers>
    </div>
  );
}

export default App;
