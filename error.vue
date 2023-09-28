<template>
  <div>
    <h1>Error page</h1>
    <pre>{{ currentError() }}</pre>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})

const { currentError } = usePagesErrors()
currentError()
</script>
