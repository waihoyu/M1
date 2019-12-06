<template>
    <div id="app">
        <router-view></router-view>
        <TabBar></TabBar>
    </div>
</template>

<script>
import TabBar from './components/TabBar';
export default {
    name: 'app',
    data() {
        return {};
    },
    methods: {},
    computed: {},
    components: {
        TabBar
    }
};
</script>

<style>
@import '../src/assets/css/iconfont.css';
* {
    text-decoration: none;
}
html {
    font-size: 16px;
    /* font-size: 5.33333vw; */
}
@media screen and (max-width: 320px) {
    html {
        font-size: 17.06667px;
    }
}
#app {
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
}
</style>
