import React, { useEffect, useState } from "react";
import Vditor from "vditor";
import MarkDown from "./markDown";
import "./VditorEditor.scss";
import { Button, message, Space } from "antd";
import { updateArticle } from "../../CodeTwo/Api/Api";
import { useRef } from "react";

const VditorEditor = ({ props, goBackList }) => {
  const [html, setHtml] = useState(props.content ? props.content : "");
  const [messageApi, contextHolder] = message.useMessage();
  // 使用 ref 持久化 html 的最新值，它不会重新触发渲染
  const htmlRef = useRef(html);

  React.useEffect(() => {
    const vditor = new Vditor("vditor", {
      height: "100%",
      mode: "sv",
      render: {
        anchor: true, // 假设的配置项，根据实际文档来调整
      },
      after: () => {
        vditor.setValue(html);
      },
      input(value) {
        // 输入变化时保存当前值
        setHtml(value);
      },
      toolbar: [
        {
          name: "goback",
          tipPosition: "s",
          tip: "返回列表页面",
          className: "goback",
          icon: '<svg t="1701312755121" class="icon" viewBox="0 0 1142 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5363" width="200" height="200"><path d="M1142.76662 421.476662H295.468175l318.64215-319.366337L512 0 0 512l512 512 102.110325-102.110325-354.851485-355.575672h883.50778v-144.837341z" fill="#42434B" p-id="5364"></path></svg>',
          click: () => {
            goBackList();
          },
        },
        "emoji",
        "headings",
        "bold",
        "italic",
        "strike",
        "link",
        "|",
        "list",
        "ordered-list",
        "check",
        "outdent",
        "indent",
        "|",
        "quote",
        "line",
        "code",
        "inline-code",
        "insert-before",
        "insert-after",
        "|",
        "upload",
        "record",
        "table",
        "|",
        "undo",
        "redo",
        "|",
        "fullscreen",
        "edit-mode",
        {
          name: "save",
          tipPosition: "s",
          tip: "保存",
          icon: '<svg t="1701311694284" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4397" width="200" height="200"><path d="M885.44 1024H138.688a139.072 139.072 0 0 1-138.688-138.624V138.688C0.064 62.4 62.528 0 138.752 0h746.688c76.224 0 138.624 62.4 138.624 138.688v746.688A139.072 139.072 0 0 1 885.44 1024zM138.688 64A74.88 74.88 0 0 0 64.064 138.688v746.688A74.88 74.88 0 0 0 138.752 960h746.688a74.88 74.88 0 0 0 74.624-74.624V138.688A74.88 74.88 0 0 0 885.44 64H138.688z" fill="#666666" p-id="4398"></path><path d="M752.064 497.088h-480c-46.912 0-85.312-38.4-85.312-85.312V38.4c0-17.6 14.4-32 32-32h586.688c17.6 0 32 14.4 32 32v373.376c0 46.912-38.4 85.312-85.376 85.312zM250.752 70.4v341.376c0 11.712 9.6 21.312 21.312 21.312h480c11.776 0 21.376-9.6 21.376-21.312V70.4H250.688z" fill="#666666" p-id="4399"></path><path d="M652.352 378.688a32.128 32.128 0 0 1-32-32V197.312c0-17.536 14.4-32 32-32s32 14.464 32 32v149.376c0 17.6-13.888 32-32 32z" fill="#666666" p-id="4400"></path></svg>',
          click: () => {
            const content = vditor.getValue(); // 获取编辑器内容
            onSave(content); // 调用保存函数（需要你自己定义这个函数）
          },
        },
        {
          name: "more",
          toolbar: [
            "both",
            "code-theme",
            "content-theme",
            "export",
            "outline",
            "preview",
            "devtools",
            "info",
            "help",
          ],
        },
      ],
      toolbarConfig: {
        hide: false,
        pin: true,
      },
    });
  }, []);

  // 每次 html 变化后更新 ref
  useEffect(() => {
    htmlRef.current = html;
  }, [html]);

  useEffect(() => {
    const interval = setInterval(() => {
      onSaveTwo(htmlRef.current);
    }, 10000);

    return () => clearInterval(interval);
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

  const onSaveTwo = async (value) => {
    const params = {
      ...props,
      content: value,
    };
    await updateArticle(params);
  };

  return (
    <div id="MyVditor">
      <div id="vditor" className="vditor" />
      {/* <div id="ShowVditor">
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
      </div> */}
    </div>
  );
};

export default VditorEditor;
