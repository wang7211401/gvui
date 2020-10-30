<template>
<div>
    <Topnav />
    <div class="banner">
        <h1>gvui</h1>
        <h2>一个基于vue3 的ui框架</h2>
        <p class="actions">
            <a href="">github</a>
            <a href="">开始</a>
        </p>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue"
export default {
    components: {
        Topnav
    }
}
</script>
