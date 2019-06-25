import React, { Component, Fragment } from 'react';

import './App.css';
//1. 接受store中的数据的一个链接器
import { connect } from "react-redux"
// 增加组件
class PlusButton extends Component {
  state = {}
  render() {
    console.log(this.props)

    return (
      <button onClick={this.props.num_add}> + </button>

    );
  }
}
// 减少组件
class SubstrButton extends Component {

  render() {
    return (
      <button onClick={this.props.num_substr}>-</button>
    );
  }
}


class App extends Component {

  render() {
    console.log(this.props);
    return (

      <Fragment>

        数据：{this.props.num}
        <br /><hr/>
        <PlusButton {...this.props}></PlusButton> &nbsp;
        <SubstrButton {...this.props}></SubstrButton>
      </Fragment>

    );
  }
}
// 3.最终 store中的数据是通过属性props 的方式来传递参数
// 4.创建一个数据映射对象
const mapStateToProps = (state) => {
  return {
    // 修改成 水果管理员中的数据
    num: state.fruitNums
  }
}

const mapDispatch = (dispatch) => {
  return {
    num_add: () => {
      const action = {
        type: "num_add",
        value: 1
      }
      // 开始派发action 会触发 管理员中的代码
      dispatch(action)
    },
    num_substr: () => {
      const action = {
        type: "num_add",
        value: -1
      }
      dispatch(action)
    }
  }
}


// 2.讲store中的数据输入传递到app中
export default connect(mapStateToProps, mapDispatch)(App);
