<template>
  <div>
    <h1>{{ getEnvValue('appName') }}</h1>

    <p><span>Finalization limit:</span> 7 consecutive days</p>
    <p><span>Objective:</span> The objective is to create a small web application that is capable of obtaining a list of data from a public API with country data (<a href="https://restcountries.com/" target="_black">https://restcountries.com/</a>) and showing it on screen, in addition to requesting a dummy registration for purposes of data validation.</p>

    <p>This application must be built using:</p>

    <ul>
      <li>Vue 3 + Nuxt 3</li>
      <li>Nuxt UI</li>
      <li>Other customizations, libs and external tools can be used at will. The following were used:
        <ul>
          <li><a href="https://www.npmjs.com/package/@vlalg-nimbus/magic-consolelog" targe="_black">magic-consolelog</a></li>
          <li><a href="https://www.amcharts.com/" targe="_black">amCharts</a></li>
        </ul>
      </li>
    </ul>

    <p>Freedom to implement everything in the layout and design, but keep in mind that usability and presentation will be judged. Common sense is the keyword here!</p>

    <p>Features that must be implemented in the application:</p>

    <ul>
      <li>A registration form that performs the following validations and functionalities. When you finish filling out and click on the “submit” button, it must present the registered information on a new page or modal, properly organized:
        <ul>
          <li><strong>Date of birth - field in Brazilian date format:</strong> maximum 65 years, minimum 18 years</li>
          <li><strong>Full name:</strong> at least 2 words</li>
          <li><strong>Document (CPF):</strong> mandatory and valid according to the official rule</li>
          <li><strong>Pet species - mandatory select:</strong> “dog” or “cat” options</li>
          <li><strong>Pet breed - mandatory select:</strong> 5 any “dog” breeds, and another 5 “cat” breeds. The field must list only suitable breeds depending on the value selected in the previous field. A sixth option in both lists must be called “other”</li>
          <li><strong>Other:</strong> if selected in the previous field, a mandatory text field should appear, otherwise it should not appear or be validated</li>
          <li><strong>Monthly income - numbers only and with a prepend of “R$”:</strong> minimum amount of R$1000.00</li>
          <li><strong>ZIP code - mandatory and correctly formatted:</strong> implement a ZIP code search engine to bring up the complete address of the supplied ZIP code, to be distributed in the fields below
            <ul>
              <li><strong>Street:</strong> required</li>
              <li><strong>District:</strong> required</li>
              <li><strong>City:</strong> required</li>
              <li><strong>Status:</strong> required, only 2 capital letters</li>
            </ul>
          </li>
          <li>If any information is incorrect or incomplete, the form must prevent “submit” and show the user what is missing and where.</li>
        </ul>
      </li>
      <li>Consulting the API, a list only with the name of each country in America and its capital. When clicking on a country, it should open a tab with Google Maps centered on the country in question.</li>
      <li>A search function by country. The user must be able to type the name of a country in a text field, and the application must be able to find the country in question or any country with a similar name, showing its correct name and official languages on the screen
        <ul>
          <li>When clicking on one of the languages on the screen, presented by the previous function, the application must list the names of all countries that have the language in common</li>
        </ul>
      </li>
      <li>The application needs a page where a graph is available showing the area and population of each country in a geographic region, for comparison purposes. The objective is to highlight the difference in each country's geographic area and population, in a way that is more visual than simply a couple of numbers on the screen.</li>
    </ul>

    <p>Source code: <a href="https://github.com/TonhaoSantos/project-test">GitHub</a></p>
    <p>Site: <a href="https://project-test-psi-ashen.vercel.app/">Vercel</a></p>
  </div>
</template>

<script setup>
const { getEnvValue } = useEnvs()

// Head
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Home page description' }
  ],
  link: [{ rel: 'canonical', href: `${getEnvValue('baseUrl')}/` }],
})
</script>

<style lang="scss" scoped>
.menu {
  padding: 0 10px;
}
</style>
