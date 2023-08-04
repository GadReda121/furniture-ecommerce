import Vuex from 'vuex';
export default new Vuex.Store({
    state: {
        data: [],
    },
    getters: {
        getNum: (state) => {
            return state.data.length;
        }
    },
    mutations: {},
    actions: {},
    modules:{}
})