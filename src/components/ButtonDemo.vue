<template>
<div>Button 示例</div>
<h1>示例1</h1>
<div class="mt-2">
    <Button theme="button">按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
</div>
<h1>示例二</h1>
<div class="mt-2">
    <Button>按钮</Button>
    <Button size="big">按钮</Button>
    <Button size="small">按钮</Button>
</div>
<div class="mt-2">
    <Button theme="link" size="big">大按钮</Button>
    <Button theme="link">普按钮</Button>
    <Button size="small" theme="link">小按钮</Button>
</div>
<div class="mt-2">
    <Button size="big" theme="text">大按钮</Button>
    <Button theme="text">普按钮</Button>
    <Button size="small" theme="text">小按钮</Button>
</div>
</template>

<script>
import Button from "../lib/Button.vue"
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log('click')
        }
        const onFocus = () => {
            console.log("focus")
        }
        return {
            onClick,
            onFocus
        }
    }
}
</script>

<style lang="scss">
.mt-2 {
    margin-top: 8px;
}
</style>
