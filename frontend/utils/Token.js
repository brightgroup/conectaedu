import jwtDecode from 'jwt-decode'
import { TOKEN } from 'constants/Auth'

export const isValidToken = (defualtToken = '') => {
  const token = defualtToken || localStorage[TOKEN]

  if (token) {
    const { exp: expirationDate = 0 } = jwtDecode(token)

    const currentDate = new Date().getTime() / 1000

    return !(currentDate > expirationDate)
  }

  return false
}
