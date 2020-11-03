<template>
<div>Button 示例</div>
<h1 class="mt-2">示例1</h1>
<div class="mt-2">
    <Button theme="button">按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
</div>
<h1 class="mt-2">示例二</h1>
<div class="mt-2">
    <Button size="big">大按钮</Button>
    <Button>普按钮</Button>
    <Button size="small">小按钮</Button>
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

<h1 class="mt-2">示例三</h1>
<div class="mt-2">

    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
</div>
<div class="mt-2">
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
</div>
<div class="mt-2">
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
</div>

<h1 class="mt-2">示例四</h1>
<div class="mt-2">
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文字按钮</Button>
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
