<template>
  <div class="">
    <div class="flex flex-row flex-wrap justify-center items-center space-x-10 text-lg w-full h-16 font-mono bg-slate-700 text-slate-200">
      <Menu />
    </div>

    <div class="flex flex-row flex-wrap w-full pl-10 pr-10 pt-20 bg-slate-200 text-slate-700">
      <slot/>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
