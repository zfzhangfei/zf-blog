import React, { useState } from "react";
import Vditor from "vditor";
import MarkDown from "./markDown";
import "./VditorEditor.scss";
import { Button, message, Space } from "antd";
import { updateArticle } from "../../CodeTwo/Api/Api";

const VditorEditor = ({ props }) => {
  const [html, setHtml] = useState(props.content ? props.content : "");
  const [messageApi, contextHolder] = message.useMessage();

  React.useEffect(() => {
    const vditor = new Vditor("vditor", {
      mode: "wysiwyg",
      after: () => {
        vditor.setValue(html);
      },
      input(value) {
        // 输入变化时保存当前值
        // onSave(value);
        setHtml(value);
      },
    });
  }, []);

  const onSave = async (value) => {
    const params = {
      ...props,
      content: value,
    };
    const result = await updateArticle(params);
    if (result && result.res.warningCount > 0) {
      message.error("保存失败！");
    } else {
      message.success("保存成功！");
    }
  };

  return (
    <div id="MyVditor">
      <div id="vditor" className="vditor" />
      <div id="ShowVditor">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={() => {
              onSave(html);
            }}
          >
            保存
          </Button>
          <MarkDown html={html}></MarkDown>
        </Space>
      </div>
    </div>
  );
};

export default VditorEditor;
