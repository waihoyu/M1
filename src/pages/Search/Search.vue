<template>
    <div class="search">
        <search-nav :showSearchPanel="showSearchPanel"></search-nav>
        <div class="shop">
            <div class="menu-wrapper">
                <ul>
                    <li
                        ref="menuList"
                        class="menu-item "
                        v-for="(good, index) in rearchgoods"
                        :key="index"
                        :class="{ current: index === curentIndex }"
                        @click="clickLeftLi(index)"
                    >
                        <span>{{ good.name }}</span>
                    </li>
                </ul>
            </div>
            <div class="shop-wrapper">
                <ul>
                    <li
                        class="shops-li"
                        v-for="(good, index) in rearchgoods"
                        :key="index"
                        ref="shopParent"
                    >
                        <div class="shops-title">
                            <h4>{{ good.name }}</h4>
                            <a href="">查看更多</a>
                        </div>
                        <ul class="phone-type" v-if="good.tag === 'phone'">
                            <li
                                v-for="(ca, index) in good.category"
                                :key="index"
                            >
                                <img :src="ca.icon" alt="" />
                            </li>
                        </ul>
                        <ul class="shops-items">
                            <li
                                v-for="(item, index) in good.items"
                                :key="index"
                            >
                                <img :src="item.icon" alt="" />
                                <span>{{ item.title }}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <search-panel
            v-if="isShow"
            :showSearchPanel="showSearchPanel"
        ></search-panel>
    </div>
</template>

<script>
import SearchNav from './children/SearchNav';
import SearchPanel from './children/SearchPanel';

import { mapState } from 'vuex';
import BScroll from 'better-scroll';
export default {
    name: 'Search',
    data() {
        return {
            scrollY: 0,
            rightTops: [],
            isShow: false
        };
    },
    computed: {
        ...mapState(['rearchgoods']),
        curentIndex() {
            let { scrollY, rightTops } = this;
            return rightTops.findIndex((top, index) => {
                this._changeLeftScroll(index);
                return scrollY >= top && scrollY < rightTops[index + 1];
            });
        }
    },
    mounted() {
        this.$store.dispatch('reqRearchGoods');
    },
    components: {
        SearchNav,
        SearchPanel
    },
    methods: {
        showSearchPanel(opt) {
            this.isShow = opt;
        },
        _initScroll() {
            this.leftScroll = new BScroll('.menu-wrapper', {});
            this.rightScroll = new BScroll('.shop-wrapper', {
                probeType: 3
            });
            this.rightScroll.on('scroll', pos => {
                this.scrollY = Math.abs(Math.round(pos.y)) + 400;
            });
        },
        _initRightTops() {
            let tempArr = [];
            let top = 0;
            tempArr.push(top);
            let alllis = this.$el.getElementsByClassName('shops-li');
            Array.prototype.slice.call(alllis).forEach(li => {
                top += li.clientHeight;
                tempArr.push(top);
            });
            this.rightTops = tempArr;
        },
        _changeLeftScroll(index) {
            let menuLists = this.$refs.menuList;
            let el = menuLists[index];
            this.leftScroll.scrollToElement(el, 300, 0, -100);
        },
        clickLeftLi(index) {
            this.scrollY = this.rightTops[index];
            this.rightScroll.scrollTo(0, -this.scrollY, 300);
        }
    },
    watch: {
        rearchgoods() {
            this.$nextTick(() => {
                this._initScroll();
                this._initRightTops();
            });
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/minxin.styl'
.search
    background #F5F5F5
    width 100%
    height 100%
    overflow hidden
    font-size 14px
    .shop
        display flex
        position absolute
        width 100%
        top 60px
        bottom 50px
        height  100%
        overflow hidden
        .menu-wrapper
            background-color #e0e0e0
            width: 80px
            flex 0 0 80px
            .menu-item
                width 100%
                height 60px
                background-color #fafafa
                display flex
                justify-content center
                align-items center
                font-weight lighter
                color #666666
                position relative
            .current
                color #e02e24
            .current::before
                content ''
                background-color #e02e24
                width 4px
                height 30px
                position absolute
                left  0
        .shop-wrapper
            flex 1
            background-color #fff
            .shops-title
                display flex
                flex-direction row
                padding 0 10px
                height 44px
                align-items center
                justify-content space-between
                color #999
                a
                    color #999
                    text-decoration none
                    font-weight lighter
            .phone-type
                width 100%
                display flex
                flex-wrap wrap
                border-bottom-1px(red)
                li
                    width 33.3%
                    display flex
                    justify-content center
                    align-items center
                    margin  5px 0
                    img
                        width 70%
            .shops-items
                display flex
                flex-wrap wrap
                li
                    display flex
                    flex-direction column
                    width 33.3%
                    height 90px
                    justify-content center
                    align-items center
                    font-size 12px
                    img
                        width 60%
                        height 60%
                        margin-bottom 5px
</style>
