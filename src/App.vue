<template>
<router-view></router-view>
</template>

<script>
import {
    provide,
    ref
} from 'vue'
import Main from './components/Main.vue'

export default {
    name: 'App',
    setup() {
        const width = document.documentElement.clientWidth
        const asideVisible = ref(width <= 500 ? false : true)
        provide('asideVisible', asideVisible) // set
    }
}
</script>
