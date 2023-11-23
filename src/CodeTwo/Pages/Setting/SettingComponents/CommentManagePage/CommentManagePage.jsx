import React, { useState } from "react";
import "./CommentManagePage.scss";
import { Space, Button, Table } from "antd";
import { getComments, hiddenComment } from "../../../../Api/Api";
import { useEffect } from "react";

const createColumns = (deleteComment) => [
  {
    title: "评论",
    dataIndex: "Content",
    key: "Content",
    flex: 1,
  },
  {
    title: "操作",
    key: "action",
    width: 200,
    render: (_, record) => (
      <Space size="middle" className="actionBtns">
        <Button
          className="delete"
          onClick={() => {
            deleteComment(record);
          }}
        >
          删除
        </Button>
      </Space>
    ),
  },
];

const CommentManagePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getComments();
      setData(result.res);
    };

    fetchData();
  }, []);

  const deleteComment = async (value) => {
    if (window.confirm("确定要删除该评论?")) {
      await hiddenComment(value);
      setData(data.filter((item) => item.Id !== value.Id));
    }
  };

  const columns = createColumns(deleteComment);
  return (
    <div className="CommentManagePage">
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          y: 'calc(100vh - 119px)'
        }}
        className="table"
      />
    </div>
  );
};

export default CommentManagePage;
