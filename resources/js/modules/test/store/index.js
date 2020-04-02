export default {
   
    state: {
        testModuleNumber: 1000
    },
    getters: {
        getTestModuleNumber(state){
            return state.testModuleNumber
        }
    },
    mutations: {
        changeTestModuleNumber(state, number){
            state.testModuleNumber += number
        }
    },
    actions: {}
  }