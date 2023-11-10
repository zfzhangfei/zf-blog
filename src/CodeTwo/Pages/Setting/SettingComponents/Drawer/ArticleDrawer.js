import React, { useState } from "react";
import { Button, Drawer, Space, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function ArticleDrawer({addArticle}) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (value) => {
    addArticle(value)
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} style={{ margin: 10 }}>
        新建文章
      </Button>
      <Drawer title="新建" placement="right" onClose={onClose} open={open}>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
        >
          <Form.Item label="文章名" name="articleName">
            <Input />
          </Form.Item>
          <Form.Item label="标签" name="tag">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="分类" name="category">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="简介" name="description">
            <TextArea></TextArea>
          </Form.Item>
          <Form.Item
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button type="primary" style={{ margin: 10 }} htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
