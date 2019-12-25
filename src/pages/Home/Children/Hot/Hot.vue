<template>
    <div id="hot">
        <div class="swiper-container" v-if="homecasual.length > 0">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide"
                    v-for="(casual, index) in homecasual"
                    :key="index"
                >
                    <img :src="casual.imgurl" alt width="100%" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <hot-nav class="hot-nav"> </hot-nav>
        <div class="hot-ad">
            <img
                v-for="(ad, index) in hotads.item1"
                :key="index"
                :src="ad.iconurl"
                alt=""
            />
        </div>
        <div class="sec_kill_floor">
            <div class="floor-the-container">
                <div class="floor-container">
                    <div class="floor-wrapper">
                        <div class="title-wrapper">
                            <a
                                href="https://wqs.jd.com/portal/wx/seckill_m/index.shtml"
                                jump-href="https://wqs.jd.com/portal/wx/seckill_m/index.shtml"
                            >
                                <div class="title-sec-kill-img">
                                    <img :src="secKillImg.default" alt="" />
                                </div>
                                <strong class="seckill-nth j_sec_order"
                                    >12点场</strong
                                >
                                <div class="seckill-timer">
                                    <div class="seckill-time j_sk_h">1</div>
                                    <span>:</span>
                                    <div class="seckill-time j_sk_m">2</div>
                                    <span>:</span>
                                    <div class="seckill-time j_sk_s">3</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hot-shop-list class="hot-shop-list"></hot-shop-list>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import HotNav from './HotNav'
import HotShopList from './HotShopList'
import { mapState } from 'vuex'

export default {
    name: 'Hot',
    data() {
        return {
            secKillImg: require('../../../../assets/img/jdms.png'),
        }
    },
    computed: {
        ...mapState(['homecasual', 'hotads']),
    },
    mounted() {
        this.$store.dispatch('reqHomeCasual')
        this.$store.dispatch('reqHotAds')
        this.$store.dispatch('reqHomeShopList')
    },
    watch: {
        homecasual() {
            this.$nextTick(() => {
                new Swiper('.swiper-container', {
                    autoplay: true, //可选选项，自动滑动
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            })
        },
    },
    props: [''],
    methods: {},
    components: {
        HotNav,
        HotShopList,
    },
}
</script>

<style lang="stylus" scoped>
#hot
    background #f6f6f6
    overflow-x hidden !important
    width 100%
    height 100%
    padding-top 2.1rem
    text-decoration none
    .hot-ad
        width 100%
        height 100px
        margin-top 1px
        background #fff
        display flex
        flex-direction row
        img
            height 100%
            width 33.33%
    .sec_kill_floor
        background-color #149359
        height 300px
        width 100%
        overflow hidden
        .floor-the-container
            // position relative
            background-color white
            height 200px
            margin 0.5rem
            border-radius 5px
            .floor-wrapper
                // background red
                border-radius 5px
                .title-wrapper
                    background url('../../../../assets/img/sec_kill_bg.png') no-repeat
                    background-size contain
                    line-height: 1.7rem;
                    vertical-align: middle;
                    width 100%
                    height 17rem
                    // border 1px solid
                    .title-sec-kill-img
                        float: left;
                        display: inline-block;
                        width: 3.45rem;
                        height: 1.35rem;
                        // margin-top: .4rem;
                        margin-right: .3rem;
                        margin-left: .45rem;
                        img
                            width: 3.45rem;
                            // height: 1.35rem;
                    .seckill-nth
                        font-size: 12px;
                        color: #232326;
                        font-weight: 700;
                    .seckill-timer
                        display inline-block
                        .seckill-time
                            display inline-block
</style>
