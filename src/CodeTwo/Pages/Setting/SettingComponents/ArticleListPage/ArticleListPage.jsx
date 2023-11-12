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
import ArticleDrawer from "./ArticleListComponents/Drawer/ArticleDrawer";
import VditorEditor from "../../../../../Plugin/VditorEditor/VditorEditor";
import EditArticlePage from "./ArticleListComponents/EditArticlePage/EditArticlePage";
import PreviewModal from "./ArticleListComponents/PreviewModal/PreviewModal";
import { getArticle, postArtical } from "../../../../Api/Api";
import { GlobalContext } from "../../../../../Utils/GlobalProvider";

const createColumns = (handleReleaseChange, edit, context) => [
  {
    title: "文章名",
    dataIndex: "name",
    key: "name",
    render: (_, record) => (
      <PreviewModal record={record} ></PreviewModal>
    ),
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
      const tagArray = tags?.split('/'); // 这一行将 'tags' 字符串转换为数组
      return (
        <>
          {tagArray?.map((tag) => {
            return (
              <Tag color={context.state.MarkList[tag].color} key={tag}>
                {context.state.MarkList[tag].value.toUpperCase()}
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
        <Button
          className="edit"
          onClick={() => {
            edit(record);
          }}
        >
          编辑
        </Button>
        <Button className="delete">删除</Button>
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
  //#region 测试用
  const handleReleaseChange = (record) => {
    // 更新文章API
    // 模拟一个API调用
    // 在data中找到需要更新的记录，并替换为最新的记录
    const newRecord = {
      ...record,
      isRelease: !record.isRelease,
    };
    setData(data.map((item) => (item.Id === record.Id ? newRecord : item)));
  };

  const addArticle = async(value) => {
    const params={
      name:value.articleName,
      tags:value.tags,
      category:value.category,
      summary:value.description,
      author:"admin",
      cover:null,
      isRelease:false,
    }
    await postArtical(params);
    setData([
      ...data,
      {
        key: value.articleName,
        name: value.articleName,
        summary: value.description,
        category: value.category,
        tags: value.tags,
        isRelease: false,
      },
    ]);
  };

  const edit = (value) => {
    setCurrentArticle(value)
    setPageType("EditPage");
  };
  const list = () => {
    setPageType("ListPage");
  };

  const search = () => {
    if (
      searchParams.name == "" &&
      searchParams.tags.length == 0 &&
      searchParams.category == undefined
    ) {
      setData(articleData);
    } else {
      const filterData = articleData.filter(
        (item) => {
          const tagArray = item.tags?.split('/'); // 这一行将 'tags' 字符串转换为数组
          return (searchParams.tags.length > 0
            ? searchParams.tags.some((tag) => tagArray?.includes(tag))
            : true) &&
            (searchParams.name
              ? item.name.toLowerCase().includes(searchParams.name.toLowerCase())
              : true) &&
            (searchParams.category
              ? item.category.includes(searchParams.category)
              : true)
        }
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
    <GlobalContext.Consumer>
      {
        context => {
          const columns = createColumns(handleReleaseChange, edit, context);
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
                            {
                              Object.keys(context.state.MarkList).map(key => {
                                return (
                                  <Select.Option key={key} value={key}>{context.state.MarkList[key].value}</Select.Option>
                                )
                              })
                            }
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
                            <Select.Option value="demo1" key={1}>Demo1</Select.Option>
                            <Select.Option value="demo2" key={2}>Demo2</Select.Option>
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
                <EditArticlePage list={list} props={currentArticle}></EditArticlePage>
              )}
            </div>
          )
        }
      }
    </GlobalContext.Consumer>

  );
};
export default ArticleListPage;
