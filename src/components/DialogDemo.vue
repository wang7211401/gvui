<template>
<div>Dialog 示例</div>
<h1 style="margin-top:16px;">示例一</h1>
<Button class="mt-2" @click="toggleVisiable">显示Dialog</Button>
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

<h1 style="margin-top:16px;">示例二(取消点击遮罩层关闭)</h1>
<Button class="mt-2" @click="toggleVisiable1">显示Dialog</Button>
<Dialog v-model:visiable="dialogVisiable1" :closeOnClickOverlay="false" :cancel="cancelFn1" :ok="okFn1">
    <template v-slot:title>
        <strong>
            提示
        </strong>
    </template>
    <template v-slot:content>
        <div>展示内容区域</div>
    </template>
</Dialog>

<h1 style="margin-top:16px;">示例三</h1>
<Button class="mt-2" @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue"
import Button from "../lib/Button.vue"
import {
    ref
} from 'vue'
import {
    openDialog
} from "../lib/openDialog"
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
            dialogVisiable.value = false
            return false
        }
        const cancelFn = () => {
            console.log('emit')
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

        const showDialog = () => {
            openDialog({
                title: "标题",
                content: "内容区域",
                ok() {
                    console.log("ok")
                },
                cancel() {
                    console.log("cancel")
                }
            })
        }
        return {
            dialogVisiable,
            toggleVisiable,
            okFn,
            cancelFn,
            dialogVisiable1,
            toggleVisiable1,
            okFn1,
            cancelFn1,
            showDialog
        }
    }
}
</script>
