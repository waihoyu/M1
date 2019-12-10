<template>
    <div class="login-container">
        <!--登录面板内容部分-->
        <div class="back_home">
            <a href="javascript:;" @click="backHome">
                <span class="iconfont iconHomehomepagemenu"></span>
            </a>
            <div>登录注册</div>
        </div>
        <div class="login-inner">
            <!--面板头部-->
            <div class="login-header">
                <div class="login-logo">
                    <img :src="loginTop.default" alt="" />
                </div>
                <!--面板标题-->
                <div class="login-header-title">
                    <a
                        href="javascript:;"
                        :class="{ current: loginMode }"
                        @click="dealLoginMode(true)"
                        >短信登录</a
                    >
                    <a
                        href="javascript:;"
                        :class="{ current: !loginMode }"
                        @click="dealLoginMode(false)"
                        >密码登录</a
                    >
                </div>
            </div>
            <!--面板表单部分-->
            <div class="login-content">
                <form>
                    <!--手机验证码登录部分-->
                    <div :class="{ current: loginMode }">
                        <section class="login-message">
                            <input
                                type="tel"
                                maxlength="11"
                                placeholder="手机号"
                                v-model="phone"
                            />
                            <button
                                class="get-verification"
                                v-if="!countDown"
                                :class="{ phone_right: phoneRight }"
                                @click.prevent="getVerifyCode()"
                            >
                                获取验证码
                            </button>
                            <button
                                v-else
                                disabled="disabled"
                                class="get-verification"
                            >
                                已发送({{ countDown }}s)
                            </button>
                        </section>
                        <section class="login-verification">
                            <input
                                type="tel"
                                maxlength="8"
                                placeholder="验证码"
                                v-model="code"
                            />
                            <div
                                class="cancel-password"
                                :class="{
                                    cancelPassword: code.length <= 0,
                                }"
                                @click.prevent="clearPassword"
                            >
                                <span class="iconfont iconcancel"></span>
                            </div>
                        </section>
                        <section class="login-hint">
                            温馨提示：未注册帐号的手机号，登录时将自动注册，且代表已同意
                            <a href="javascript:;">服务协议与隐私政策</a>
                        </section>
                    </div>
                    <!--账号登录部分-->
                    <div :class="{ current: !loginMode }">
                        <section>
                            <section class="login-message">
                                <input
                                    type="tel"
                                    maxlength="11"
                                    placeholder="用户名"
                                    v-model="user_name"
                                />
                            </section>
                            <section class="login-verification">
                                <input
                                    type="password"
                                    maxlength="20"
                                    placeholder="密码"
                                    v-if="pwdMode"
                                    v-model="pwd"
                                />
                                <input
                                    type="text"
                                    maxlength="20"
                                    placeholder="密码"
                                    v-else
                                    v-model="pwd"
                                />
                                <div class="switch-show">
                                    <img
                                        @click.prevent="dealPwdMode(false)"
                                        :class="{ on: pwdMode }"
                                        :src="hide_pwd.default"
                                        alt=""
                                        width="20"
                                    />
                                    <img
                                        @click.prevent="dealPwdMode(true)"
                                        :class="{ on: !pwdMode }"
                                        :src="show_pwd.default"
                                        alt=""
                                        width="20"
                                    />
                                </div>
                            </section>
                            <section class="login-message">
                                <input
                                    type="text"
                                    maxlength="4"
                                    placeholder="验证码"
                                    v-model="captcha"
                                />
                                <img
                                    class="get-verification"
                                    src="http://localhost:1688/api/captcha"
                                    alt="captcha"
                                    @click.prevent="getCaptcha()"
                                    ref="captcha"
                                />
                            </section>
                        </section>
                    </div>
                    <button class="login-submit" @click.prevent="login()">
                        登录
                    </button>
                </form>
                <button class="login-back" @click="$router.back()">返回</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getPhoneCode, phoneCodeLogin, pwdLogin } from './../../api/index'
