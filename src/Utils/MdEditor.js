import React, { useState, useEffect } from "react"
import MdEditor from 'for-editor'
import { postArtical, editArtical } from "../Code/Module/Api/Api";
import { message } from "antd";
import dayjs from 'dayjs';

const DemoEditor = ({ currentArtical, currentSelectMark }) => {
  /** 默认工具栏按钮全部开启, 传入自定义对象
  例如: {
    h1: true, // h1
    code: true, // 代码块
    preview: true, // 预览
  }
  此时, 工具栏只显示此三个功能键（注：传入空对象则不显示工具栏）
  */
  // 工具栏菜单
  const toolbar = {
    h1: true, // h1
    h2: true, // h2
    h3: true, // h3
    h4: true, // h4
    img: true, // 图片
    link: true, // 链接
    code: true, // 代码块
    preview: true, // 预览
    expand: true, // 全屏
    /* v0.0.9 */
    undo: true, // 撤销
    redo: true, // 重做
    save: true, // 保存
    /* v0.2.3 */
    subfield: true, // 单双栏模式
  };

  // 保存Markdown文本内容
  const [mdContent, setMdContent] = useState(currentArtical.Content)
  const [messageApi, contextHolder] = message.useMessage();

  //每三分钟保存一下内容
  useEffect(() => {
    const interval = setInterval(() => {
      handleEditorSave(mdContent);

    }, 3 * 60 * 1000);
    return () => clearInterval(interval);
  }, [mdContent]);

  useEffect(() => {
    if (mdContent !== currentArtical.Content) {
      setMdContent(currentArtical.Content);
    }
  }, [currentArtical.Content]);

  // 上传图片
  function uploadImg(file) {
    console.log('file', file);
  };
  // 输入内容改变
  function handleEditorChange(value) {
    setMdContent(value)
  }

  // 保存成功
  const success = () => {
    const time = dayjs().format('HH:mm:ss');
    messageApi.open({
      type: 'success',
      content: `保存成功! ${time}`
    });
  };
  // 保存失败
  const error = () => {
    const time = dayjs().format('HH:mm:ss');
    messageApi.open({
      type: 'error',
      content: `保存失败! ${time}`
    });
  };
  // 保存输入内容
  function handleEditorSave(value) {
    editArtical(currentArtical.Name, currentSelectMark ? currentSelectMark : currentArtical.Mark, value, currentArtical.Id).then(() => {
      success();
    }).catch(() => {
      error();
    })
  }


  return (
    <>
      {contextHolder}
      <MdEditor
        placeholder="请输入Markdown文本"
        style={{
          width: '100%',
        }}
        height="calc(100vh - 202px)"
        lineNum={false}
        toolbar={toolbar}
        value={mdContent}
        onChange={handleEditorChange}
        onSave={handleEditorSave}
        addImg={uploadImg} />
    </>
  )
}
export default DemoEditor
