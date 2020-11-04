<template>
<div>
    <div class="topnavBanner">
        <Topnav />
        <div class="banner">
            <h1>gvui</h1>
            <h2>一个基于vue3 的ui框架</h2>
            <p class="actions">
                <a href="https://github.com">github</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>

    <div class="features">
        <ul>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-vue"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>使用了 Vue 3 Composition API</p>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-tsx"></use>
                </svg>
                <h3>基于TypeScript</h3>
                <p>采用 TypeScript 书写</p>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3>代码结构清晰、易读</h3>
                <p>每个组件的代码都极其简洁</p>
            </li>
        </ul>
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

<style lang="scss" scoped>
$green:#02bcb0;
$border-radius:4px;
$color:#007974;

.topnavBanner{
    background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
}
.features{
    margin: 64px auto;
    max-width: 400px;
    @media (min-width: 800px) {
        width: 800px;
    }
    @media (min-width: 1200px) {
        width: 1200px;
    }
    >ul {
        display: flex;
        flex-wrap: wrap;
        >li {
        width: 400px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
            "icon title"
            "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }
            >h3 {
                grid-area: title;
                font-size: 28px;
            }
            >p {
                grid-area: text
            }
        }
    }
}
.banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:$color;
    >.actions {
        margin-top: 20px;
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: $green;
            display: inline-block;
            border-radius:$border-radius;
            width: 90px;
            height: 38px;
            line-height: 38px;
            text-align: center;
            color: #fff;
            &:hover{
                text-decoration: none;
                border:none;
            }
        }
        
    }
}
</style>
