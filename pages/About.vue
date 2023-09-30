<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script setup>
const { getEnvValue } = useEnvs()

// Head
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'About page description' }
  ],
  link: [{ rel: 'canonical', href: `${getEnvValue('baseUrl')}/about` }],
})
</script>

<style lang="scss" scoped>
</style>
