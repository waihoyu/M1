<template>
    <div class="Mine" v-if="this.$store.state.userinfo._id">
        <router-link tag="div" class="user" to="/detail">
            <img src="./images/me_icon.png" alt="" />
            <p v-if="this.$store.state.userinfo.phone">
                {{ this.$store.state.userinfo.phone | phoneFormat }}
            </p>
            <p>{{ this.$store.state.userinfo.name }}</p>
            <i class="pdd3-3"></i>
        </router-link>
        <div class="my-older">
            <div class="older-top">
                <h3>我的订单</h3>
                <span>查看全部 > </span>
            </div>
            <div class="older-bottom">
                <div class="bottom-item">
                    <i class="pdd3-1"></i>
                    <span>待付款</span>
                </div>
                <div class="bottom-item">
                    <i class="pdd3-2"></i>
                    <span>待分享</span>
                </div>
                <div class="bottom-item">
                    <i class="pdd3-3"></i>
                    <span>待发货</span>
                </div>
                <div class="bottom-item">
                    <i class="pdd3-4"></i>
                    <span>待收货</span>
                </div>
                <div class="bottom-item">
                    <i class="pdd3-5"></i>
                    <span>待评价</span>
                </div>
            </div>
        </div>
        <div class="setting">
            <div class="setting-item">
                <i class="pdd3-1"></i>
                <span>新人红包</span>
            </div>
            <div class="setting-item">
                <i class="pdd3-2"></i>
                <span>多多果园</span>
            </div>
            <div class="setting-item">
                <i class="pdd3-3"></i>
                <span>砍价免费拿</span>
            </div>
            <div class="setting-item">
                <i class="pdd3-4"></i>
                <span>边逛边赚</span>
            </div>
            <div class="setting-item">
                <i class="pdd3-5"></i>
                <span>天天领红包</span>
            </div>
            <div class="setting-item">
                <i class="pdd3-uniE902"></i>
                <span>收货地址</span>
            </div>
            <div class="setting-item">
                <i class="pdd3-1"></i>
                <span>我的评价</span>
            </div>
            <div class="setting-item">
                <i class="pdd3-3"></i>
                <span>官方客服</span>
            </div>
            <div class="setting-item" @click.prevent="dealLogout(logout)">
                <i class="pdd3-4"></i>
                <span>退出</span>
            </div>
        </div>
    </div>
    <select-login v-else />
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SelectLogin from './../Login/SelectLogin'

export default {
    name: 'Mine',
    computed: {
        ...mapState(['userinfo']),
    },
    components: {
        SelectLogin,
    },
    beforeCreate() {},
    beforeMount() {},
    mounted() {
        this.$store.dispatch('reqUserInfo')
        setTimeout(() => {
            if (!this.$store.state.userinfo._id) {
                this.$toast.warn('您尚未登陆，请先登陆！！')
            }
        }, 3000)
    },
    filters: {
        phoneFormat(phone) {
            // 1. 字符串转成数组
            let phoneArr = [...phone]
            // 2. 遍历
            let str = ''
            phoneArr.forEach((item, index) => {
                if (index === 3 || index === 4 || index === 5 || index === 6) {
                    str += '*'
                } else {
                    str += item
                }
            })
            // 3. 返回结果
            return str
        },
    },
    methods: {
        ...mapActions(['reqUserInfo', 'syncUserInfo', 'logOut']),
        logout() {
            this.$store.dispatch('logOut')
            this.$toast.text('退出成功！')
            // 回到主界面
            // this.$router.replace('/home');
        },
        dealLogout(callback) {
            this.$dialog(
                {
                    title: '提示',
                    content: '您确定退出登录吗?',
                    closeBtn: true, //显式右上角关闭按钮
                    onOkBtn(event) {
                        //确定按钮点击事件
                        callback()
                        this.close()
                    },
                    onCancelBtn(event) {},
                    onCloseBtn(event) {},
                    closeCallback(target) {},
                },
                callback,
            )
        },
    },
}
</script>

<style lang="stylus" scoped>
.Mine
    width 100%
    height 100%
    background-color #f5f5f5
    font-size 14px
    .user
        display flex
        flex-direction row
        align-items center
        padding 20px
        background-color #fff
        margin-bottom 10px
        p
            margin 0 10px
        img
            width 60px
            height 60px
            border-radius 50%
        i
            font-size 25px
    .my-older
        background-color #fff
    .older-top
        display flex
        flex-direction row
        padding 0 10px
        justify-content space-between
        height 44px
        line-height 44px
    .older-bottom
        display flex
        .bottom-item
            flex 1
            height 60px
            display flex
            flex-direction column
            justify-content center
            align-items center
            i
                font-size 30px
                color #E9232C
                margin-bottom 5px
    .setting
        margin-top 10px
        background-color #fff
        display flex
        justify-content space-between
        flex-wrap wrap
    .setting-item
        width 90px
        height 70px
        display flex
        flex-direction column
        justify-content center
        align-items center
        i
            font-size 30px
            color orange
            margin-bottom 5px
</style>
