<template>
    <div class="footer-wrapper">
        <input type="checkbox" id="cb-finishedThings" v-model="isChecked" />
        已经完成{{ finishCount }}/总计{{ this.todolist.length }}件
        <input
            type="button"
            id="btn-deleteFinished"
            value="清除已经完成任务"
            @click="deleteFinishedItem()"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            finishedThings: 0,
            isAllFinished: true,
        }
    },
    props: {
        todolist: Array,
        selectAll: Function,
        deleteFinishedItem: Function,
    },
    methods: {
        clearAllFinishItems() {},
    },
    computed: {
        finishCount() {
            return this.todolist.reduce(
                (total, todo) => total + (todo.isFinished ? 1 : 0),
                0,
            )
        },
        isChecked: {
            get() {
                if (this.todolist.length > 0) {
                    return this.finishCount === this.todolist.length
                }
                return false
            },
            set(value) {
                this.selectAll(value)
            },
        },
    },
    components: {},
    watch: {},
}
</script>

<style scoped>
.footer-wrapper {
    width: 90%;
    /* background: orange; */
    font-size: 14px;
    margin-left: 30px;
    margin-bottom: 10px;
}
#cb-finishedThings {
    margin: 10px 5px;
}
#btn-deleteFinished {
    float: right;
    margin-top: 1px;
    font-size: 12px;
    height: 30px;
    width: 110px;
    background-color: #4caf50;
    border-radius: 5px;
}
</style>
