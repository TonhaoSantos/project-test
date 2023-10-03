<template>
  <div class="flex flex-col flex-wrap justify-left items-left w-full mb-10">
    <h1 class="text-5xl font-black mb-12">
      Search
      <span v-if="hasCountries" class="text-sm">({{ listCountries.length }} items)</span>
    </h1>

    <ClientOnly>
      <div class="flex flex-row flex-no-wrap justify-left items-start w-full mb-4">
        <UInput
          v-if="!pending"
          ref="inputFilter"
          color="sky"
          variant="outline"
          size="sm"
          type="text"
          v-model="searchText"
          placeholder="Type the country name to filter"
          @input="handleInput"
          class="w-1/3 changed-input-color"
        />

        <UButton
          label="Clear"
          color="sky"
          variant="solid"
          size="sm"
          class="w-13 ml-2"
          :disabled="disabledFilterButton"
          @click="clearSearch"
        />
      </div>

      <UTable
        :columns="tableColumns"
        :rows="listCountries"
        :loading="pending"
        :ui="{
          th: { size: 'text-md', color: 'bg-slate-700 text-slate-200 dark:text-slate-200', padding: 'px-3 py-1.5' },
          td: { padding: 'px-3 py-1.5', color: 'text-slate-700 dark:text-slate-700' }
        }"
      >
        <template #loading-state>
          <div class="flex items-center justify-center h-32">
            <i class="loader --6" />
          </div>
        </template>

        <template #empty-state>
          <span class="italic text-md mt-4">No one here!</span>
        </template>

        <template #languages-data="{ row }">
          <span @click="filterByLang(row.languages)" class="text-blue-600 hover:text-sky-500 languages">{{ row.languages }}</span>
        </template>
      </UTable>
    </ClientOnly>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCountriesStore } from '@/stores/countries'
const countriesStore = useCountriesStore()

const { getEnvValue } = useEnvs()
const { hasCountries } = storeToRefs(countriesStore)
const { getByRegion } = useRestCountries()


const searchText = ref('')
const searchLanguage = ref('')
const debounceTimeout = ref(null)
const inputSearch = ref(false)
const languageSearch = ref(false)

const listCountries = ref([])
const listCountriesClone = ref([])
const pending = ref(true)
const mapList = ref([])
const filtered = ref(false)

// Head
useHead({
  title: 'Search',
  meta: [
    { name: 'description', content: 'Search page description' }
  ],
  link: [{ rel: 'canonical', href: `${getEnvValue('baseUrl')}/search` }],
})

const tableColumns = [
  {
    key: 'id',
    label: 'ID'
  },
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'capital',
    label: 'Capital'
  },
  {
    key: 'languages',
    label: 'Languages'
  }
]

const getCountries = async () => {
  const result = await getByRegion('america')

  pending.value = result.pending.value
  listCountries.value = result.data.value
  listCountriesClone.value = result.data.value

  if (listCountriesClone.value) {
    mountMap()
  }
}

getCountries()

const mountMap = () => {
  const items = listCountriesClone.value

  mapList.value = [
    {
      "name": "North America",
      "data": []
    },
    {
      "name": "South America",
      "data": []
    }
  ]

  if (items.length) {
    items.forEach(country => {
      const newItem = { ...country, id: country.countryCode.toUpperCase() }

      if (country.continents === "North America") {
        mapList.value[0].data.push(newItem)
      } else {
        mapList.value[1].data.push(newItem)
      }
    })

    countriesStore.setCountries(mapList.value)
  }
}

const filteredData = () => {
  const text = searchText.value.toLowerCase()
  
  listCountries.value = listCountriesClone.value.filter(item => item.name.toLowerCase().includes(text))
}

const filterByLang = (lang) => {
  if (lang !== searchLanguage.value) {
    filtered.value = true
    searchLanguage.value = lang
    const text = lang.toLowerCase() 
    listCountries.value = listCountriesClone.value.filter(item => item.languages.toLowerCase().includes(text))
  }
}

const disabledFilterButton = computed(() => {
  if (!inputSearch.value && !filtered.value) {
    return true
  } else if (filtered.value) {
    return false
  }
})

const handleInput = (debounceDelay = 300) => {
  clearTimeout(debounceTimeout.value)

  if (!searchText.value) {
    clearSearch()
  } else {
    inputSearch.value = true

    // Debounce
    debounceTimeout.value = setTimeout(() => {
      filteredData()
    }, debounceDelay)
  }
}

const clearSearch = () => {
  listCountries.value = listCountriesClone.value
  inputSearch.value = false
  languageSearch.value = false
  filtered.value = false
  searchText.value = ''
  searchLanguage.value = ''
}
</script>

<style lang="scss" scoped>
.languages {
  &:hover {
    cursor: pointer;
  }
}
</style>
