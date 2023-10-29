import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './SideBar.scss'
import {
    ContainerOutlined,
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

const items = [
    { label: '首页', key: '1', icon: <PieChartOutlined /> },
    { label: '文章', key: '2', icon: <DesktopOutlined /> },
    { label: '新建文章', key: '3', icon: <ContainerOutlined /> },
];

const mapRouteToKey = {
    "/Setting/home": "1",
    "/Setting/articles": "2",
    "/Setting/EditArticle": "3",
};

const SideBar = ({ props }) => {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState(mapRouteToKey[location.pathname] || "1");

    const toggleCollapsed = useCallback(() => setCollapsed(prev => !prev), []);

    const handleSelect = useCallback(({ key }) => {
        setSelectedKey(key);
        switch (key) {
            case '1':
                props.history.push("/Setting/home");
                break;
            case '2':
                props.history.push("/Setting/articles");
                break;
            case '3':
                props.history.push("/Setting/EditArticle");
                break;
            default: break;
        }
    }, [props]);

    useEffect(() => {
        setSelectedKey(mapRouteToKey[location.pathname] || "1");
    }, [location]);

    return (
        <div id='SideBar' >
            {/* <Button
                className='collapsedBtn'
                type="primary"
                onClick={toggleCollapsed}
            >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button> */}
            <Menu
                className='Menu'
                selectedKeys={[selectedKey]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                onSelect={handleSelect}
            >
                {items.map(({ label, key, icon }) => (
                    <Menu.Item key={key} icon={icon}>
                        {label}
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    );
};

export default React.memo(SideBar);