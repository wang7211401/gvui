<template>
<div>
    <Button>按钮</Button>
    <Button theme="primary">主要按钮</Button>
    <Button theme="link">我是按钮</Button>
    <Button theme="text">文字按钮</Button>
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
