<template>
<div>导航栏
    <router-link to="/">首页</router-link> |
    <router-link to="/main">main2</router-link>
</div>
<router-view></router-view>
</template>

<script>
import Main from './components/Main.vue'

export default {
    name: 'App',
}
</script>
