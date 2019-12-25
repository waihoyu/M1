<template>
    <div class="searchpanel">
        <div class="search-nav">
            <div class="search-input">
                <img src="../images/hot.png" alt="" width="25px" />
                <input ref="mySearch" type="search" placeholder="热搜榜" />
            </div>
            <button @click="showSearchPanel(false)">取消</button>
        </div>
        <div class="search-content">
            <div class="title">
                <img src="../images/hot.png" alt="" width="25" />
                <span>热门搜索</span>
            </div>
            <ul class="search-list">
                <li>面巾纸</li>
                <li>浴巾儿童</li>
                <li>石榴水果</li>
                <li>保鲜盒</li>
                <li>富贵卷纸</li>
                <li>毛巾浴袍</li>
            </ul>
        </div>
    </div>
</template>

<script>
// import SearchNav from './SearchNav';

export default {
    name: 'SearchPanel',
    data() {
        return {}
    },
    props: {
        showSearchPanel: Function,
    },
    mounted() {},
    computed: {},
    methods: {},
    components: {
        // SearchNav
    },
}
</script>

<style lang="stylus" scoped>
@import "../../../common/stylus/minxin"
.searchpanel
    width 100%
    height 100%
    position fixed
    left 0
    top 0
    background-color #fff
    z-index 1000
    .search-nav
        width 100%
        height 60px
        border-bottom-1px(#ddd)
        // background-color #ddd
        display flex
        flex-direction row
        justify-content center
        align-items center
        .search-input
            display flex
            flex-direction row
            justify-content space-around
            align-items center
            width 85%
            height 38px
            border-radius 5px
            background-color #ededed
            padding 0 10px
            input
                background-color transparent
                width 90%
                height 90%
                padding-left 10px
                color #aaaaaa
                font-size 16px
                outline none
        button
            background-color transparent
            font-size 16px
            color #aaa
    .search-content
            padding 30px 15px
            .title
                display flex
                flex-display row
                align-items center
                color #aaa
                margin-bottom 10px
            .search-list
                display flex
                flex-direction row
                flex-wrap wrap
                li
                    background-color #ededed
                    color #aaa
                    margin 5px 5px
                    padding 5px 5px
                    border-radius 10px
</style>
