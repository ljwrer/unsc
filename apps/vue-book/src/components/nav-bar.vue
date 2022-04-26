<template>
  <aside class="bg-base-200 w-80 p-4">
    <a class="btn btn-ghost normal-case text-xl">Vue-UI</a>
    <input
      type="text"
      placeholder="Search..."
      class="input w-full max-w-xs"
      v-model="search"
    />
    <ul class="menu mt-4">
      <li class="w-full" v-for="menu of showMenuList" :key="menu">
        <router-link :activeClass="'active'" :to="menu">
          {{ menu.slice(1) }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { routes } from '../routes'

const menuList = routes.map((item) => item.path)
const search = ref('')

const showMenuList = computed(() => {
  if (search.value === '') {
    return menuList
  } else {
    return menuList.filter((menu) => menu.includes(search.value))
  }
})
</script>

<style>
/*.bordered{*/
/*  border-left: 2px solid;*/
/*}*/
</style>
