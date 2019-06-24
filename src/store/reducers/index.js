 

// 1 是一个管理员 
// 2 定义一个默认数据
const defaultState={
    // 水果的数量
    fruitNums:100
  }
  
  // 3 把管理员和 数据 都暴露出去
  // 3.1 state 就是 在外面可以使用得到的数据 
  // 3.2  需要通过对action来判断 来处理 全局的数据 
  export default (state=defaultState,action)=>{
     // 3.3 对 action的类型判断 再处理逻辑
    if (action.type === "num_add") {
      let newState = JSON.parse(JSON.stringify(state));
      newState.fruitNums += action.value;
      return newState;
    }
    return state;
  }