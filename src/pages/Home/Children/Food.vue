<template>
    <div class="food-container">
        <div class="top animated heartBeat faster">
            <button v-on:click="show = !show">
                Toggle
            </button>
        </div>
        <div class="content">
            <transition
                name="slide-fade"
                enter-active-class="heartBeat"
                leave-active-class="flipInY"
            >
                <dir v-if="show" class="content_1">
                    <p>hello</p>
                    <img
                        src="../../../assets/images/main.png"
                        alt=""
                        width="200px"
                        height="150px"
                    />
                </dir>
            </transition>

            <transition name="slide-fade2">
                <dir class="slider-fade2" v-if="show">
                    <p>hello2</p>
                    <img
                        src="../../../assets/images/main.png"
                        alt=""
                        width="200px"
                        height="150px"
                    />
                </dir>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        };
    },
    computed: {},
    mounted() {}
};
</script>

<style lang="stylus" scoped>
.food-container
    background #fff
    width 100%
    height 100%
    padding-top 4rem
    .top
        border  10px  solid red;
        // animation: rise 30s linear infinite reverse;
    .content
        box-sizing border-box
        border 10px solid blue
        width 100%
        height 70%
        // animation: rise 3s cubic-bezier(0.19, 1, 0.22, 1) 0.25s  infinite;
        // animation: rise 30s linear infinite;
        .content_1
            // animation: rise 1s linear infinite reverse;
.slide-fade2
    position fixed
    left 20px;
    top 100px;
.slide-fade-enter-active {
    transition: all .3s ease;
    transform: translate3d(0, 100%, 0);
    transform: rotate(30deg) ;
    // animation: rise 3s cubic-bezier(0.19, 1, 0.22, 1) 0.25s  infinite;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade2-enter-active {
  transition: all 3s ease;
}
.slide-fade2-leave-active {
  transition: all 3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade2-enter, .slide-fade2-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@keyframes rise {
//   0% {
//     opacity: 0;
//     transform: translate3d(0, 100%, 0);
//     transform: rotate(30deg);
//   }

//   50% {
//     opacity: 1;
//     transform: rotate(180deg);
//   }

//   100% {
//     opacity: 1;
//     transform: translate3d(0, 450rpx, 0);
//     transform: rotate(240deg);
//   }
from{transform: rotate(0deg)}
    to{transform: rotate(359deg)}
}
</style>
