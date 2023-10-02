<template>
  <div>
    <h1>Signup</h1>
    <UCard ui="bg-white dark:bg-slate-900" />
  </div>
</template>

<script setup>
import { validateWordCount } from '../utils/index'

const { getEnvValue } = useEnvs()

// Head
useHead({
  title: 'Signup',
  meta: [
    { name: 'description', content: 'Signup page description' }
  ],
  link: [{ rel: 'canonical', href: `${getEnvValue('baseUrl')}/signup` }],
})

console.log(validateWordCount('asdaasdasdasdasda asda', 3, 'lt'))
console.log(validateWordCount('asdaasdasdasdasda asd', 2, 'lte'))
console.log(validateWordCount('asdaasdasdasdasda', 1, 'eq'))
console.log(validateWordCount('asdaasdasdasdasda asda', 2, 'gte'))
console.log(validateWordCount('asdaasdasdasdasda as asd', 2, 'gt'))
</script>

<style lang="scss" scoped>
</style>
