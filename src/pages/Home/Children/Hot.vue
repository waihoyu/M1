<template>
    <div id="hot">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- v-for="(casual, index) in homecasual" :key="index" -->
                <div class="swiper-slide">
                    <img src="./Hot/home/s1.png" alt width="100%" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <hot-nav class="hot-nav"> </hot-nav>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import HotNav from './Hot/HotNav'
//   import HotShopList from './HotShopList'

import { mapState } from 'vuex'
export default {
    name: 'Hot',
    data() {
        return {}
    },
    mounted() {
        new Swiper('.swiper-container', {
            autoplay: true, //可选选项，自动滑动
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
    },
    props: [''],
    methods: {},
    components: {
        HotNav
    }
}
</script>

<style lang="stylus" scoped>
#hot
  background #f5f5f5
  overflow-x hidden !important
  width 100%
  height 100%
  padding-top 4rem
</style>
