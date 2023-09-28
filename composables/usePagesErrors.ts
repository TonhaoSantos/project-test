export const usePagesErrors = () => {
  /**
   * Create a custom Error with Nuxt Handler Error
   * @param {number} statusCode - Status code number
   * @param {string} statusMessage - Message
   * @param {boolean} fatal - True is recommended for almost all cases
   * @returns {object} Error
   */
  const customError = (statusCode: number, statusMessage: string, fatal: boolean) => {
    throw createError({
      statusCode,
      statusMessage,
      fatal
    })
  }

  /**
   * Clean and redirect later
   * @param {string} page - Page name
   * @returns Redirect to page
   */
  const byError = (page: string) => {
    return clearError({ redirect: page })
  }

  /**
   * Get current error
   * @returns {object} Error object
   */
  const currentError = () => {
    const error = useError()

    return error.value
  }

  return {
    customError,
    byError,
    currentError
  }
}
