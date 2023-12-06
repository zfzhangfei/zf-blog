import React from 'react';

const ZfGrid = ({ style }) => {
  // 注意这里直接解构赋值style，不需要再props里面解构
  const defaultStyle = {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'auto',
  };

  // 合并传入的 style 和默认 style
  const mergedStyle = { ...defaultStyle, ...style };

  // 定义 grid 项的基础样式，包含边框
  const gridItemStyle = {
    border: '1px dashed red', // 这里定义 grid 项的边框颜色和大小
  };

  return (
    <div style={mergedStyle}>
      {[...Array(3).keys()].map((item, index) => {
        // 创建3个 grid 项，每个 item 由0开始的索引值表示
        return (
          <div
            key={index} // 这里添加 key 属性，以满足 React 列表渲染的需求
            style={gridItemStyle}
            className={`grid-item${item + 1}`}
          />
        );
      })}
    </div>
  );
};

export default ZfGrid;