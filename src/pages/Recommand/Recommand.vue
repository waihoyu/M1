<template>
  <div class="recommend-container" v-if="recommendshoplist.length > 0">
      <ul class="recommend">
          <li class="recommend-item" div v-for="(list,index) in recommendshoplist" :key="index">
              <img :src="list.image_url" alt="" width="100%" v-if="list.image_url">
              <h4 class="item-title">{{list.short_name}}</h4>
              <div class="item-bottom">
                  <span class="item-price">
                      ¥{{list.price}}
                  </span>
                  <span class="item-sales">
                      {{list.sales_tip}}
                  </span>
                  <button class="item-btn">找相关</button>
                  <!-- <span class="item-price">{{item.}}</span> -->
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['recommendshoplist']),
    },
    mounted() {
        this.$store.dispatch('reqRecommendShopList');
    },
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
                    flex 2
                    color red
                    font-weiht bolder
                    font-size 12px
                .item-sales
                    flex 3
                    // color red
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