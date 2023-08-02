import React, { Component } from "react";
import { Input, message, Button, Spin } from 'antd';
import { v4 as uuidv4 } from 'uuid';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {
    }



    _goChatPage = () => {
        this.setState({
            isLogin: true
        })
        this.get('/users', {
            username: 'admin',
            password: 12345
        }
        ).then(res => {
            // 这里是成功回调
            console.log(res);
        }).catch(err => {
            // 这里是错误回调
            console.log(err)
        })
    }

    render() {
        return (
            <div id="Login">
                <button onClick={() => { this._goChatPage() }}>
                    登录
                </button>
            </div>
        );
    }
}

export default Login;