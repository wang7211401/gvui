# gvui

gvui-ui 是一款基于 Vue 3 和 TypeScript 的 UI 库。涵盖了Button、Switch、Dialog 等常见的ui库。

深入研究 Vue3,使用了 setup、onMounted、watchEffect、ref、computed 等 Composition API。

模块化的源代码简洁明了、清晰易读。

[gvui 展示](https://wang7211401.github.io/gvui-example/)

## 安装

```
npm install gvui-ui
```

或

```
yarn add gvui-ui
```

## 开始使用

```
import {Button} from "gvui-ui"
```

```
<template>
    <div><Button>按钮</Button></div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "king-ui"
export default {
    components: {Button}
}
</script>
```


