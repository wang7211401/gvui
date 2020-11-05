<demo>常规用法</demo>
<template>
    <div>
        <Button @click="toggleVisiable">显示Dialog</Button>
        <Dialog v-model:visiable="dialogVisiable">
            <template v-slot:title>
                <strong>
                    提示标题
                </strong>
            </template>
            <template v-slot:content>
                <div>展示内容区域</div>
            </template>
        </dialog>
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
        return {
            dialogVisiable,
            toggleVisiable
        }
    }
}
</script>