import { mapActions } from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
            loginMode: true, // 登录方式, true 手机验证码登录, flase 账号登录
            phone: '13701343809', // 手机号码
            countDown: 0, // 倒计时
            code: '123456', // 验证码
            user_name: '', // 用户名
            pwd: '', // 密码
            pwdMode: true, // 密码的显示方式, true 密文  false 明文
            captcha: '123456', // 图形验证码
            userinfo: {},
            loginTop: require('../../assets/img/login_top.png'),
            cancelPassword: true,
            hide_pwd: require('./images/hide_pwd.png'),
            show_pwd: require('./images/show_pwd.png'),
        }
    },
    computed: {
        phoneRight() {
            return /^1[34578]\d{9}$/.test(this.phone)
        },
    },
    methods: {
        ...mapActions(['syncUserInfo']),
        //清空密码
        clearPassword() {
            this.code = ''
        },
        //回到主界面
        backHome() {
            this.$router.push({ path: '/home' })
        },
        //处理登录的方式
        dealLoginMode(flag) {
            this.loginMode = flag
        },
        //获取短信验证码
        async getVerifyCode() {
            // 2.1 开启倒计时
            if (this.phoneRight) {
                this.countDown = 60
                // 2.2 设置定时器
                this.intervalId = setInterval(() => {
                    this.countDown--
                    if (this.countDown === 0) {
                        clearInterval(this.intervalId)
                    }
                }, 1000)
                // 2.3 获取短信验证码
                const result = await getPhoneCode(this.phone)
                console.log(result)
                // 2.4 获取验证码失败
                if (result.err_code === 0) {
                    this.$toast.warn({
                        message: result.message,
                        position: 'center',
                        duration: 3000,
                    })
                    // 2.5 后续处理
                    setTimeout(() => {
                        clearInterval(this.intervalId)
                        this.countDown = 0
                    }, 3000)
                }
            }
        },
        // 3. 密码的显示方式
        dealPwdMode(flag) {
            this.pwdMode = flag
        },
        // 4. 获取图形验证码
        getCaptcha() {
            this.$refs.captcha.src =
                'http://localhost:1688/api/captcha?time=' + new Date()
        },
        // 5. 登录
        async login() {
            // 5.1 登录模式
            if (this.loginMode) {
                // 验证码登录
                if (!this.phone) {
                    this.$toast.warn('请输入手机号码!')
                    return
                } else if (!this.phoneRight) {
                    this.$toast.warn('请输入正确的手机号码!')
                    return
                }
                if (!this.code) {
                    this.$toast.warn('请输入验证码!')
                    return
                } else if (!/^\d{6}$/gi.test(this.code)) {
                    this.$toast.warn('请输入正确的验证码!')
                    return
                }
                // 5.2 手机验证码登录
                const result = await phoneCodeLogin(this.phone, this.code)
                if (result.success_code === 200) {
                    this.userinfo = result.data
                } else {
                    this.userinfo = {
                        message: '登录失败, 手机号码或验证码不正确!',
                    }
                }
            } else {
                // 账号和密码的登录
                if (!this.user_name) {
                    this.$toast.warn('请输入用户名!')
                    return
                } else if (!this.pwd) {
                    this.$toast.warn('请输入密码!')
                    return
                } else if (!this.captcha) {
                    this.$toast.warn('请输入验证码!')
                    return
                }
                // 5.2 发起请求
                const result = await pwdLogin(
                    this.user_name,
                    this.pwd,
                    this.captcha,
                )
                if (result.success_code === 200) {
                    this.userinfo = result.data
                } else {
                    this.userinfo = {
                        message: '登录失败, 用户名和密码不正确!',
                    }
                }
            }

            // 6. 后续的处理
            if (this.userinfo._id) {
                this.$store.dispatch('syncUserInfo', {
                    userinfo: this.userinfo,
                })
                this.$router.push({ path: '/mine' })
            } else {
                // 6.1 同步用户的信息
                // this.syncuserinfo(this.userinfo);
                // 6.2 回到主界面
                // console.log('回到主界面');
                this.$router.push({ path: '/mine' })
            }
        },
    },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/minxin.styl"
.login-container
  width 100%
  height 100%
  background #fff
  z-index 1000
  position fixed
  left 0
  top 0
  .back_home
    display flex
    flex-direction row
    font-size 16px
    margin-top 5px
    height 14px
    line-height 16px
    font-weight blod
    a
        padding 0px 0px 5px 10px
        color #000
        span
          padding 5px
    div
        flex 1
        text-align center
  .login-inner
    padding-top 40px
    width 80%
    margin 0 auto
    .login-header
      .login-logo
        font-size 40px
        font-weight bold
        color mediumpurple
        text-align center
        img
            width 150px
            height 100px
      .login-header-title
        padding-top 20px
        padding-bottom 10px
        text-align center

        > a
          color #333
          font-size 14px
          padding-bottom 4px

          &:first-child
            margin-right 40px

          &.current
            color #c63520
            font-weight 700
            border-bottom 2px solid #c63520

    .login-content
      > form
        > div
          display none

          &.current
            display block

          input
            width 100%
            height 100%
            padding-left 8px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial

            &:focus
              border 1px solid #c63520

          .login-message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff

            .get-verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent

              &.phone_right
                color purple

          .login-verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .cancel-password
                display inline-block
                // border 2px solid red
                position absolute
                right 0px
                top 6px
                padding 8px
            .cancelPassword
                display none
            .switch-show
              position absolute
              right 10px
              top 12px

              img
                display none

              img.on
                display block

          .login-hint
            margin-top 12px
            color #999
            font-size 12px
            line-height 20px

            > a
              color #c63520

        .login-submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background #c63520
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0

      .login-back
        display block
        width 100%
        height 42px
        margin-top 15px
        border-radius 4px
        background transparent
        border: 1px solid #c63520
        color #c63520
        text-align center
        font-size 16px
        line-height 42px
</style>
