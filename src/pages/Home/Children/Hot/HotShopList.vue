<template>
    <div id="hot-shop-container">
        <ul class="shop-list">
            <li class="shop-list-item">
                <img src="./home/01.jpeg" alt="" width="100%" />
                <h4 class="shop-list-item-title">
                    香朵儿运动服套装女2018春秋新款学生韩版宽松时尚休闲大码两件套
                </h4>
                <div class="shop-list-item-bottom">
                    <span class="item-price">20</span>
                    <span class="item-counter">已经拼555件</span>
                    <span class="item-user">
                        <img src="./home/user1.jpeg" alt="" />
                        <img
                            src="./home/user2.jpeg"
                            alt=""
                        />
                    </span>
                    <span class="item-buy">
                        <button>去拼单></button>
                    </span>
                </div>
            </li>
            <li class="shop-list-item">
                <img src="./home/02.jpeg" alt="" width="100%" />
                <h4 class="shop-list-item-title">
                    梵雪妮大码女装2018秋装新款中长款七分袖风衣修身气质外套连衣裙
                </h4>
                <div class="shop-list-item-bottom">
                    <span class="item-price">89.9</span>
                    <span class="item-counter">已经拼7549件</span>
                    <span class="item-user">
                        <img src="./home/user3.jpeg" alt="" /><img
                            src="./home/user4.jpeg"
                            alt=""
                        />
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
export default {
    name: 'HotShopList',
    data() {
        return {}
    },
    methods: {},
    computed: {}
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
                    // font-size 22px
                    // line-height 50px
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
