<template>
  <div>
    <h1>Home (Formulario)</h1>
    
    <h1>Lista</h1>

    <ClientOnly>
      <ChartMap v-if="!pending && listCountries" :list="mapList"/>

      <input
        v-if="!pending"
        v-model="searchText"
        type="text"
        ref="inputFilter"
        @input="handleInput"
        placeholder="Digite para filtrar"
      >
      <button @click="clearSearch" :disabled="!inputSearch">Clear</button>

      <!--<button @click="refresh">refresh</button>-->
      <div v-if="pending">
        <p>Loading ...</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="(country, index) in listCountries" :key="index">
            <a :href="country.map" target="_blank">{{ country.name }}</a> 
            - {{ country.capital }} [{{country.area}}/{{country.population}}] 
            <span v-if="inputSearch" @click="filterByLang(country.languages)">
              {{ country.languages }}
            </span>
          </li>
        </ul>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
const { getEnvValue } = useEnvs()
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

// Head
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Home page description' }
  ],
  link: [{ rel: 'canonical', href: `${getEnvValue('baseUrl')}/` }],
})

const getCountries = async () => {
  const result = await getByRegion('america')

  pending.value = result.pending.value
  listCountries.value = result.data.value
  listCountriesClone.value = result.data.value

  if (listCountriesClone.value) mountMap()
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
  }
}

const filteredData = () => {
  const text = searchText.value.toLowerCase()
  
  listCountries.value = listCountriesClone.value.filter(item => item.name.toLowerCase().includes(text))
}

const filterByLang = (lang) => {
  if (lang !== searchLanguage.value) {
    searchLanguage.value = lang
    const text = lang.toLowerCase() 
    listCountries.value = listCountriesClone.value.filter(item => item.languages.toLowerCase().includes(text))
  }
}

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
  searchText.value = ''
  searchLanguage.value = ''
}
</script>

<style lang="scss" scoped>
.map-link {
  font-size: 15px;
  color: blue;
  text-decoration: underline;

  &:hover {
    color: green;
    cursor: pointer;
  }
}
</style>
