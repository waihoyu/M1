import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Chat from '../pages/Chat/Chat.vue';
import Home from '../pages/Home/Home.vue';
import Me from '../pages/Me/Me.vue';
import Recommand from '../pages/Recommand/Recommand.vue';
import Search from '../pages/Search/Search.vue';


export default new VueRouter({
    routes: [{
            path: '/chat',
            component: Chat
        },
        {
            path: '/me',
            component: Me
        },
        {
            path: '/recommand',
            component: Recommand
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/',
            component: Home
        }
    ]
});