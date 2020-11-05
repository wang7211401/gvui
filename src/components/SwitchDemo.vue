<template>
<div>
  <h1>Switch 组件示例 </h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Switch v-model:value="bool1" />
    </div>
    <div class="demo-actions">
      <Button @click="toggle1 = !toggle1">查看代码</Button>
    </div>
    <div class="demo-code" v-if="toggle1">
      <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
    </div>
  </div>
  <div class="demo">
    <h2>支持 disabled </h2>
    <div class="demo-component">
      <Switch v-model:value="bool2" disabled />
    </div>
    <div class="demo-actions">
      <Button @click="toggle2 = !toggle2">查看代码</Button>
    </div>
    <div class="demo-code" v-if="toggle2">
      <pre>&lt;Switch v-model:value="bool" disabled /&gt;</pre>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import Switch from "../lib/Switch.vue"
import Button from "../lib/Button.vue"
export default {
    components: {
        Switch,
        Button
    },
    setup() {
        const bool1 = ref(true)
        const bool2 = ref(false)
        const toggle1 = ref(false)
        const toggle2 = ref(false)
        return {
            bool1,
            bool2,
            toggle1,
            toggle2
        }
    }
}
</script>
<style lang="scss" scoped>
    $border-color:#d9d9d9;
    .demo{
        border: 1px solid $border-color;
        margin: 16px 0 32px;
        >h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;
        }
        &-component {
            padding: 16px;
        }
        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
        }
        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
            >pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
            }
        }
    }

</style>