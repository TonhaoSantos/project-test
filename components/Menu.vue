<template>
  <div class="flex gap-x-7">
    <NuxtLink
      v-for="(menuItem, index) in menuList"
      :key="index"
      :to="menuItem.route"
      class="hover:text-sky-500"
    >
    {{ menuItem.name }}
    </NuxtLink>

    <UButton
      v-if="isLoggedIn"
      color="sky"
      variant="solid"
      size="xs"
      label="Logout"
      class="ml-4"
      @click="logout"
    />
  </div>
</template>

<script setup>
import { systemMenu, siteMenu } from '../configs/menu'

import { useLoginStore } from '@/stores/login'
import { storeToRefs } from 'pinia'
const loginStore = useLoginStore()
const { isLoggedIn } = storeToRefs(loginStore)

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
  return (menuType === 'site' && !isLoggedIn.value) ? siteMenu : systemMenu
})

const logout = () => {
  loginStore.changeLogged(false)
  navigateTo('/')
}

</script>

<style>
</style>
