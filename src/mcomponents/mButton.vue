<template>
    <div>
        <button class="g-button">我是一个按钮</button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        type: {
            type: String,
            default: 'setting',
        },
    },
    methods: {},
    computed: {},
    watch: {},
}
</script>

<style lang="stylus">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: red;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #999;
    --border-color: #999;
    --border-color-hover: #666;
}
</style>
<style lang="stylus" scoped>
.g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    background: var(--button-bg);
    border: 1px solid var(--button-color);
    border-radius: var(--border-radius);
    font: inherit;
}

.g-button:hover {
    border-color: var(--border-color-hover);
}

.g-button:active {
    background-color: var(--button-active-bg);
}
</style>
