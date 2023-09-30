<template>
  <NuxtLayout>
    <Body>
      <!--[if lt IE 10]>
        <p class="browserupgrade">Você esta usando um navegador <strong>desatualizado</strong>. Por favor, <a href="http://browsehappy.com/" target="_blank">atualize seu navegador</a> para melhorar a sua experiência.</p>
      <![endif]-->
    </Body>

    <Menu />
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
