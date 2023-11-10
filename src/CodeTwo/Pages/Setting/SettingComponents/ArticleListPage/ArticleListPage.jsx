import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Form,
  Input,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import "./ArticleListPage.scss";
import ArticleDrawer from "../Drawer/ArticleDrawer";
import VditorEditor from "../../../../../Plugin/VditorEditor/VditorEditor";
import EditArticlePage from "../EditArticlePage/EditArticlePage";

const createColumns = (handleReleaseChange, edit) => [
  {
    title: "文章名",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "简介",
    dataIndex: "summary",
    key: "summary",
  },
  {
    title: "分类",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "标签",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags?.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  Table.SELECTION_COLUMN,
  {
    title: "是否发布",
    dataIndex: "isRelease",
    key: "isRelease",
    render: (_, record) => (
      <div class="checkbox-con">
        <input
          id="checkbox"
          type="checkbox"
          checked={record.isRelease}
          onChange={() => handleReleaseChange(record)}
        />
      </div>
    ),
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle" className="actionBtns">
        <Button
          className="edit"
          onClick={() => {
            edit();
          }}
        >
          编辑
        </Button>
        <Button className="delete">删除</Button>
      </Space>
    ),
  },
];

const aritcleData = [
  {
    key: "1",
    name: "《海上华庭》",
    summary: 32,
    category: "demo2",
    tags: ["nice", "developer"],
    isRelease: true,
  },
  {
    key: "2",
    name: "Jim Green",
    summary: 42,
    category: "demo1",
    tags: ["loser"],
    isRelease: false,
  },
  {
    key: "3",
    name: "Joe Black",
    summary: 32,
    category: "demo2",
    tags: ["cool", "teacher"],
    isRelease: false,
  },
];

const ArticleListPage = () => {
  const [form] = Form.useForm(); // 获取Form实例
  const [data, setData] = useState(aritcleData);
  const [pageType, setPageType] = useState("ListPage");
  const [searchParams, setSearchParams] = useState({
    name: "",
    tags: [],
    category: null,
  });

  //#region 测试用
  const handleReleaseChange = (record) => {
    // 更新文章API
    // 模拟一个API调用
    // 在data中找到需要更新的记录，并替换为最新的记录
    const newRecord = {
      ...record,
      isRelease: !record.isRelease,
    };
    setData(data.map((item) => (item.key === record.key ? newRecord : item)));
  };

  const addArticle = (value) => {
    console.log(value);
    setData([
      ...data,
      {
        key: value.articleName,
        name: value.articleName,
        summary: value.description,
        category: value.category,
        tags: value.tag,
        isRelease: "false",
      },
    ]);
  };

  const edit = () => {
    setPageType("EditPage");
  };
  const list = () => {
    setPageType("ListPage");
  };

  const search = () => {
    console.log(searchParams);
    if (
      searchParams.name == "" &&
      searchParams.tags.length == 0 &&
      searchParams.category == undefined
    ) {
      setData(aritcleData);
    } else {
      const filterData = aritcleData.filter(
        (item) =>
          (searchParams.tags.length > 0
            ? searchParams.tags.some((tag) => item.tags.includes(tag))
            : true) &&
          (searchParams.name
            ? item.name.toLowerCase().includes(searchParams.name.toLowerCase())
            : true) &&
          (searchParams.category
            ? item.category.includes(searchParams.category)
            : true)
      );
      setData(filterData);
    }
  };
  const clear = () => {
    setSearchParams({
      name: "",
      tags: [],
      category: undefined,
    });
    form.setFieldsValue({
      category: undefined,
    });
  };
  //#endregion

  const columns = createColumns(handleReleaseChange, edit);
  return (
    <div>
      {pageType == "ListPage" && (
        <div id="ArticleListPage">
          <div className="filter">
            <Form form={form}>
              <Space>
                <Form.Item>
                  <ArticleDrawer addArticle={addArticle} />
                </Form.Item>
                <Form.Item label="文章名">
                  <Input
                    placeholder="请输入要搜索的文章名"
                    style={{ width: 200 }}
                    value={searchParams.name}
                    onChange={(event) =>
                      setSearchParams({
                        ...searchParams,
                        name: event.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item label="标签">
                  <Select
                    mode="tags"
                    style={{ width: 200 }}
                    value={searchParams.tags}
                    onChange={(value) =>
                      setSearchParams({
                        ...searchParams,
                        tags: value,
                      })
                    }
                  >
                    <Select.Option value="nice">NICE</Select.Option>
                    <Select.Option value="developer">DEVELOPER</Select.Option>
                    <Select.Option value="loser">LOSER</Select.Option>
                    <Select.Option value="cool">COOL</Select.Option>
                    <Select.Option value="teacher">TEACHER</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label="分类" name="category">
                  <Select
                    style={{ width: 200 }}
                    allowClear
                    onChange={(value) =>
                      setSearchParams({
                        ...searchParams,
                        category: value,
                      })
                    }
                  >
                    <Select.Option value="demo1">Demo1</Select.Option>
                    <Select.Option value="demo2">Demo2</Select.Option>
                    <Select.Option value="demo3">Demo3</Select.Option>
                    <Select.Option value="demo4">Demo4</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Space>
                    <Button
                      size="small"
                      onClick={() => {
                        clear();
                      }}
                    >
                      重置
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        search();
                      }}
                    >
                      查询
                    </Button>
                  </Space>
                </Form.Item>
              </Space>
            </Form>
          </div>
          <Table columns={columns} dataSource={data} className="table" />
        </div>
      )}
      {pageType == "EditPage" && (
        <EditArticlePage list={list}></EditArticlePage>
      )}
    </div>
  );
};
export default ArticleListPage;
