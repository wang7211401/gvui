<demo>支持 level</demo>
<template>
<div>
    <div class="mt">
        <Button level="main">主要按钮</Button>
        <Button level="danger">危险按钮</Button>
    </div>
    <div class="mt">
        <Button theme="link" level="main">主要链接按钮</Button>
        <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div class="mt">
        <Button theme="text" level="main">主要文字按钮</Button>
        <Button theme="text">普通文字按钮</Button>
        <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
</div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue"
export default {
    components:{
        Button
    }
}
</script>
<style lang="scss" scoped>
    .mt{
        margin-top:8px;
    }
</style>