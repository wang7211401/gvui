<template>
<div>
    <Switch v-model:value="checked">
</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import Switch from "../lib/Switch.vue"
export default {
    components: {
        Switch
    },
    setup() {
        const checked = ref(true)
        return {
            checked
        }
    }
}
</script>
