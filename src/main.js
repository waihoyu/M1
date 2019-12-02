import Vue from 'vue';
import App from './App.vue';
import store from './store';
import {
    Cell,
    Checklist,
    Button
} from 'mint-ui';
import LyTab from 'ly-tab'
import 'mint-ui/lib/style.css';
import router from './router';
import FastClick from 'fastclick';
import animate from 'animate.css'
Vue.use(animate)
FastClick.attach(document.body);
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
Vue.component(Button.name, Button);
Vue.config.productionTip = false;
Vue.use(LyTab);
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');