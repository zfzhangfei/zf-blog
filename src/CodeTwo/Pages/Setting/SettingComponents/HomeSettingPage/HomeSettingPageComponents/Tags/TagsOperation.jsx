import React from "react";
import "./TagsOperation.scss";
import { useState } from "react";
import { ExclamationCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Button, Tag, Modal, message } from "antd";
import { GlobalContext } from "../../../../../../../Utils/GlobalProvider";
import { hiddenTag, postTag } from "../../../../../../Api/Api";
import { useContext } from "react";

const colors = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

const TagsOperation = () => {
  const [tag, setTag] = useState();
  const { state, setMarkList } = useContext(GlobalContext); // 获取状态和更新函数

  // 获取随机颜色的函数
  const getRandomColor = () => {
    // 从颜色数组中随机选择一个索引
    const randomIndex = Math.floor(Math.random() * colors.length);
    // 返回在该选定索引处的颜色
    return colors[randomIndex];
  };
  const addTag = async () => {
    const color = getRandomColor();
    let params = {
      Value: tag,
      Color: color,
    };
    let result = await postTag(params);
    let newTag = { value: tag, color: color };
    setMarkList({ ...state.MarkList, [result.res.insertId]: newTag });
    setTag("");
  };

  const deleteTag = async (Id) => {
    let params = {
      Id: Id,
    };
    await hiddenTag(params);
  };

  return (
    <GlobalContext.Consumer>
      {(context) => (
        <div className="TagsOperation">
          <div className="OperateBox">
            <input
              type="text"
              onChange={(e) => setTag(e.target.value)}
              value={tag}
            />
            <Button onClick={addTag} type="primary">
              <PlusOutlined style={{ fontWeight: "bold", fontSize: 16 }} />
            </Button>
          </div>
          <div className="TagBox">
            {context.state.MarkList &&
              Object.keys(context.state.MarkList).map((key, index) => {
                return (
                  <Tag
                    color={context.state.MarkList[key].color}
                    closeIcon
                    onClose={() => deleteTag(key)}
                    key={index}
                    style={{ margin: 5 }}
                  >
                    {context.state.MarkList[key].value}
                  </Tag>
                );
              })}
          </div>
        </div>
      )}
    </GlobalContext.Consumer>
  );
};

export default TagsOperation;
