<template>
<div>Dialog 示例</div>
<Demo :component="Dialog1Demo" />
<Demo :component="Dialog2Demo" />
<Demo :component="Dialog3Demo" />
</template>

<script lang="ts">
import Dialog1Demo from "./Dialog1.demo.vue"
import Dialog2Demo from "./Dialog2.demo.vue"
import Dialog3Demo from "./Dialog3.demo.vue"
import Demo from "./Demo.vue"

export default {
    components: {
        Demo
    },
    setup() {
        return {
            Dialog1Demo,
            Dialog2Demo,
            Dialog3Demo
        }
    }
}
</script>
