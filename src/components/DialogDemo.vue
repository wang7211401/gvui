<template>
<div>Dialog 示例</div>
<h1>示例一</h1>
<Button @click="toggleVisiable">显示Dialog</Button>
<Dialog v-model:visiable="dialogVisiable" :cancel="cancelFn" :ok="okFn" />

<h1>示例二(取消点击遮罩层关闭)</h1>
<Button @click="toggleVisiable">显示Dialog</Button>
<Dialog v-model:visiable="dialogVisiable" :closeOnClickOverlay="false" :cancel="cancelFn" :ok="okFn" />
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue"
import Button from "../lib/Button.vue"
import {
    ref
} from 'vue'
export default {
    components: {
        Dialog,
        Button
    },
    setup() {
        const dialogVisiable = ref(false)
        const toggleVisiable = () => {
            dialogVisiable.value = true
        }
        const okFn = () => {
            console.log('关闭2')

            dialogVisiable.value = false
            return false
        }
        const cancelFn = () => {
            console.log(1)
            console.log(2)
            console.log('关闭')
            dialogVisiable.value = false
        }
        return {
            dialogVisiable,
            toggleVisiable,
            okFn,
            cancelFn
        }
    }
}
</script>
