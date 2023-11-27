import React, { useState } from "react";
import { Button, Drawer, Space, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { GlobalContext } from "../../../../../../../Utils/GlobalProvider";
import { EditFilled } from "@ant-design/icons";
import { updateArticle } from "../../../../../../Api/Api";

export default function ArticleDrawer({
  addArticle,
  type,
  EditContent,
  editArticle,
}) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onFinish = async (value) => {
    const values = {
      ...value,
      tags: value.tag?.join("/"),
      Id: EditContent?.Id,
    };
    type == "Add" && addArticle(values);
    type == "Edit" && editArticle(values);
    setOpen(false);
  };

  return (
    <GlobalContext.Consumer>
      {(context) => (
        <>
          {type == "Add" && (
            <Button type="primary" onClick={showDrawer} style={{ margin: 10 }}>
              新建文章
            </Button>
          )}
          {type == "Edit" && (
            <EditFilled style={{ color: "#2ECC71" }} onClick={showDrawer} />
          )}
          <Drawer
            title="文章信息"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              layout="horizontal"
              style={{ maxWidth: 600 }}
              onFinish={onFinish}
              initialValues={{
                name: EditContent ? EditContent.name : "",
                tag: EditContent ? EditContent.tags?.split("/") : [],
                category: EditContent ? EditContent.category : "",
                summary: EditContent ? EditContent.summary : "",
                cover: EditContent ? EditContent.cover : "/CodeTwo/Homepage/NANA1.Webp",
              }}
            >
              <Form.Item label="文章名" name="name">
                <Input />
              </Form.Item>
              <Form.Item label="标签" name="tag">
                <Select mode="multiple">
                  {context.state.MarkList &&
                    Object.keys(context.state.MarkList).map((key) => {
                      return (
                        <Select.Option key={key} value={key}>
                          {context.state.MarkList[key].value}
                        </Select.Option>
                      );
                    })}
                </Select>
              </Form.Item>
              <Form.Item label="分类" name="category">
                <Select>
                  {context.state.CategoryList &&
                    Object.keys(context.state.CategoryList).map((key) => {
                      return (
                        <Select.Option key={key} value={key}>
                          {context.state.CategoryList[key].Title}
                        </Select.Option>
                      );
                    })}
                </Select>
              </Form.Item>
              <Form.Item label="简介" name="summary">
                <TextArea></TextArea>
              </Form.Item>
              <Form.Item label="封面图片地址" name="cover">
                <Input></Input>
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
      )}
    </GlobalContext.Consumer>
  );
}
