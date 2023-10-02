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
import { systemMenu, siteMenu } from '../configs/menu'

const { menuType } = defineProps({
  menuType: {
    type: String,
    default: 'site',
    validator(value) {
        return ['system', 'site'].includes(value)
    }
  }
})

const menuList = computed(() => {
  return (menuType === 'site') ? siteMenu : systemMenu
})
</script>

<style>
.menu {
  padding: 0 10px;
}
</style>
