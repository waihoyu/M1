<template>
    <div id="home">
        <ly-tab
            class="fixed"
            v-model="selectedId"
            :items="items"
            :options="options"
            @change="change"
        ></ly-tab>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            selectedId: 0,
            items: [
                { label: '热门', path: '/home/hot' },
                { label: '服饰', path: '/home/dress' },
                { label: '鞋包', path: '/home/box' },
                { label: '母婴', path: '/home/mybaby' },
                { label: '百货', path: '/home/general' },
                { label: '食品', path: '/home/food' },
                { label: '内衣', path: '/home/shirt' },
                { label: '男装', path: '/home/man' },
                { label: '电子', path: '/home/ele' }
            ],
            options: {
                activeColor: '#e9232c'
            },
            subRouteUrl: [
                '/home/hot',
                '/home/dress',
                '/home/box',
                '/home/mybaby',
                '/home/general',
                '/home/food',
                '/home/shirt',
                '/home/man',
                '/home/ele'
            ]
        };
    },
    mounted: function() {
        this.selectedId = this.$route.meta && parseInt(this.$route.meta.id);
    },
    methods: {
        change(item, index) {
            //   this.$router.replace(this.subRouteUrl[index]);
            this.$router.replace(item.path);
            this.selectedId = index;
        }
    }
};
</script>

<style lang="stylus" scoped>
#home{
    height 100%
    width 100%
}
.fixed {
      position fixed
      left 0
      top 0
      width 100%
      z-index 998
}
</style>
