<template>
  <div class="flex flex-col flex-wrap justify-center items-center w-full mb-10">
    <h1 class="text-5xl font-black">Signin</h1>

    <p class="mt-3 mb-10">To login, enter the details below.</p>

    <div class="flex flex-col flex-wrap w-full sm:w-1/2 md:w-1/3 mb-10">
      <UInput
        color="sky"
        variant="outline"
        size="sm"
        type="email"
        v-model="email"
        placeholder="Enter your E-Mail"
        class="changed-input-color"
      />
      
      <UInput
        color="sky"
        variant="outline"
        size="sm"
        v-model="password"
        class="mt-2 w-full changed-input-color"
        placeholder="Enter your Password"
      />

      <UButton
        label="ENTER"
        color="sky"
        variant="solid"
        size="md"
        block
        :disabled="!validForm"
        class="mt-6"
      />
      <p class="text-xs mt-1 text-right italic">All fields are required</p>
    </div>
  </div>
</template>

<script setup>
import { useLoginStore } from '@/stores/login'
const loginStore = useLoginStore()

const { getEnvValue } = useEnvs()

loginStore.changeLogged()

// Head
useHead({
  title: 'Signin',
  meta: [
    { name: 'description', content: 'Signin page description' }
  ],
  link: [{ rel: 'canonical', href: `${getEnvValue('baseUrl')}/signin` }],
})

const email = ref('')
const password = ref('')

const validForm = computed(() => {
  return !!(email.value && password.value)
})
</script>

<style lang="scss">
.changed-input-color {
  input {
    &.form-input {
      color: rgb(51 65 85 / var(--tw-text-opacity));
    }
  }
}
</style>
<style lang="scss" scoped>
</style>
