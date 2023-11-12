import React, { useState } from "react";
import Vditor from "vditor";
import MarkDown from './markDown';
import './VditorEditor.scss'

const VditorEditor = ({ props }) => {
  const [html, setHtml] = useState(props.content)

  React.useEffect(() => {
    const vditor = new Vditor("vditor", {
      mode: "wysiwyg",
      after: () => {
        vditor.setValue(props.content);
      },
      input(value) {
        // 输入变化时保存当前值 
        // saveArticle(value);
        setHtml(value)
      },
    });
  }, []);


  return (
    <div id='MyVditor'>
      <div id="vditor" className="vditor" />
      <div id='ShowVditor'>
        <MarkDown html={html}></MarkDown>
      </div>
    </div>
  );
};

export default VditorEditor;





