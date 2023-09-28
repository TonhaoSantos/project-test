/**
   * Funcao que retorna se um objeto possui uma quantidade de propriedades, ou seja, se é vazio
   *
   * @param obj - Um objeto que precisa ser verificado
	 * @default {}
*/
export const objectIsEmpty = (obj: any = {}) => {
  if (!itIsObject(obj)) return false
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

// Funcao que retorna se é um objeto
export const itIsObject = (obj: any) => {
  if (obj.constructor === Object) return true
  return false
}

/**
   * Funcao que retorna se um objeto possui uma key X
   *
   * @param obj - Um objeto que precisa ser verificado
	 * @default {}
   * @param key - A key que precisa ser encontrada
	 * @default ''
*/
export const objectHasKey = (obj: any = {}, key: string) => {
  return !!Object.prototype.hasOwnProperty.call(obj, key)
}
