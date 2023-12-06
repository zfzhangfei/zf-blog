import React, { useState } from "react";
import "./ComponentLibrary.scss";
import * as Components from "./Componets/index";
import { Space } from "antd";

const COMPONENTS = {
  zfButton: Components.zfButton,
  zfGrid: Components.zfGrid,
};

const componentsList = [
  { type: "zfButton", lable: "按钮" },
  { type: "zfGrid", lable: "网格" },
];

const ComponentLibrary = () => {
  const [layoutComponents, setLayoutComponents] = useState([]); // 保存布局内的组件

  const onDrop = (event) => {
    console.log(event,'eventevent');
    event.preventDefault();
    const type = event.dataTransfer.getData("application/reactflow");
    if (type) {
      const componentData = {
        type,
        id: Math.random(), // 简单的生成唯一的id, 生产环境可能需要更强的生成策略
      };
      setLayoutComponents([...layoutComponents, componentData]);
    }
  };

  const onDragOver = (event) => {
    event.preventDefault(); // Necessary to allow drop
  };

  return (
    <div className="ComponentLibrary">
      <div className="Left">
        {/* 这里会列出所有的组件，可以实现拖拽添加到布局画布 */}
        {componentsList.map((component) => {
          const DynamicComponent = COMPONENTS[component.type];
          return (
            DynamicComponent && (
              <Space direction="horizontal" size={10} key={component.lable}>
                <span>{component.lable}</span>
                <div
                  style={{ width: 150, height: 50 }}
                  key={component.type}
                  draggable
                  onDragStart={(e) =>
                    e.dataTransfer.setData(
                      "application/reactflow",
                      component.type
                    )
                  }
                >
                  <DynamicComponent />
                </div>
              </Space>
            )
          );
        })}
      </div>
      <div className="Center" onDrop={onDrop} onDragOver={onDragOver}>
        {layoutComponents.map((component,index) => {
          const DynamicComponent = COMPONENTS[component.type];
          return DynamicComponent && <DynamicComponent {...component.props} key={index}/>;
        })}
      </div>
      <div className="Right"></div>
    </div>
  );
};

export default ComponentLibrary;
