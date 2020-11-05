<demo>支持 size</demo>
<template>
    <div>
        <div class="mt">
            <Button size="big" theme="text">大按钮</Button>
            <Button theme="text">普按钮</Button>
            <Button size="small" theme="text">小按钮</Button>
        </div>
        <div class="mt">
            <Button theme="link" size="big">大按钮</Button>
            <Button theme="link">普按钮</Button>
            <Button size="small" theme="link">小按钮</Button>
        </div>
        <div class="mt">
            <Button size="big" theme="text">大按钮</Button>
            <Button theme="text">普按钮</Button>
            <Button size="small" theme="text">小按钮</Button>
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