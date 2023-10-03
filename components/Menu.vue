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
import { useCountriesStore } from '@/stores/countries'
import { storeToRefs } from 'pinia'

const loginStore = useLoginStore()
const { isLoggedIn } = storeToRefs(loginStore)

const countriesStore = useCountriesStore()
const { hasCountries } = storeToRefs(countriesStore)

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
  console.log(hasCountries.value)
  if (menuType === 'site' && !isLoggedIn.value) {
    return siteMenu
  } else {
    if (hasCountries.value) return systemMenu

    const newList = []

    systemMenu.forEach(item => {
      if (item.name !== 'Map') newList.push(item)
    })

    return newList
  }
})

const logout = () => {
  loginStore.changeLogged(false)
  navigateTo('/')
}

</script>

<style>
</style>
