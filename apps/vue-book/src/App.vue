<template>
  <div class="content">
    <nav-bar />
    <div
      class="p-16"
      style="scroll-behavior: smooth; scroll-padding-top: 5rem; flex: 1"
    >
      <div class="prose w-full max-w-4xl flex-grow">
        <h1 class="text-xl mb-8">组件示例</h1>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import NavBar from './components/nav-bar.vue'
</script>

<style>
.content {
  display: flex;
  height: 100vh;
  width: 100vw;
}

pre,
code {
  height: 200px;
}
</style>
