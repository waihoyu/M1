<template>
    <div class="general-container">
        <div class="print">
            <label for="" class="card-item__number">
                <template>
                    <span
                        v-for="(n, $index) in currentPlaceholder"
                        :key="$index"
                    >
                        <transition name="slide-fade-up">
                            <div
                                class="card-item__numberItem"
                                :class="{ '-active': n.trim() === '' }"
                                :key="currentPlaceholder"
                                v-if="cardNumber.length > $index"
                            >
                                {{ cardNumber[$index] }}
                            </div>
                            <div
                                class="card-item__numberItem"
                                :class="{ '-active': n.trim() === '' }"
                                v-else
                                :key="currentPlaceholder + 1"
                            >
                                {{ n }}
                            </div>
                        </transition>
                    </span>
                </template>
            </label>
        </div>
        <input type="text" @input="changeNumber" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPlaceholder: '                         ',
            cardNumber: '',
        }
    },
    methods: {
        changeNumber(e) {
            this.cardNumber = e.target.value
            // console.log(this.cardNumber);
        },
    },
}
</script>

<style lang="stylus" scoped>
.general-container
    margin-top 4rem
.print
    width 100%
    height 100px
    background blue
input
    width 100%
    line-height 100px
    margin-top 20px
.slide-fade-up-enter-active {
    transition: all 0.25s ease-in-out;
    transition-delay: 0.1s;
    // border: 1px solid red;
    color red
    position: relative;
}

.slide-fade-up-leave-active {
    transition: all 0.25s ease-in-out;
    position: absolute;
}

.slide-fade-up-enter {
    opacity: 0;
    transform: translateY(25px);
    // border: 5px solid red;
    pointer-events: none;
}

.slide-fade-up-leave-to {
    opacity: 0;
    transform: translateY(-15px);
    pointer-events: none;
}

.slide-fade-right-enter-active {
    transition: all 0.25s ease-in-out;
    transition-delay: 0.1s;
    position: relative;
}

.slide-fade-right-leave-active {
    transition: all 0.25s ease-in-out;
    position: absolute;
}

.slide-fade-right-enter {
    opacity: 0;
    transform: translateX(10px) rotate(45deg);
    pointer-events: none;
}

.slide-fade-right-leave-to {
    opacity: 0;
    transform: translateX(-10px) rotate(45deg);
    pointer-events: none;
}

.card-item__number {
    font-weight: 500;
    line-height: 1;
    color: #fff;
    font-size: 27px;
    margin-bottom: 25px;
    display: inline-block;
    padding: 10px 15px;
    }
.card-item__numberItem {
    width: 16px;
    display: inline-block;

    &.-active {
        width: 30px;
    }

    }
</style>
