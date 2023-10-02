import { systemMenu, siteMenu } from '../configs/menu'

const routerList = [...systemMenu, ...siteMenu].map(item => item.routeName)

export const notValidRoute = (routeName: string = ''): boolean => {
  return (!routeName && !routerList.includes(routeName))
}
