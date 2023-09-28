<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script setup>
// Envs
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl

// Head
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'About page description' }
  ],
  link: [{ rel: 'canonical', href: `${baseUrl}/about` }],
})
</script>

<style lang="scss" scoped>
</style>
