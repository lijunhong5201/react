import React, { Component, Fragment } from 'react';

import './App.css';
//1. 接受store中的数据的一个链接器
import { connect } from "react-redux"

class App extends Component {
  
  render() {
    console.log(this.props);
    return (
       
      <Fragment>
        
        数据：{this.props.num}
        
      </Fragment>



    );
  }
}
// 3.最终 store中的数据是通过属性props 的方式来传递参数
// 4.创建一个数据映射对象
const mapStateToProps = (state) => {
  return {
    num: state.fruitNums
  }
}


// 2.讲store中的数据输入传递到app中
export default connect(mapStateToProps, null)(App);
