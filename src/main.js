import Vue from 'vue';
import App from './App.vue';
import store from './store';
import {
    Cell,
    Checklist,
    Button
} from 'mint-ui';
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
Vue.component(Button.name, Button);
import 'mint-ui/lib/style.css';
import router from './router';
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');