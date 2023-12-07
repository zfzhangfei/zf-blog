import React, { useEffect, useState } from "react";
import "./ComponentLibrary.scss";
import * as Components from "./Componets/index";
import { Space } from "antd";

const COMPONENTS = {
  ZfButton: Components.zfButton,
  ZfGrid: Components.zfGrid,
};

const componentsList = [
  { type: "ZfButton", lable: "按钮" },
  { type: "ZfGrid", lable: "网格" },
];

const ComponentLibrary = () => {
  const [layoutComponents, setLayoutComponents] = useState([]); // 保存布局内的组件

  const onDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("application/reactflow");

    console.log(event.target.id, event.target, "eventeventevent");

    if (type) {
      const componentData = {
        type,
        parent: event.target.id || event.target.className,
        id: Math.random().toString(), // 生产环境中你可能想要用更稳定的ID生成方案
      };

      const updateComponents = (components, target, componentData) => {
        console.log(components, target, componentData,'components, target, componentDatacomponents, target, componentData');
        if (components.length === 0) return [componentData];
        else {
          return components.map((comp) => {
            const parentClassValue = target.getAttribute('parentclass');
            if (comp.parent === parentClassValue) {
              const updatedComp = {
                ...comp,
                children: comp.children
                  ? [...comp.children, componentData]
                  : [componentData],
              };
              return updatedComp;
            } else if (comp.children) {
              return {
                ...comp,
                children: updateComponents(
                  comp.children,
                  target,
                  componentData
                ),
              };
            }
            return comp;
          });
        }
      };

      const target = event.target; // 直接使用 event.target
      const parentClassValue = target.getAttribute('parentclass');
      if (
        layoutComponents.length === 0 ||
        layoutComponents.some((c) => c.parent === parentClassValue)
      ) {
        const newLayoutComponents = updateComponents(
          layoutComponents,
          target,
          componentData
        );
        setLayoutComponents(newLayoutComponents); // 用新的组件树更新状态
      }
    }
  };

  useEffect(() => {
    console.log(layoutComponents, "layoutComponentslayoutComponents");
  }, [layoutComponents]);

  const onDragOver = (event) => {
    event.preventDefault(); // Necessary to allow drop
    console.log(event, "onDragOver");
  };

  const renderComponentTree = (components) => {
    return components.map((component, index) => {
      const DynamicComponent = COMPONENTS[component.type];

      // 递归地渲染子组件 (如果有的话)
      const children = component.children
        ? renderComponentTree(component.children)
        : null;

      return (
        DynamicComponent && (
          <DynamicComponent
            {...component.props}
            key={index}
            component={component}
            parent={component.parent}
            onDrop={onDrop}
            onDragOver={onDragOver}
            children={children} // 这里添加渲染后的子组件
          />
        )
      );
    });
  };

  return (
    <div className="ComponentLibrary">
      <div className="Left">
        {componentsList.map((component) => {
          const DynamicComponent = COMPONENTS[component.type];

          return (
            DynamicComponent && (
              <Space direction="horizontal" size={10} key={component.lable}>
                <span>{component.lable}</span>
                <div
                  style={{ width: 150, height: 50 }}
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
        {layoutComponents && renderComponentTree(layoutComponents)}
      </div>
      <div className="Right"></div>
    </div>
  );
};

export default ComponentLibrary;
