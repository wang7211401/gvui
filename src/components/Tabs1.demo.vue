<demo>常规用法</demo>
<template>
    <Tabs v-model:selected="selected">
        <Tab title="导航一">内容一</Tab>
        <Tab title="导航二">内容二</Tab>
    </Tabs>
</template>
<script lang="ts">
import Tabs from "../lib/Tabs.vue"
import Tab from "../lib/Tab.vue"
import { ref } from 'vue'
export default {
    components:{
        Tabs,
        Tab
    },
    setup(){
        const selected = ref("导航一")
        return {
            selected
        }
    }
}
</script>