<template>
  <NuxtLayout>
    <Body class="bg-slate-200 text-slate-700">
      <!--[if lt IE 10]>
        <p class="browserupgrade">Você esta usando um navegador <strong>desatualizado</strong>. Por favor, <a href="http://browsehappy.com/" target="_blank">atualize seu navegador</a> para melhorar a sua experiência.</p>
      <![endif]-->
    </Body>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Envs
const config = useRuntimeConfig()
const appName = config.public.appName

// Head
useHead({
  title: 'Default Title',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${appName}` : `${appName}`;
  }
})
</script>
