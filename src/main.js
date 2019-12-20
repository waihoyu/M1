import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { Cell, Checklist, Button } from 'mint-ui'
import LyTab from 'ly-tab'
import 'mint-ui/lib/style.css'
import router from './router'
import FastClick from 'fastclick'
import animate from 'animate.css'
import { Avatar, Toast, Dialog } from '@nutui/nutui'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    './mcomponents/',
    false,
    /[A-Z]\w+\.(vue|js)$/,
)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
        camelCase(
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, ''),
        ),
    )
    // 全局注册组件
    Vue.component(componentName, componentConfig.default || componentConfig)
})

Avatar.install(Vue)
Toast.install(Vue)
Dialog.install(Vue)
Vue.use(animate)
FastClick.attach(document.body)
Vue.component(Cell.name, Cell)
Vue.component(Checklist.name, Checklist)
Vue.component(Button.name, Button)
Vue.config.productionTip = false
Vue.use(LyTab)
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
