<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script setup>
// Envs
const { public: envsConfigPublic } = useRuntimeConfig()
const { baseUrl } = envsConfigPublic

// Head
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Home page description' }
  ],
  link: [{ rel: 'canonical', href: `${baseUrl}/` }],
})
</script>

<style lang="scss" scoped>
</style>
