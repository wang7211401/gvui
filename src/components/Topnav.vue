<template>
<div class="topnav">
    <div class="logo" @click="toggleAside">Logo</div>
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    setup() {
        const asideVisible = inject < Ref < boolean > > ('asideVisible') // get
        const toggleAside = () => {
            asideVisible.value = !asideVisible.value
        }
        return {
            toggleAside
        }
    }
}
</script>

<style lang="scss" scoped>
.topnav {
    position: relative;
    background: pink;
    display: flex;
    padding: 16px;
    z-index: 10;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }
}
</style>
