<template>
  <NuxtLink
    v-for="(menuItem, index) in menuList"
    :key="index"
    :to="menuItem.route"
    class="menu"
  >
  {{ menuItem.name }}
  </NuxtLink>
</template>

<script setup>
import menu from '../configs/menu'

const menuList = computed(() => {
  return menu
})
</script>

<style>
.menu {
  padding: 0 10px;
}
</style>
