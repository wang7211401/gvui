<template>
<div>Tabs 示例</div>
<h1 class="mt-2">示例一</h1>

<Tabs v-model:selected="selected">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
    <Tab title="导航三">内容三</Tab>
    <Tab title="导航四">内容四</Tab>
    <Tab title="导航五">内容五</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue"
import Tab from "../lib/Tab.vue"
import { ref } from 'vue'
export default {
    components: {
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
