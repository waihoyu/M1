<template>
    <a class="recommend-item">
        <img :src="item.image_url" alt="" width="100%" v-if="item.image_url" />
        <h4 class="item-title">{{ item.short_name }}</h4>
        <div class="item-bottom">
            <span class="item-price"> ¥{{ item.price }} </span>
            <span class="item-sales">
                {{ item.sales_tip }}
            </span>
            <button class="item-btn">找相关</button>
        </div>
    </a>
</template>

<script>
export default {
    name: 'ShopList',
    props: {
        item: Object
    }
};
</script>

<style lang="stylus" scoped>
.recommend-item:nth-child(2n - 1)
    margin-right 1%
.recommend-item
    width 49.5%
    background #FFF
    padding-bottom 15px
    margin-bottom 15px
    .item-title
        line-height 20px
        font-size 13px
        font-weight lighter
        height 20px
        overflow hidden
        margin 5px  0
        padding 0 5px
    .item-bottom
        display flex
        flex-direction row
        align-items center
        padding 0 6px
        .item-price
            flex 1
            color red
            font-weiht bolder
            font-size 12px
        .item-sales
            flex 3
            font-weiht bolder
            font-size 10px
        .item-btn
            flex 2
            border 1px solid orange
            height 26px
            background-color transparent
            color red
            border-radius 5px
</style>
