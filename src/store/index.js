import { createStore } from "vuex"
import { count } from "./module/count"

export const store = createStore({
    //访问moduleA的状态：store.state.moduleA
    modules:{
        count
    }
})