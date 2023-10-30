import React, { useState } from 'react';
import {
  Button,
  Drawer,
  Space,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect
} from 'antd';
import TextArea from 'antd/es/input/TextArea';

export default function ArticleDrawer() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} style={{ margin: 5 }}>
        新建文章
      </Button>
      <Drawer title="新建" placement="right" onClose={onClose} open={open}>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="文章名">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="简介">
            <TextArea></TextArea>
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item style={{ width: '100%', textAlign: 'center' }}>
            <Space>
              <Button style={{ margin: 5 }} >
                保存
              </Button>
              <Button type="primary" style={{ margin: 5 }}>
                发布
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}




