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
            <img src="../../../../assets/home/s2.png" alt="" />
        </div>
        <hot-shop-list class="hot-shop-list"></hot-shop-list>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import HotNav from './HotNav';
import HotShopList from './HotShopList';
import { mapState } from 'vuex';

export default {
    name: 'Hot',
    data() {
        return {};
    },
    computed: {
        ...mapState(['homecasual'])
    },
    mounted() {
        this.$store.dispatch('reqHomeCasual');
        this.$store.dispatch('reqHomeShopList');
    },
    watch: {
        homecasual() {
            this.$nextTick(() => {
                new Swiper('.swiper-container', {
                    autoplay: true, //可选选项，自动滑动
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                });
            });
        }
    },
    props: [''],
    methods: {},
    components: {
        HotNav,
        HotShopList
    }
};
</script>

<style lang="stylus" scoped>
#hot
  background #f5f5f5
  overflow-x hidden !important
  width 100%
  height 100%
  padding-top 4rem
  .hot-ad
    width 100%
    height 100px
    margin-top 1px
    background #fff
    // overflow hidden
    img
        height 100%
        width 100%
</style>
