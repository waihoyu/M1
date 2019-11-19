
<template>
  <div class="item-wrapper">
    <li class="li-item" :todo="todo" @mouseenter="mouseenter" @mouseleave="mouseleave">
      <input
        type="checkbox"
        id="itemCheck"
        :checked="todo.isFinished"
        @click="todo.isFinished=!todo.isFinished"
      />
      {{todo.title}}
      <input
        type="button"
        id="deleteFinishedItem"
        value="删除"
        @click="deleteItem(todo)"
        :class="{active: isActive}"
      />
    </li>
  </div>
</template>

<script>
export default {
    name:'item',
  data() {
    return {
      isActive: true
    };
  },
  props: {
    todo: Object,
    deleteItemFromList: Function
  },
  methods: {
    deleteItem(todo) {
      this.deleteItemFromList(todo);
    },
    mouseenter() {
      this.isActive = !this.isActive;
    },
    mouseleave() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
.item-wrapper {
  font-size: 14px;
}
.li-item {
  /* background: blue; */
  padding: 10px 0;
}
#itemCheck {
  /* float: left; */
  margin: 10px 5px;
}
#deleteFinishedItem {
  background: #4caf50;
  float: right;
  margin: 6px 3px;
  width: 50px;
  height: 20px;
  border-radius: 5px;
}
.active {
  display: none;
  background: orange;
}
</style>