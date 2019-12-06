<template>
    <div class="recommend-container" v-if="recommendshoplist.length > 0">
        <ul class="recommend">
            <shop-list
                v-for="(item, index) in recommendshoplist"
                :item="item"
                :key="index"
            ></shop-list>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ShopList from '../../components/ShopList';
import BScroll from 'better-scroll';

export default {
    watch: {
        recommendshoplist() {
            this.$nextTick(() => {
                this._initBSroll();
            });
        }
    },
    methods: {
        _initBSroll() {
            this.listScroll = new BScroll('.recommend-container', {
                probeType: 3,
                scrollY: true
            });
            this.listScroll.on('touchEnd', pos => {
                // 监听下拉
                if (pos.y >= 50) {
                    console.log('监听下拉');
                }
                if (this.listScroll.maxScrollY > pos.y + 20) {
                    console.log('监听上拉');
                }
            });
        }
    },
    computed: {
        ...mapState(['recommendshoplist'])
    },
    mounted() {
        this.$store.dispatch('reqRecommendShopList');
    },
    components: {
        ShopList
    }
};
</script>

<style lang="stylus" scoped>
.recommend-container
    background #fff
    width 100%
    height 100%
    .recommend
        display flex
        flex-direction row
        flex-wrap wrap
        background #f5f5f5
        margin-bottom 50px
</style>
