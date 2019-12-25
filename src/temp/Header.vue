<template>
    <div class="title-wrapper">
        <input
            type="text"
            id="input-title"
            placeholder="请输入今天要完成的任务,按回车确认"
            @keydown.enter="addItemToList"
            v-model="content"
            :addNewItemToList="addNewItemToList"
        />
    </div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            content: '',
        }
    },
    props: {
        addNewItemToList: Function,
    },
    methods: {
        addItemToList() {
            if (this.content.length <= 0) {
                alert('请输入任务标题内容')
                return
            } else {
                this.addNewItemToList({
                    title: this.content,
                    isFinished: false,
                })
                this.content = ''
            }
        },
    },
}
</script>

<style scoped>
.title-wrapper {
    /* background: red; */
}
#input-title {
    width: 90%;
    height: 30px;
    /* border: solid 1px red; */
    font-size: 14px;
    box-sizing: border-box;
    margin-left: 30px;
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
}
</style>
