<template>
    <div id="dress">
        <div class="dress-container">
            <div class="dress-container-top"></div>
            <div class="dress-container-middle"></div>
            <div class="dress-container-bottom"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dress',
    data() {
        return {};
    },
    computed: {},
    methods: {},
    watch: {}
};
</script>

<style lang="stylus" scoped>
#dress
    background blue
    overflow-x hidden !important
    width 100%
    height 100%
    padding-top 4rem
    position relative
    .dress-container
        // position relative
        left 10px
        margin-left 20px
        width 100%
        height 200px
        background-color red
        // display flex
        // flex-direction column
        // justify-content center
        // align-items center
        .dress-container-top
            position absolute 
            // left 40px
            width 50px
            height 50px
            background-color orange
            // flex 4
        .dress-container-middle
            width 50px
            height 50px
            background-color green
            flex 1
        .dress-container-bottom 
            width 50px
            height 50px
            background-color pink    
            flex 2                    
</style>
