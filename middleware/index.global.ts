import { notValidRoute } from '../utils/router'
import { useLoginStore } from '@/stores/login'
import { storeToRefs } from 'pinia'

export default defineNuxtRouteMiddleware((to, from) => {
  const loginStore = useLoginStore()
  const { isLoggedIn } = storeToRefs(loginStore)
  // if (process.client) {}
  
  const mustBeLoggedInRoutes = ['system-Search', 'system-Map']
  const cantBeLoggedInRoutes = ['Signin', 'Signup']

  const routeTo = to
  const routeFrom = from

  const isLoggedInStatus = isLoggedIn

  if (notValidRoute(to.name)) {
    return abortNavigation(
      createError({
        statusCode: 404,
        message: 'The route could not be found :(',
      })
    )
  } else if (isLoggedInStatus.value && cantBeLoggedInRoutes.includes(routeTo.name)) {
    return navigateTo('/system/search')
  } else if (!isLoggedInStatus.value && mustBeLoggedInRoutes.includes(routeTo.name)) {
    return navigateTo('/')
  }
})
