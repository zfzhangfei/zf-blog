import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const initialState = {
  userList: {},
  isShowApplicationPage: true,
};

// 这是一个简单的reducer，它接受旧的state和一个action，返回新的state。
function reducer(state = initialState, action) {
  // 根据action的类型来更新状态
  switch (action.type) {
    case "DO_SOMETHING":
      return { ...state, ...action.payload };
    case "SET_USER_LIST":
      return { ...state, userList: action.payload };
    case "SET_SHOWAPPLICATIONPAGE":
      return { ...state, isShowApplicationPage: action.payload };
    // 定义更多的case处理其他actions...
    default:
      return state;
  }
}

// persistReducer的配置项
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['isShowApplicationPage'] // 只有这个状态会被持久化
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor };