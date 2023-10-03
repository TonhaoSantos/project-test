<template>
  <div class="flex flex-col flex-wrap justify-left items-left w-full mb-10">
    <h1 class="text-5xl font-black mb-12">
      MAP
    </h1>

    <ClientOnly>
      <ChartMap v-if="hasCountries" :list="countries"/>
    </ClientOnly>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCountriesStore } from '@/stores/countries'
const countriesStore = useCountriesStore()

const { hasCountries, countries } = storeToRefs(countriesStore)

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
