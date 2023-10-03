<template>
  <div class="flex flex-col flex-wrap justify-center items-center w-full mb-10">
    <h1 class="text-5xl font-black">Signup</h1>

    <p class="mt-3 mb-10">To register, provide all the information below.</p>

    <UForm
      :validate="validate"
      :state="state"
      class="flex flex-col flex-wrap w-full sm:w-1/2 md:w-1/3 mb-10 gap-y-5"
    >
      
      <UFormGroup
        label="Birth date"
        name="birthDate"
        class="changed-input-color"
        required
      >
        <Date
          :value="state.birthDate"
          @change-value="changeDateValue"
        />
      </UFormGroup>

      <UFormGroup
        label="Full Name"
        name="fullname"
        class="changed-input-color"
        required
      >
        <UInput
          color="sky"
          variant="outline"
          size="sm"
          type="text"
          v-model="state.fullname"
          placeholder="Enter your name"
          class="changed-input-color"
        />
      </UFormGroup>

      <UFormGroup
        label="Document"
        name="document"
        class="changed-input-color"
        required
      >
        <UInput
          color="sky"
          variant="outline"
          size="sm"
          type="text"
          v-model="state.document"
          placeholder="Enter your document"
          class="mt-2 changed-input-color"
        />
      </UFormGroup>

      <div class="flex flex-row flex-no-wrap justify-center items-center space-x-4 w-full">
        <UFormGroup
          label="Pet species"
          name="specie"
          class="grow changed-input-color"
          required
        >
          <USelect
            color="sky"
            variant="outline"
            size="sm"
            v-model="state.specie"
            :options="petSpecies"
            class="mt-2 changed-input-color"
          />
        </UFormGroup>
        
        <UFormGroup
          label="Pet breed"
          name="breed"
          class="grow changed-input-color"
          required
        >
          <USelect
            color="sky"
            variant="outline"
            size="sm"
            v-model="state.breed"
            :options="petBreed[state.specie]"
            :disabled="!state.specie"
            class="mt-2 changed-input-color"
          />
        </UFormGroup>
      </div>
      
      <UFormGroup
        v-if="state.specie && state.breed === 'other'"
        label="Other"
        name="breedOther"
        class="changed-input-color"
        required
      >
        <UInput
          color="sky"
          variant="outline"
          size="sm"
          type="text"
          v-model="state.breedOther"
          placeholder="Enter your pet other breed"
          class="mt-2 changed-input-color"
        />
      </UFormGroup>

      
      <UFormGroup
        label="Monthly income"
        name="monthlyIncome"
        class="changed-input-color"
        required
      >
        <UInput
          color="sky"
          variant="outline"
          size="sm"
          type="number"
          v-model="state.monthlyIncome"
          min="1000.00"
          step="0.01"
          icon="i-tabler-currency-real-20-solid"
          placeholder="Enter your monthly income"
          class="flex mt-2 changed-input-color"
          :ui="{ icon: { trailing: { pointer: '' } } }"
        >
          <template #leading>
            <span class="text-sky-500 dark:sky-gray-400 text-md">R$</span>
          </template>
        </UInput>
      </UFormGroup>

      
      <UFormGroup
        label="Zip code"
        name="zipcode"
        class="changed-input-color"
        required
      >
        <UInput
          ref="el"
          color="sky"
          variant="outline"
          size="sm"
          type="text"
          v-imask="mask"
          v-model="state.zipcode"
          @accept="onAccept"
          @complete="onComplete"
          placeholder="Enter your zip code"
          class="mt-2 changed-input-color"
        />
      </UFormGroup>

      <UFormGroup
        v-if="hasAddress"
        label="Address"
        name="addrees"
        class="changed-input-color"
        required
      >
        <div class="flex flex-row flex-no-wrap justify-center items-center space-x-4 w-full">
          <UInput
            ref="el"
            color="sky"
            variant="outline"
            size="sm"
            type="text"
            v-model="state.address.logradouro"
            disabled
            placeholder="Enter your street"
            class="mt-2 grow changed-input-color"
          />
          <UInput
            ref="el"
            color="sky"
            variant="outline"
            size="sm"
            type="text"
            v-model="state.address.bairro"
            disabled
            placeholder="Enter your neighborhood"
            class="mt-2 grow changed-input-color"
          />
        </div>

        <div class="flex flex-row flex-no-wrap justify-center items-center space-x-4 w-full">
          <UInput
            ref="el"
            color="sky"
            variant="outline"
            size="sm"
            type="text"
            v-model="state.address.localidade"
            disabled
            placeholder="Enter your city"
            class="mt-2 grow changed-input-color"
          />
          <UInput
            ref="el"
            color="sky"
            variant="outline"
            size="sm"
            type="text"
            v-model="state.address.uf"
            disabled
            placeholder="Enter your state"
            class="mt-2 w-30 changed-input-color"
          />
        </div>
      </UFormGroup>
      
      <UButton
        label="Submit"
        color="sky"
        variant="solid"
        size="md"
        block
        class="mt-6"
        :disabled="validForm"
        @click="isOpen = true"
      />

      <p class="text-xs mt-1 text-right italic">All fields are required</p>
    </UForm>

    <UModal
      v-model="isOpen"
      prevent-close
      class="font-mono text-slate-200"
      :ui="{ background: 'bg-slate-200 dark:bg-slate-200' }"
    >
      <UCard
        :ui="{
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          background: 'bg-slate-700 dark:bg-slate-700',
          header: { padding: 'px-2 py-4' }
        }"
      >
        <template #header>
          DATA CONFIRMATION
        </template>
        
        <p class="font-bold text-xl mb-2 text-sky-500">The data provided was:</p>

        <ul>
          <li>Full name: {{ state.fullname }}</li>
          <li>Document: {{ state.document }}</li>
          <li>Pet Species: {{ state.specie }}</li>
          <li>Pet Breed: <span v-if="state.breedOther">{{ state.breedOther }}</span><span v-else>{{ state.breed }}</span></li>

          <li>Mnthly income: {{ state.monthlyIncome }}</li>
          <li>Address: {{ formatedAddress }}</li>
        </ul>

        <div class="flex flex-row justify-center items-center gap-x-4 mt-5 w-full">
          <UButton
            color="red"
            variant="solid"
            size="md"
            label="Cancel"
            :disabled="sending"
            @click="isOpen = false"
          />
          <UButton
            color="green"
            variant="solid"
            size="md"
            label="Confirm"
            :disabled="sending"
            @click="submit"
          />
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
import { validateWordCount } from '../utils/index'
import { isCPF, isCEP } from 'brazilian-values'

