<template>
  <div id="app">
      <router-view></router-view>
      <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from './components/TabBar';
export default {
  name: "app",
  data() {
    return {
    };
  },
  methods: {},
  computed: {},
  components: {
      TabBar
  }
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  
}

</style>
