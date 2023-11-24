import React from "react";
import "./CategoriesOperation.scss";
import { Avatar, Button, List } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import AddCategoryModal from "./CategoriesOperationComponents/AddCategoryModal";
import { useEffect } from "react";
import {
  getCategories,
  hiddenCategory,
  postCategory,
} from "../../../../../../Api/Api";

const CategoriesOperation = () => {
  const [category, setCategory] = useState({
    Title: "",
    Icon: "",
  });
  const [categoryData, setCategoryData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let result = await getCategories();
      setCategoryData(result.res);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!category.Title) {
      return;
    }
    const fetchData = async () => {
      let params = {
        Title: category.Title,
        Icon: category.Icon,
      };
      await postCategory(params);
      const newCategoryData = [...categoryData, category]; // 创建一个新的数组
      setCategoryData(newCategoryData); // 而不是直接改变原数组
    };
    fetchData();
  }, [category]);

  const deleteCategory = async (value) => {
    let params = {
      Id: value.Id,
    };
    await hiddenCategory(params);
    setCategoryData((prevCategoryData) =>
      prevCategoryData.filter((category) => category.Id !== value.Id)
    );
  };

  return (
    <div className="CategoriesOperation">
      <div className="OperateBox">
        <AddCategoryModal setCategory={setCategory}></AddCategoryModal>
      </div>
      <List
        className="ListBox"
        itemLayout="horizontal"
        dataSource={categoryData}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <a
                key="list-loadmore-edit"
                onClick={() => {
                  deleteCategory(item);
                }}
              >
                删除
              </a>,
            ]}
            key={index}
          >
            <List.Item.Meta
              avatar={
                <img
                  src={item.Icon}
                  style={{
                    objectFit: "fill",
                    width: 20,
                    height: 20,
                    margin: 5,
                  }}
                />
              }
              title={item.Title}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CategoriesOperation;
