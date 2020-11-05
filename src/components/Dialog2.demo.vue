<demo>取消点击遮罩层关闭</demo>
<template>
    <div>
        <Button @click="toggleVisiable">显示Dialog</Button>
        <Dialog v-model:visiable="dialogVisiable" :closeOnClickOverlay="false" :cancel="cancelFn" :ok="okFn">
            <template v-slot:title>
                <strong>
                    提示
                </strong>
            </template>
            <template v-slot:content>
                <div>展示内容区域</div>
            </template>
        </Dialog>
    </div>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue"
import Button from "../lib/Button.vue"
import { ref } from 'vue'
export default {
    components:{
        Dialog,
        Button
    },
    setup(){
        const dialogVisiable = ref(false)
        const toggleVisiable = ()=>{
            dialogVisiable.value = !dialogVisiable.value
        }

        const okFn = () => {
            dialogVisiable.value = false
            console.log("ok")
            return false
        }
        const cancelFn = () => {
            console.log('cancel')
        }
        return {
            dialogVisiable,
            toggleVisiable
        }
    }
}
</script>