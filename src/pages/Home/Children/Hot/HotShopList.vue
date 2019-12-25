<template>
    <div id="hot-shop-container" v-if="homeshoplist.length > 0">
        <ul class="shop-list">
            <li
                class="shop-list-item"
                v-for="(shop, index) in homeshoplist"
                :key="index"
            >
                <img :src="shop.image_url" width="100%" alt="" />
                <h4 class="shop-list-item-title">
                    {{ shop.goods_name }}
                </h4>
                <div class="shop-list-item-bottom">
                    <span class="item-price"
                        >¥ {{ shop.normal_price / 100 }}</span
                    >
                    <span class="item-counter">已经拼555件</span>
                    <span class="item-user">
                        <img src="../../../../assets/home/user1.jpeg" alt="" />
                        <img src="../../../../assets/home/user2.jpeg" alt="" />
                    </span>
                    <span class="item-buy">
                        <button>去拼单></button>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'HotShopList',
    data() {
        return {}
    },
    mounted() {},
    methods: {},
    computed: {
        ...mapState(['homeshoplist']),
    },
}
</script>

<style lang="stylus" scoped>
#hot-shop-container
    margin-bottom 50px
    background-color  #f5f5f5
    .shop-list
        .shop-list-item
            margin-bottom 10px
            background-color  #FFF
            display flex
            flex-direction column
            .shop-list-item-title
                color orange
                font-size 14px
                line-height 22px
                width 94%
                margin-left 3%
                height 44px
                overflow hidden
            .shop-list-item-bottom
                display flex
                flex-direction row
                justify-content space-around
                align-items center
                .item-price
                    font-size 22px
                    flex 1
                    color red
                    text-align center
                    font-size 18px
                    font-weight bold
                .item-counter
                    font-size 12px
                    flex 2
                    color #cccccc
                .item-user
                    display flex
                    justify-content center
                    align-items center
                    flex 1
                    img
                        width 30px
                        height 30px
                        border-radius 50%
                    img:nth-child(2)
                        margin-left -6px
                .item-buy
                    flex 2
                    button
                        width 80%
                        // border solid 1px red
                        color white
                        height 34px
                        justify-content center
                        align-items center
                        margin-left 10px
                        background-color red
                        border-radius 10px
                        margin-bottom 3px
                        border none
</style>
