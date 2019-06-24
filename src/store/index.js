 
// 1 引入 管理员
import reducers from "./reducers";
// 2 引入  仓库生成器
import { createStore   } from "redux";

// 3 把 管理员和  仓库导出
export default createStore(reducers);