import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, Space, Table, Tag } from "antd";
import "./ArticleListPage.scss";
import ArticleDrawer from "./ArticleListComponents/Drawer/ArticleDrawer";
import EditArticlePage from "./ArticleListComponents/EditArticlePage/EditArticlePage";
import PreviewModal from "./ArticleListComponents/PreviewModal/PreviewModal";
import {
  updateArticle,
  getArticle,
  postArtical,
  hiddenArticle,
} from "../../../../Api/Api";
import { GlobalContext } from "../../../../../Utils/GlobalProvider";

const createColumns = (
  handleReleaseChange,
  edit,
  context,
  editArticle,
  deleteArticle
) => [
  {
    title: "文章名",
    dataIndex: "name",
    key: "name",
    render: (_, record) => <PreviewModal record={record}></PreviewModal>,
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
    render: (_, { tags }) => {
      const tagArray = tags?.split("/"); // 这一行将 'tags' 字符串转换为数组
      return (
        <>
          {context.state.MarkList &&
            tagArray?.map((tag) => {
              return (
                <Tag color={context.state.MarkList[tag]?.color} key={tag}>
                  {context.state.MarkList[tag]?.value.toUpperCase()}
                </Tag>
              );
            })}
        </>
      );
    },
  },
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
        <ArticleDrawer
          type={"Edit"}
          EditContent={record}
          editArticle={editArticle}
        />
        <Button
          className="edit"
          onClick={() => {
            edit(record);
          }}
        >
          编辑
        </Button>
        <Button
          className="delete"
          onClick={() => {
            deleteArticle(record);
          }}
        >
          删除
        </Button>
      </Space>
    ),
  },
];

const ArticleListPage = () => {
  const [form] = Form.useForm(); // 获取Form实例
  const [data, setData] = useState();
  const [articleData, setArticleData] = useState();
  const [currentArticle, setCurrentArticle] = useState();
  const [pageType, setPageType] = useState("ListPage");
  const [searchParams, setSearchParams] = useState({
    name: "",
    tags: [],
    category: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getArticle();
      setData(result.res);
      setArticleData(result.res);
    };

    fetchData();
  }, []);

  /**
   * 点击是否发布按钮
   * @param {*} record
   */
  const handleReleaseChange = async (record) => {
    const newRecord = {
      ...record,
      isRelease: !record.isRelease,
    };
    await updateArticle(newRecord);
    setData(data.map((item) => (item.Id === record.Id ? newRecord : item)));
  };
  /**
   * 新增文章---从AryicleDrawer页面点击，传值到该方法
   * @param {*} value
   */
  const addArticle = async (value) => {
    const params = {
      ...value,
      author: "admin",
      cover: null,
      isRelease: false,
    };
    const result = await postArtical(params);
    setData([
      ...data,
      {
        Id: result.res.insertId,
        name: params.name,
        summary: params.summary,
        category: params.category,
        tags: params.tags,
        isRelease: false,
      },
    ]);
  };
  /**
   * 编辑文章的基本信息---从AryicleDrawer页面点击，传值到该方法
   * @param {*} value
   */
  const editArticle = async (value) => {
    await updateArticle(value);
    setData(data.map((item) => (item.Id === value.Id ? value : item)));
  };
  /**
   * 删除文章
   */
  const deleteArticle = async (value) => {
    if (window.confirm("确定要删除该文章?")) {
      await hiddenArticle(value);
      setData(data.filter((item) => item.Id !== value.Id));
    }
  };
  /**
   * 切换编辑文章内容的页面(编辑器页面)
   * @param {*} value
   */
  const edit = (value) => {
    setCurrentArticle(value);
    setPageType("EditPage");
  };
  /**
   * 切换到文章列表页面
   */
  const list = () => {
    setPageType("ListPage");
  };

  /**
   * 文章列表页面顶部的搜索工具栏
   */
  const search = () => {
    if (
      searchParams.name == "" &&
      searchParams.tags.length == 0 &&
      searchParams.category == undefined
    ) {
      setData(articleData);
    } else {
      const filterData = articleData.filter((item) => {
        const tagArray = item.tags?.split("/"); // 这一行将 'tags' 字符串转换为数组
        return (
          (searchParams.tags.length > 0
            ? searchParams.tags.some((tag) => tagArray?.includes(tag))
            : true) &&
          (searchParams.name
            ? item.name.toLowerCase().includes(searchParams.name.toLowerCase())
            : true) &&
          (searchParams.category
            ? item.category.includes(searchParams.category)
            : true)
        );
      });
      setData(filterData);
    }
  };
  /**
   * 重置搜索的按钮方法
   */
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

  return (
    <GlobalContext.Consumer>
      {(context) => {
        const columns = createColumns(
          handleReleaseChange,
          edit,
          context,
          editArticle,
          deleteArticle
        );
        return (
          <div style={{ height: "100%" }}>
            {pageType == "ListPage" && (
              <div id="ArticleListPage">
                <div className="filter">
                  <Form form={form}>
                    <Space>
                      <Form.Item>
                        <ArticleDrawer addArticle={addArticle} type={"Add"} />
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
                          {Object.keys(context.state.MarkList).map((key) => {
                            return (
                              <Select.Option key={key} value={key}>
                                {context.state.MarkList[key].value}
                              </Select.Option>
                            );
                          })}
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
                          <Select.Option value="demo1" key={1}>
                            Demo1
                          </Select.Option>
                          <Select.Option value="demo2" key={2}>
                            Demo2
                          </Select.Option>
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
                <Table
                  columns={columns}
                  dataSource={data}
                  scroll={{ y: "calc(100vh - 195px)" }}
                  className="table"
                />
              </div>
            )}
            {pageType == "EditPage" && (
              <EditArticlePage
                list={list}
                props={currentArticle}
              ></EditArticlePage>
            )}
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
};
export default ArticleListPage;
