<template>
    <div>
        <h1>THIS IS A TEST PAGE LOADED FROM TEST MODULES</h1>
        <h1>the test module number is : {{testModuleNumber}}</h1>
        <button @click="changeNumber(1)">Increase number</button>
        <button @click="changeNumber(-1)">Decrease number</button>
       
    
    </div>
</template>


<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    methods: {
        changeNumber(number){
            this.$store.commit('testStoreIndex/changeTestModuleNumber', number)
        }
    },
    computed : {
        ...mapGetters({
            'testModuleNumber' : 'testStoreIndex/getTestModuleNumber'
        })
    },
    created(){
        console.log(this.testModuleNumber)

    }
}
</script>