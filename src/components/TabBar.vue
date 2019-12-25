<template>
    <div class="bottom-tab">
        <span class="tab-item" @click="switchTo('/home')">
            <img
                :src="
                    $route.path.includes('/home')
                        ? this.tabBarImgArr[0].selected.default
                        : this.tabBarImgArr[0].normal.default
                "
                alt
            />
            <span :class="{ on: $route.path.includes('/home') }">首页</span>
        </span>
        <span class="tab-item" @click="switchTo('/recommand')">
            <img
                :src="
                    $route.path.includes('/recommand')
                        ? this.tabBarImgArr[1].selected.default
                        : this.tabBarImgArr[1].normal.default
                "
                alt
            />
            <span :class="{ on: $route.path.includes('/recommand') }"
                >推荐</span
            >
        </span>
        <span class="tab-item" @click="switchTo('/search')">
            <img
                :src="
                    $route.path.includes('/search')
                        ? this.tabBarImgArr[2].selected.default
                        : this.tabBarImgArr[2].normal.default
                "
                alt
            />
            <span :class="{ on: $route.path.includes('/search') }">搜索</span>
        </span>
        <span class="tab-item" @click="switchTo('/chat')">
            <img
                :src="
                    $route.path.includes('/chat')
                        ? this.tabBarImgArr[3].selected.default
                        : this.tabBarImgArr[3].normal.default
                "
                alt
            />
            <span :class="{ on: $route.path.includes('/chat') }">聊天</span>
        </span>
        <span class="tab-item" @click="switchTo('/mine')">
            <img
                :src="
                    $route.path.includes('/mine')
                        ? this.tabBarImgArr[4].selected.default
                        : this.tabBarImgArr[4].normal.default
                "
                alt
            />
            <span :class="{ on: $route.path.includes('/mine') }">我的</span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'TabBar',
    data() {
        return {
            tabBarImgArr: [
                {
                    normal: require('../assets/img/icon_home.png'),
                    selected: require('../assets/img/icon_home_selected.png'),
                },
                {
                    normal: require('../assets/img/icon_intro.png'),
                    selected: require('../assets/img/icon_intro_selected.png'),
                },
                {
                    normal: require('../assets/img/icon_search.png'),
                    selected: require('../assets/img/icon_search_selected.png'),
                },
                {
                    normal: require('../assets/img/icon_chat.png'),
                    selected: require('../assets/img/icon_chat_selected.png'),
                },
                {
                    normal: require('../assets/img/icon_mine.png'),
                    selected: require('../assets/img/icon_mine_selected.png'),
                },
            ],
        }
    },
    mounted: function() {
        //   this.$router.push('/home');
    },
    methods: {
        switchTo(path) {
            this.$router.replace(path)
        },
    },
}
</script>

<style lang="stylus" scoped>

.bottom-tab {
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 999;
  touch-action: none;

  .tab-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;

    img {
      @media screen and (min-width: 1200px) {
        height 35px
        width 35px
      }
      width: 35%;
      margin-bottom: 2px;
    }

    .on {
      color: red;
    }
  }
}
</style>