import { useLoginStore } from '@/stores/login'
const loginStore = useLoginStore()

const { getAddress } = useViaCep()

const { getEnvValue } = useEnvs()

// Head
useHead({
  title: 'Signin',
  meta: [
    { name: 'description', content: 'Signin page description' }
  ],
  link: [{ rel: 'canonical', href: `${getEnvValue('baseUrl')}/signin` }],
})

const state = reactive({
  birthDate: null,
  fullname: '',
  document: '',
  specie: '',
  breed: '',
  breedOther: '',
  monthlyIncome: 1000.00,
  zipcode: '',
  address: {
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  }
})
const viaCepInvalid = ref(false)
const hasAddress = ref(false)
const isOpen = ref(false)
const sending = ref(false)
const petSpecies = [
  { label: 'Enter your pet species', value: '' },
  { label: 'Cat', value: 'cat' },
  { label: 'Dog', value: 'dog' }
]
const petBreed = {
  cat: [
    { label: 'Enter your pet breed', value: '' },
    { label: 'Gato Doméstico de Pelo Curto', value: 'domesticShorthairCat' },
    { label: 'Maine Coon', value: 'maineCoon' },
    { label: 'Siamese', value: 'siamese' },
    { label: 'Persa', value: 'persa' },
    { label: 'Bengal', value: 'bengal' },
    { label: 'Other', value: 'other' }
  ],
  dog: [
    { label: 'Enter your pet breed', value: '' },
    { label: 'Labrador Retrieve', value: 'labradorRetrieve' },
    { label: 'Golden Retriever', value: 'goldenRetriever' },
    { label: 'Shih Tzu', value: 'shihTzu' },
    { label: 'Chow-chow', value: 'chowChow' },
    { label: 'Zwergspitz', value: 'Zwergspitz' },
    { label: 'Other', value: 'other' }
  ]
}


const validForm = computed(() => {
  return !!validate(state).length
})
const computedState = computed(() => {
  return Object.assign({}, state);
})
const formatedAddress = computed(() => {
  if (!hasAddress.value) {
    return ''
  } else {
    const currentAddress = state.address
    const newNeighborhood = (currentAddress.bairro) ? `, ${currentAddress.bairro}` : ''

    return `${currentAddress.logradouro}${newNeighborhood} - ${currentAddress.cep}, ${currentAddress.localidade} - ${currentAddress.uf}`
  }
})

const validate = (state) => {
  const errors = []
  if (!state.birthDate || !(state.birthDate instanceof Date && !isNaN(state.birthDate))) errors.push({ path: 'birthDate', message: 'Required' })
  if (!state.fullname || !validateWordCount(state.fullname, 2, 'gte')) errors.push({ path: 'fullname', message: 'Required' })
  if (!state.document || !isCPF(state.document)) errors.push({ path: 'document', message: 'Required' })
  if (!state.specie) errors.push({ path: 'specie', message: 'Required' })
  if (!state.breed) errors.push({ path: 'breed', message: 'Required' })
  if (state.breed && state.breed === 'other' && !state.breedOther) errors.push({ path: 'breedOther', message: 'Required' })
  if (!state.monthlyIncome || state.monthlyIncome < 1000.00) errors.push({ path: 'monthlyIncome', message: 'Required and greater then R$ 1000.00' })
  if (!state.zipcode) errors.push({ path: 'zipcode', message: 'Required' })
  if (!isCEP(state.zipcode) || viaCepInvalid.value) errors.push({ path: 'zipcode', message: 'zipcode is invalid' })
  return errors
}

const submit = async (event) => {
  sending.value = true

  setTimeout(() => {
    loginStore.changeLogged(true)
    sending.value = false
    isOpen.value = false
    navigateTo('/system/search')
  }, 2000)
}

const changeDateValue = (value) => {
  state.birthDate = value
}

watch(computedState, async (newValue, oldValue) => {
  if (newValue.specie !== oldValue.specie) {
    state.breed = ''
    state.breedOther = ''
  } else if (newValue.breed !== oldValue.breed) {
    state.breedOther = ''
  } else if (newValue.zipcode !== oldValue.zipcode && newValue.zipcode && isCEP(newValue.zipcode)) {
    const result = await getAddress(newValue.zipcode)

    if (objectHasKey(result.value, 'erro')) {
      viaCepInvalid.value = true
      hasAddress.value = false
      state.address = {
        cep: '',
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: ''
      }
    } else {
      viaCepInvalid.value = false
      hasAddress.value = true
      state.address = {
        cep: result.value.cep,
        logradouro: result.value.logradouro,
        bairro: result.value.bairro,
        localidade: result.value.localidade,
        uf: result.value.uf
      }
    }
  }
})
</script>

<style lang="scss" scoped>
</style>

