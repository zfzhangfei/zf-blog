import React, { useState } from "react";
import { Button, Form, Input, Modal, Space, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const AddCategoryModal = ({ setCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    setIsModalOpen(false);
    setCategory({
      Title: values.title,
      Icon: values.icon,
      UrlParam:values.urlParam
    });
  };
  return (
    <>
      <Button type="primary">
        <PlusOutlined
          style={{ fontWeight: "bold", fontSize: 16 }}
          onClick={showModal}
        />
      </Button>
      <Modal
        open={isModalOpen}
        footer={false}
        // onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ justifyContent: "left" ,marginTop:40}}
        >
          <Form.Item
            label="分类名"
            name="title"
            rules={[
              {
                required: true,
                message: "分类名不能为空!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="图片地址"
            name="icon"
            rules={[
              {
                required: true,
                message: "图片地址不能为空!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="路由地址"
            name="urlParam"
            rules={[
              {
                required: true,
                message: "路由地址不能为空!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 11,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default AddCategoryModal;
