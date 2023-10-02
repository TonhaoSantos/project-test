<template>
  <div>
    <h1>Map</h1>
  </div>
</template>

<script setup>
const { getEnvValue } = useEnvs()

// Head
useHead({
  title: 'Map',
  meta: [
    { name: 'description', content: 'Map page description' }
  ],
  link: [{ rel: 'canonical', href: `${getEnvValue('baseUrl')}/map` }],
})
</script>

<style lang="scss" scoped>
</style>
