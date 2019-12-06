<template>
    <div class="select-login">
        <div class="bottom"></div>
        <nut-avatar
            class="avatar-select"
            :bgIcon="login_avatar.default"
        ></nut-avatar>
        <h4>选择登录方式</h4>
        <router-link tag="button" to="/login">手机登录</router-link>
    </div>
</template>

<script>
export default {
    name: 'SelectLogin',
    data() {
        return {
            login_avatar: require('../../assets/img/login_avatar.png')
        };
    }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.select-login
    background-color #f5f5f5
    width 100%
    height 100%
    position fixed
    left 0
    top 0
    z-index 1000
    display flex
    flex-direction column
    justify-content center
    align-items center
    .avatar-select
        width 120px
        height 120px
        margin-bottom 30px
    button
        width 80%
        height 38px
        background-color #c63520
        border none
        border-radius 5px
        font-size 20px
        color #fff
        margin-top 30px
    .bottom
        position fixed
        top 130px
        left 50%
        margin-left -100px
</style>
