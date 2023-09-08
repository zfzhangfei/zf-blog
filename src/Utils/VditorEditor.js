import "vditor/dist/index.css";
import "../Code/Module/Css/Markdown.css"
import React from "react";
import Vditor from "vditor";

const VditorEditor = ({ currentArtical, saveArticle }) => {

  React.useEffect(() => {
    const vditor = new Vditor("vditor", {
      mode: "sv",
      height: "calc(100vh - 200px)",
      after: () => {
        vditor.setValue(currentArtical.Content);
      },
      input(value) {
        // 输入变化时保存当前值 
        saveArticle(value);
      },
    });
  }, []);

  return <div id="vditor" className="vditor" height="1000px" />;
};

export default VditorEditor;





