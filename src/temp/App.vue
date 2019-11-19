<template>
  <div id="app">
    <div class="todolist-container">
      <Header :addNewItemToList="addNewItemToList"></Header>
      <List :todolist="todolist" :deleteItemFromList="deleteItemFromList"></List>
      <Footer :todolist="todolist" :selectAll="selectAll" :deleteFinishedItem="deleteFinishedItem"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer";

export default {
  name: "app",
  data() {
    return {
        todolist:[
            {title: '打篮球一个小时', isFinished: false},
            {title: '踢足球一个小时', isFinished: false},
            {title:' 打排球一个小时', isFinished: false}
        ]
    };
  },
  methods: {
     addNewItemToList(item){
         this.todolist.unshift(item);
     },
     deleteItemFromList(todo){
         this.todolist.splice(this.todolist.indexOf(todo),1);
     },
     selectAll(value){
         this.todolist.forEach((item)=>{
              item.isFinished = value;
          });
     },
     deleteFinishedItem(){
         this.todolist = this.todolist.filter(todo=> !todo.isFinished);
     }

  },
  computed: {
  
  },
  components: {
    Header,
    List,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
  /* background: yellow; */
}
.todolist-container {
  border: solid 1px burlywood;
  /* background: red; */
  border-radius: 10px;
  margin: 0 auto;
  width: 50%;
  margin-top: 10%;
  height: 100%;
}
</style>
