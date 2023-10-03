# Project Test

**Finalization limit:** 7 consecutive days

**Objective:** The objective is to create a small web application that is capable of obtaining a list of data from a public API with country data (<a href="https://restcountries.com/" target="_black">https://restcountries.com/</a>) and showing it on screen, in addition to requesting a dummy registration for purposes of data validation.</p>

This application must be built using:

- Vue 3 + Nuxt 3
- Nuxt UI
- Other customizations, libs and external tools can be used at will. The following were used:
  - <a href="https://pinia.vuejs.org/" targe="_black">pinia</a>
  - <a href="https://www.npmjs.com/package/@vlalg-nimbus/magic-consolelog" targe="_black">magic-consolelog</a>
  - <a href="https://www.amcharts.com/" targe="_black">amCharts</a>
  - <a href="https://github.com/VitorLuizC/brazilian-values#isCPF" targe="_black">Brazilian Values</a>
  - <a href="https://vue3datepicker.com/" targe="_black">@vuepic/vue-datepicker</a>

Freedom to implement everything in the layout and design, but keep in mind that usability and presentation will be judged. Common sense is the keyword here!

## Features that must be implemented in the application:

- A registration form that performs the following validations and functionalities. When you finish filling out and click on the “submit” button, it must present the registered information on a new page or modal, properly organized:
  - **Date of birth - field in Brazilian date format:** maximum 65 years, minimum 18 years
  - **Full name:** at least 2 words
  - **Document (CPF):** mandatory and valid according to the official rule
  - **Pet species - mandatory select:** “dog” or “cat” options
  - **Pet breed - mandatory select:** 5 any “dog” breeds, and another 5 “cat” breeds. The field must list only suitable breeds depending on the value selected in the previous field. A sixth option in both lists must be called “other”
  - **Other:** if selected in the previous field, a mandatory text field should appear, otherwise it should not appear or be validated
  - **Monthly income - numbers only and with a prepend of `R$`:** minimum amount of R$1000.00
  - **ZIP code - mandatory and correctly formatted:** implement a ZIP code search engine to bring up the complete address of the supplied ZIP code, to be distributed in the fields below
    - **Street:** required
    - District:** required
    - City:** required
    - Status:** required, only 2 capital letters
  - If any information is incorrect or incomplete, the form must prevent “submit” and show the user what is missing and where.
- Consulting the API, a list only with the name of each country in America and its capital. When clicking on a country, it should open a tab with Google Maps centered on the country in question.
- A search function by country. The user must be able to type the name of a country in a text field, and the application must be able to find the country in question or any country with a similar name, showing its correct name and official languages on the screen
  - When clicking on one of the languages on the screen, presented by the previous function, the application must list the names of all countries that have the language in common
- The application needs a page where a graph is available showing the area and population of each country in a geographic region, for comparison purposes. The objective is to highlight the difference in each country's geographic area and population, in a way that is more visual than simply a couple of numbers on the screen.

## Test & Code

- Source code: [GitHub](https://github.com/TonhaoSantos/project-test)
- Site: [Vercel](https://project-test-psi-ashen.vercel.app/)

## Commands

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

#### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

#### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
