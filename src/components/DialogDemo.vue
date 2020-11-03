<template>
<div>Dialog 示例</div>
<h1>示例一</h1>
<Button @click="toggleVisiable">显示Dialog</Button>
<Dialog v-model:visiable="dialogVisiable" :cancel="cancelFn" :ok="okFn">
    <template v-slot:title>
        <strong>
            提示标题
        </strong>
    </template>
    <template v-slot:content>
        <div>展示内容区域</div>
    </template>
</dialog>

<h1>示例二(取消点击遮罩层关闭)</h1>
<Button @click="toggleVisiable1">显示Dialog</Button>
<Dialog v-model:visiable="dialogVisiable1" :closeOnClickOverlay="false" :cancel="cancelFn1" :ok="okFn1">
    <p>第一行文字</p>
    <p>第二行文字</p>
</Dialog>
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
            console.log('emit')
            dialogVisiable.value = false
        }

        const dialogVisiable1 = ref(false)
        const toggleVisiable1 = () => {
            dialogVisiable1.value = true
        }
        const okFn1 = () => {
            dialogVisiable1.value = false
        }
        const cancelFn1 = () => {
            dialogVisiable1.value = false
        }
        return {
            dialogVisiable,
            toggleVisiable,
            okFn,
            cancelFn,
            dialogVisiable1,
            toggleVisiable1,
            okFn1,
            cancelFn1
        }
    }
}
</script>
