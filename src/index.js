import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 //1. 引入store
import store from "./store"
//2. 引入 redux和react的连接器Provider
import { Provider } from "react-redux";


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

 
