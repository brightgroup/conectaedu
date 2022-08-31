import axios from 'axios'
import { TOKEN } from 'constants/Auth'
import { setLoaderStatus } from 'redux/loader/actions'
import { store } from 'redux/store'

const baseUrl = process.env.REACT_APP_API_URL

export const Axios = async (endpoint, data = {}, method = 'GET', contentType = 'application/json') => {
  const url = `${baseUrl}/${endpoint}`
  const token = localStorage[TOKEN] || ''
  store.dispatch(setLoaderStatus(true))
  if (token) {
    if (method === 'GET') {
      try {
        const res = await axios(url, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        store.dispatch(setLoaderStatus(false))
        return res?.data || res
      } catch (error) {
        store.dispatch(setLoaderStatus(false))
      }
    } else {
      console.log('ELSE')

      try {
        const res = await axios(url, {
          method,
          headers: {
            'Content-Type': contentType,
            authorization: `Bearer ${token}`,
          },
          data: contentType === 'application/json' ? JSON.stringify(data) : data,
        })
        store.dispatch(setLoaderStatus(false))
        return res?.data || res
      } catch (error) {
        store.dispatch(setLoaderStatus(false))
        return error
      }
    }
  }
}
