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
            <div style={{ width: 60, height: 60, padding: 10}}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <div style={{ borderRadius: '50%', width: 50, height: 50, background: 'pink' }} onClick={() => { this.changeTheme() }}></div>
                </motion.div>
            </div>
        )
    }
}
