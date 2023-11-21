import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.scss";
import {
  CommentOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

const items = [
  { label: "首页", key: "1", icon: <PieChartOutlined />, to: "/Setting" },
  {
    label: "文章",
    key: "2",
    icon: <DesktopOutlined />,
    to: "/Setting/articles",
  },
  {
    label: "评论管理",
    key: "3",
    icon: <CommentOutlined />,
    to: "/Setting/comments",
  },
];

const SideBar = ({ props }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(
    items.find((item) => item.to === location.pathname).key || "1"
  );
  const toggleCollapsed = useCallback(() => setCollapsed((prev) => !prev), []);

  useEffect(() => {
    const currentItem = items.find((item) => item.to === location.pathname);
    if (currentItem) {
      setSelectedKey(currentItem.key);
    } else {
      setSelectedKey("1");
    }
  }, [location, items]);

  const goOut=()=>{
    props.history.push('/Home');
  }

  return (
    <div id="SideBar">
      <Menu
        className="Menu"
        selectedKeys={[selectedKey]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <div className="info">
          <Button onClick={()=>{goOut()}}>退出</Button>
        </div>
        {items.map(({ label, key, icon, to }) => (
          <Menu.Item key={key} icon={icon}>
            <Link to={to} key={key}>
              {label}
            </Link>
          </Menu.Item>
        ))}
        {/* <div
                    className='collapsedBtn'
                    onClick={toggleCollapsed}
                >
                    {
                        collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                </div> */}
      </Menu>
    </div>
  );
};

export default React.memo(SideBar);