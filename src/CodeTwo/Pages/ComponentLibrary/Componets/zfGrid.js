import React, { useEffect, useState } from "react";
import RandomNum from "../../../CommonFuc/RandomNum";

const ZfGrid = ({ style, children, component, onDrop, onDragOver, key }) => {
  const [gridClass1, setGridClass1] = useState(`ZfGrid${RandomNum()}`);
  const [gridClass2, setGridClass2] = useState(`ZfGrid${RandomNum()}`);
  const [gridClass3, setGridClass3] = useState(`ZfGrid${RandomNum()}`);
  // 注意这里直接解构赋值style，不需要再props里面解构
  const defaultStyle = {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "auto",
  };

  // 合并传入的 style 和默认 style
  const mergedStyle = { ...defaultStyle, ...style };

  // 定义 grid 项的基础样式，包含边框
  const gridItemStyle = {
    border: "1px dashed red", // 这里定义 grid 项的边框颜色和大小
  };

  useEffect(() => {
    console.log(component, "componentcomponentcomponent");
  }, [component]);

  return (
    <div
      style={mergedStyle}
      id={key}
      parentClass={component && component.parent && component.parent}
    >
      <div
        // className={`ZfGrid${RandomNum()}`}
        // className="ZfGrid1"
        className={gridClass1}
        parentClass={component && component.parent && component.parent}
        style={gridItemStyle}
      >
        {children &&
          children.map((child, index) => {
            console.log(child, "childchild");
            if (child.props.parent == "ZfGrid1") return child;
          })}
      </div>
      <div
        // className={`ZfGrid${RandomNum()}`}
        // className="ZfGrid2"
        className={gridClass2}
        parentClass={component && component.parent && component.parent}
        style={gridItemStyle}
      >
        {children &&
          children.map((child, index) => {
            if (child.props.parent == "ZfGrid2") return child;
          })}
      </div>
      <div
        // className={`ZfGrid${RandomNum()}`}
        // className="ZfGrid3"
        className={gridClass3}
        parentClass={component && component.parent && component.parent}
        style={gridItemStyle}
      >
        {children &&
          children.map((child, index) => {
            if (child.props.parent == "ZfGrid3") return child;
          })}
      </div>
    </div>
  );
};

export default ZfGrid;
