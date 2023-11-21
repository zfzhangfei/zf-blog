import React, { useState } from "react";
import { Button, Empty, Modal } from "antd";
import "./PreviewModal.scss";
import ReactMarkdown from "react-markdown";
import MarkDown from "../../../../../../../Plugin/VditorEditor/markDown";

const PreviewModal = ({ record }) => {
  const [open, setOpen] = useState(false);
  const [html, setHtml] = useState(record.content);

  return (
    <>
      <a onClick={() => setOpen(true)}>{record.name}</a>
      <Modal
        centered
        open={open}
        footer={null}
        // onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
       <MarkDown html={html}></MarkDown>
      </Modal>
    </>
  );
};
export default PreviewModal;
