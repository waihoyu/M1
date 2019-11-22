<template>
    <div class="hot-nav">
        <div class="hot-nav-content" v-if="homenav">
            <div class="hot-nav-inner">
                <a
                    class="inner-item"
                    v-for="(nav, index) in homenav.item1"
                    :key="index"
                >
                    <img :src="nav.iconurl" alt />
                    <span>{{ nav.icontitle }}</span>
                </a>
                <a
                    class="inner-item"
                    v-for="(nav, index) in homenav.item2"
                    :key="index + 8"
                >
                    <img :src="nav.iconurl" alt />
                    <span>{{ nav.icontitle }}</span>
                </a>
            </div>
        </div>
        <div class="hot-nav-bottom">
            <div class="hot-nav-bottom-inner" :style="innerStyle"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'HotNav',
    data() {
        return {
            contentW:
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
            scrollContentW: 640,
            bgBarW: 100,
            barXWidth: 0,
            startX: 0,
            endX: 0,
            barMoveWidth: 0
        };
    },
    mounted() {
        this.$store.dispatch('reqHomeNav');
        this.getBarXWidth();
        this.bindEvent();
        // console.log(this.$store.state.homenav)
    },
    computed: {
        innerStyle() {
            return {
                width: `${this.barXWidth}px`,
                left: `${this.barMoveWidth}px`
            };
        },
        ...mapState(['homenav'])
    },
    methods: {
        getBarXWidth() {
            this.barXWidth =
                this.bgBarW * (this.contentW / this.scrollContentW);
        },
        bindEvent() {
            this.$el.addEventListener('touchstart', this.handleTouchStart, {
                passive: false
            });
            this.$el.addEventListener('touchmove', this.handleTouchMove, {
                passive: false
            });
            this.$el.addEventListener('touchend', this.handleTouchEnd, {
                passive: false
            });
        },
        handleTouchStart(e) {
            let touch = e.touches[0];
            this.startX = Number(touch.pageX);
        },
        handleTouchMove(e) {
            let touch = e.touches[0];
            let moveWidth = Number(touch.pageX) - this.startX;
            this.barMoveWidth = -(
                moveWidth * (this.bgBarW / this.scrollContentW) -
                this.endX
            );
            if (this.barMoveWidth <= 0) {
                this.barMoveWidth = 0;
            } else if (this.barMoveWidth >= this.bgBarW - this.barXWidth) {
                this.barMoveWidth = this.bgBarW - this.barXWidth;
            }
        },
        handleTouchEnd() {
            this.endX = this.barMoveWidth;
        }
    }
};
</script>

<style lang="stylus" scoped>
.hot-nav
  width 100%
  height 180px
  background #fff
  position relative
  .hot-nav-content
    width 100%
    overflow-x scroll
    .hot-nav-inner
      width 660px
      height 180px
      display flex
      flex-wrap wrap
      .inner-item
        width 80px
        height 80px
        display flex
        flex-direction column
        justify-content center
        align-items center
        font-size 14px
        color #666666
        img
          width 40%
          margin-bottom 5px
  .hot-nav-content::-webkit-scrollbar
    display none
  .hot-nav-bottom
    width 100px
    height 2px
    background-color #ccc
    position absolute
    left 50%
    margin-left -50px
    // bottom: 8px;
    .hot-nav-bottom-inner
      position absolute
      left 0
      background yellow
      width 50px
      height 100%
</style>
