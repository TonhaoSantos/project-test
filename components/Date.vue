<template>
  <Datepicker 
    v-model="date"
    :range="false"
    :flow="flow"
    :timezone="timezone"
    :enable-time-picker="false"
    :disabled="false"
    :max-date="new Date()"
    required
    text-input
    @closed="updateValue"
    @cleared="updateValue"
    @update:model-value="updateValue"
  />
  <p
    v-if="errors.length"
    class="mt-2 text-red-500 dark:text-red-400 text-sm"
  >
    {{ errors[0].message }}
  </p>
</template>

<script setup>
const props = defineProps({
  value: Date,
  errors: {
    type: Array,
    default: () => {
      return []
    }
  }
})

const emit = defineEmits(['change-value'])


const date = ref(null)
const timezone = ref('America/Sao_Paulo')
const flow = ref(['month', 'year', 'calendar'])

const updateValue = () => {
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
