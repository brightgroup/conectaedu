import axios from 'axios'
import { toast } from 'react-toastify'
import { TOKEN } from 'constants/Auth'
import { TOKEN_ERRORS } from 'constants/Error'
import { logout } from 'redux/auth/actions'
import { setLoaderStatus } from 'redux/loader/actions'
import { store } from 'redux/store'

const baseUrl = process.env.REACT_APP_API_URL

export const Axios = async (endpoint, data = {}, method = 'get', contentType = 'application/json') => {
  const url = `${baseUrl}/${endpoint}`
  const token = localStorage[TOKEN] || ''
  store.dispatch(setLoaderStatus(true))
  if (token) {
    if (method === 'get') {
      try {
        const res = await axios({
          method,
          url,
          headers: { authorization: `Bearer ${token}` },
          params: data,
        })
        store.dispatch(setLoaderStatus(false))
        return res?.data || res
      } catch (error) {
        if (TOKEN_ERRORS.includes(error.response.data)) {
          store.dispatch(setLoaderStatus(false))

          clearSession()
          toast('Token inválido')
        }
        store.dispatch(setLoaderStatus(false))
      }
    } else {
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

export const clearSession = () => {
  store.dispatch(logout())
  store.dispatch(setLoaderStatus(false))
  window.location.href = '/'
}

// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { TOKEN } from 'constants/Auth'
// import { TOKEN_ERRORS } from 'constants/Error'
// import { logout } from 'redux/auth/actions'
// import { setLoaderStatus } from 'redux/loader/actions'
// import { store } from 'redux/store'

// const baseUrl = process.env.REACT_APP_API_URL

// export const Axios = async (endpoint, data = {}, method = 'GET', contentType = 'application/json') => {
//   const url = `${baseUrl}/${endpoint}`
//   const token = localStorage[TOKEN] || ''
//   store.dispatch(setLoaderStatus(true))
//   if (token) {
//     if (method === 'GET') {
//       try {
//         const res = await axios(url, {
//           headers: {
//             authorization: `Bearer ${token}`,
//           },
//         })
//         store.dispatch(setLoaderStatus(false))
//         return res?.data || res
//       } catch (error) {
//         if (TOKEN_ERRORS.includes(error.response.data)) {
//           clearSession()
//           toast('Token inválido')
//         }
//         store.dispatch(setLoaderStatus(false))
//       }
//     } else {
//       try {
//         const res = await axios(url, {
//           method,
//           headers: {
//             'Content-Type': contentType,
//             authorization: `Bearer ${token}`,
//           },
//           data: contentType === 'application/json' ? JSON.stringify(data) : data,
//         })
//         store.dispatch(setLoaderStatus(false))
//         return res?.data || res
//       } catch (error) {
//         store.dispatch(setLoaderStatus(false))
//         return error
//       }
//     }
//   }
// }

// export const clearSession = () => {
//   store.dispatch(logout())
//   store.dispatch(setLoaderStatus(false))
//   window.location.href = '/'
// }
