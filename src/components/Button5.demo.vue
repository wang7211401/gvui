<demo>支持 loading</demo>
<template>
<div>
    <Button loading>加载中</Button>
    <Button theme="link" loading>禁用链接按钮</Button>
    <Button theme="text" loading>禁用文字按钮</Button>
    <Button>加载完毕</Button>
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