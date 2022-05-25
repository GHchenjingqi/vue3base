export const count = {
    //具有更高的封装度和复用性，可以通过添加namespaced:true的方式使其成为带命名空间的模块
    namespaced: true,

    state: {
        content: 0,
    },
    //Vuex允许在store中定义getter，像计算属性一样，getter的返回值会根据它的依赖被缓存起来，且只有当他的依赖值发生了改变才会被重新计算
    getters:{
        count:state =>{
            return state.content
        }
    },
    //Mutation必须是同步函数,更改Vuex的store中的状态的唯一方法是提交mutation，每个mutation都有一个字符串的事件类型和一个回调函数，该回调函数接收state作为第一个参数，提交的载荷作为第二个参数
    mutations:{
        add(state){
            state.content++
        },
        subtract(state){
            state.content--
        },
    },
    // Action通过store.dispatch方法触发，Action提交的是mutation，而不是直接变更状态
    actions: {
        countAddAction(context){
            context.commit("add")
        },
        countCubtractAction(context){
            context.commit("subtract")
        }
    }
}