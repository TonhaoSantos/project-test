<template>
  <Datepicker 
    v-model="date"
    :range="false"
    :flow="flow"
    :timezone="timezone"
    :enable-time-picker="false"
    :disabled="false"
    required
    text-input
    @closed="showError"
    @cleared="showError"
    @update:model-value="updateValue"
  />
  <p
    v-if="hasError"
    class="mt-2 text-red-500 dark:text-red-400 text-sm"
  >
    Required
  </p>
</template>

<script setup>
const props = defineProps({
  value: Date
})

const emit = defineEmits(['change-value'])



const date = ref(null)
const timezone = ref('America/Sao_Paulo')
const flow = ref(['month', 'year', 'calendar'])

const hasError = ref(false)

const updateValue = (value) => {
  showError()
}
const showError = () => {
  if (!date.value || !(date.value instanceof Date && !isNaN(date.value))) {
    hasError.value = true
  } else {
    hasError.value = false
  }

  emit('change-value', date.value)
}
</script>

<style lang="scss" scoped>
.dp__theme_dark,
.dp__theme_light {
  --dp-background-color: transparent;
  --dp-border-color: rgb(56 189 248 / 1);
  color: rgb(51 65 85/1);
}
</style>
