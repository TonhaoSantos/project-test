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

/**
 * 
*/
export const validateWordCount = (text: string = '', requiredWordCount: number = 1, type: string = 'eq'): boolean => {
  const validTypes = ['lt', 'lte', 'eq', 'gte', 'gt']

  if (!text || requiredWordCount <= 0 || !type || !validTypes.includes(type)) return false

  const currentText = text.trim()
  const splittedText = currentText.split(' ')
  const textLength = splittedText.length

  if (type === 'lt' && textLength < requiredWordCount) {
    return true
  } else if (type === 'lte' && textLength <= requiredWordCount) {
    return true
  } else if (type === 'eq' && textLength === requiredWordCount) {
    return true
  } else if (type === 'gte' && textLength >= requiredWordCount) {
    return true
  } else if (type === 'gt' && textLength > requiredWordCount) {
    return true
  } else {
    return false
  }
}

export const asyncMapPromise = async (itens = [], callback) => {
  if (!itens.length) return []
  return Promise.all(itens.map(async (item, index, array) => {
    const newItem = await callback(item, index, array)
    return newItem
  }))
}
