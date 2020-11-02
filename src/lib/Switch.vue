<template>
<button :class="{checked:value}" @click="toggle"><span></span></button>
{{value}}
</template>

<script lang="ts">
import {
    ref
} from 'vue'
export default {
    props: {
        value: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:value', !props.value)
        }
        return {
            toggle
        }
    }
}
</script>

<style lang="scss" scoped>
$h:22px;
$h2:$h - 4px;

button {
    position: relative;
    height: $h;
    width: $h*2;
    border: none;
    background: rgba(0, 0, 0, .25);
    border-radius: $h/2;
    outline: none;
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all .3s;
}

button.checked {
    background: #1890ff;
}

button.checked>span {
    left: calc(100% - #{$h2} - 2px);
}
</style>
