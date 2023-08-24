import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import { Provider } from 'react-redux';
import store from './Code/Module/Common/Dictionary/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store} >
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
