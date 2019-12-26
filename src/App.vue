/* *@description: *@author: Wai HoYu *@date: 2019-12-16 23:51:35 *@version:
V1.0.5 */

<template>
    <div id="app">
        <router-view></router-view>
        <TabBar></TabBar>
    </div>
</template>

<script>
import TabBar from './components/TabBar'
export default {
    name: 'app',
    data() {
        return {}
    },
    methods: {
        app() {
            console.log('123')
        },
    },
    computed: {},
    components: {
        TabBar,
    },
}
</script>

<style scoped>
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
