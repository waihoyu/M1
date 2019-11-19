<template>
    <div class="list-wrapper">
        <ul v-for="(todo,index) in todolist" :key="index" :deleteItemFromList="deleteItemFromList">
            <Item :todo="todo" :deleteItemFromList="deleteItemFromList"></Item>
        </ul>
    </div>
</template>

<script>
import Item from '../components/Item'
    export default {
        name:'list',
        data () {
            return {
                
            }
        },
        props: {
            todolist:Array,
            deleteItemFromList: Function
        },
        methods: {
            
        },
        components:{
            Item
        }
    }
</script>

<style scoped>
.list-wrapper{
    border:  solid 0px white;
    width: 90%;
    margin-left: 30px;
    margin-bottom: 10px;
}
ul{
    list-style:none;
    padding-left:0px; 
    margin-left:0px;
}
</style>