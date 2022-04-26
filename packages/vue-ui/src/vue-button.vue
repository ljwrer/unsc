<template>
  <div>
    <button class="vue-btn">{{ a }}</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const a = ref<string>('hello button')
</script>
<style scoped>
.vue-btn {
  background: deepskyblue;
}
</style>
