<template lang="">
<div class="gvui-tabs">
    <div class="gvui-tabs-nav" ref="container">
        <div class="gvui-tabs-nav-item"
        v-for="t,index in titles" :key="index"
        :class="{selected:t === selected}"
        :ref="el => {if(t === selected) selectedItem = el}"
         @click="select(t)">{{t}}</div>
         <div class="gvui-tabs-nav-indicator" ref="navIndicator"></div>
    </div>
    <div class="gvui-tabs-content">
        <component class="gvui-tabs-content-item" :is="current" :key="current.props.title"></component>
    </div>
</div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, ref, watchEffect } from 'vue'
import Tab from "./Tab.vue"
export default {
    props:{
        selected:{
            type:String
        }
    },
    setup(props, context) {
        const selectedItem = ref<HTMLDivElement>(null)
        const navIndicator = ref<HTMLDivElement>(null)
        const container = ref<HTMLDivElement>(null)

        onMounted(()=>{
            watchEffect(()=>{
                const {width,left:resuleLeft} = selectedItem.value.getBoundingClientRect()
                const {left:containerLeft} = container.value.getBoundingClientRect()
                const left =  resuleLeft - containerLeft
                navIndicator.value.style.width = width + 'px'
                navIndicator.value.style.left = left + 'px'
            },{flush:'post'})
        })
       
        const defaults = context.slots.default()
        defaults.forEach((tag) => {
            // @ts-ignore
            if (tag.type.name !== Tab.name) {
                throw new Error('Tabs 子组件必须是Tab')
            }
        })

        const current = computed(()=>{
            return defaults.filter((tag)=>{
                return tag.props.title === props.selected
            })[0]
        })
       
        const titles = defaults.map((tag) => {
            return tag.props.title
        })
        const select = (title)=>{
            context.emit("update:selected",title)
        }
        return {
            defaults,
            titles,
            current,
            select,
            selectedItem,
            navIndicator,
            container
        }
    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gvui-tabs {
    
    &-nav {
        position: relative;
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;

        &-item {
            padding: 8px;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }
        &-indicator{
            position: absolute;
            height:3px;
            background: $blue;
            left:0;
            bottom:-1px;
            width:100px;
            transition: all 250ms;
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
