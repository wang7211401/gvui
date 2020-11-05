<template>
<div class="topnav">
    <router-link class="logo" to="/" tag="div">
        <svg class="icon">
            <use xlink:href="#icon-guitar"></use>
        </svg>
    </router-link>
    <ul class="menu">
        <li>
            <router-link to="/doc">文档</router-link>
        </li>
    </ul>
    <svg class="toggleAside" @click="toggleAside" v-if="toggleAsideVisiable">
        <use xlink:href="#icon-menu"></use>
    </svg>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    props:{
        toggleAsideVisiable:{
            type:Boolean,
            default:false
        }
    },
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
$color: #007974;
$svgColor:#02bcb0;
.topnav {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    color: $color;

    >.logo {
        max-width: 6em;
        margin-right: auto;
        &:hover,&:focus{
            text-decoration: none;
            border:none;
        }
        >svg {
            width: 32px;
            height: 32px;
            color: $svgColor;
        }
    }

   

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleAside {
        width: 32px;
        height: 32px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
        fill: fade-out(black, 0.1);
    }

    @media (max-width:500px) {
        &{
            padding:8px;
            background: #fff;
        }
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>
