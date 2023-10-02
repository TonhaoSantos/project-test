<template>
  <div>
    <h1>Signin</h1>
  </div>
</template>

<script setup>
import { useLoginStore } from '@/stores/login'
const loginStore = useLoginStore()

const { getEnvValue } = useEnvs()

loginStore.changeLogged()
console.log(loginStore.isLoggedIn)

// Head
useHead({
  title: 'Signin',
  meta: [
    { name: 'description', content: 'Signin page description' }
  ],
  link: [{ rel: 'canonical', href: `${getEnvValue('baseUrl')}/signin` }],
})
</script>

<style lang="scss" scoped>
</style>
