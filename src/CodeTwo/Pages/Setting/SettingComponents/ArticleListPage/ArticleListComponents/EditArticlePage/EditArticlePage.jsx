import React from "react";
import VditorEditor from "../../../../../../../Plugin/VditorEditor/VditorEditor";
import "./EditArticlePage.scss";
import { Button } from "antd";
import ArticleDrawer from "../Drawer/ArticleDrawer";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function EditArticlePage({ list, props }) {
  const goBackList = () => {
    list();
  };
  
  return (
    <div id="EditArticlePage">
      <div className="EditArticleBox2">
        <VditorEditor props={props} goBackList={goBackList}/>
      </div>
    </div>
  );
}
