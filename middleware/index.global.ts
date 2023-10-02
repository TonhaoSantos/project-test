import { notValidRoute } from '../utils/router'

export default defineNuxtRouteMiddleware((to, from) => {
  // if (process.client) {}
  
  const mustBeLoggedInRoutes = ['system-Search', 'system-Map']

  const routeTo = to
  const routeFrom = from

  const isLoggedIn = false

  if (notValidRoute(to.name)) {
    console.log('aqui')
    return abortNavigation(
      createError({
        statusCode: 404,
        message: 'The route could not be found :(',
      })
    )
  } else if (!isLoggedIn && mustBeLoggedInRoutes.includes(routeTo.name)) {
    return navigateTo('/')
  }
})
