import React, { Component } from 'react'
import { Button } from 'antd';
// 动画库
import { motion } from 'framer-motion';


const items = ['lightTheme', 'darkTheme', 'getNavyBlueWhite', 'getDarkPurpleLightPurple', 'getPeachPinkCocoa'];
export default class MyChangeThemeBtn extends Component {
    state = {
        imgUrl: null,
        currentIndex: 0,
    };

    changeTheme = (value) => {
        this.setState(prevState => {
            return {
                currentIndex: (prevState.currentIndex + 1) % items.length
            };
        }, () => {
            this.props.changeTheme(items[this.state.currentIndex]);
        });
    }
    render() {
        return (
            <div style={{ width: 60, height: 60, padding: 15, display: 'inline-block', verticalAlign: 'top' }}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <Button type="primary" danger onClick={() => { this.changeTheme() }}>主题</Button>
                </motion.div>
            </div>
        )
    }
}
