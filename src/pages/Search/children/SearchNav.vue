<template>
    <div class="search-nav" @click.prevent="showSearchPanel(true)">
        <a href="" class="search-nav-icon">
            <img src="../images/search.png" alt="" width="25px" />
            <span>秋上衣</span>
        </a>
    </div>
</template>

<script>
export default {
    name: 'SearchNav',
    props: {
        showSearchPanel: Function
    }
};
</script>

<style lang="stylus" scoped>
@import '../../../common/stylus/minxin.styl'
.search-nav
    width 100%
    height 60px
    background-color #fff
    border-bottom-1px(#ccc)
    position fixed
    top 0px
    left 0
    z-index 998
    display flex
    justify-content center
    align-items center
    .search-nav-icon
        width 90%
        height 70%
        background-color #e8e8e8
        border-radius 10px
        display flex
        justify-content center
        align-items center
        span
            color #aaa
            margin-left 6px
            font-size 18px
            font-weight lighter
</style>
