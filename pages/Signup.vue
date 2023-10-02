<template>
  <div>
    <h1>Signup</h1>
  </div>
</template>

<script setup>
const { getEnvValue } = useEnvs()

// Head
useHead({
  title: 'Signup',
  meta: [
    { name: 'description', content: 'Signup page description' }
  ],
  link: [{ rel: 'canonical', href: `${getEnvValue('baseUrl')}/signup` }],
})
</script>

<style lang="scss" scoped>
</style>
