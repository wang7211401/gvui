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
        const asideVisible = ref(false)
        provide('asideVisible', asideVisible) // set
    }
}
</script>
