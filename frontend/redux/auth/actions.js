import axios from 'axios'
import { toast } from 'react-toastify'
import { TOKEN } from 'constants/Auth'
import { setLoaderStatus } from 'redux/loader/actions'
import { SET_SESSION, SET_ERROR, SET_USER } from './types'
import { IS_ADMIN, USER } from 'constants/LocalStorage'

export const setSession = status => ({
  type: SET_SESSION,
  payload: status,
})

export const setUser = user => ({
  type: SET_USER,
  payload: user,
})

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const login = ({ email: user, password }) => {
  return async dispatch => {
    dispatch(setLoaderStatus(true))
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { user, password })
      if (data) {
        toast('Bienvenido')
        localStorage.setItem(TOKEN, data.token)
        localStorage.setItem(USER, user[0])
        localStorage.setItem(IS_ADMIN, JSON.stringify(data.user?.role === 'admin'))
        dispatch(setSession(true))
        dispatch(setUser(data.user))
      }
      dispatch(setLoaderStatus(false))
    } catch (error) {
      dispatch(setError(error))
      dispatch(setSession(false))
      dispatch(setLoaderStatus(false))
    }
    dispatch(setLoaderStatus(false))
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch(setSession(false))
    dispatch(setLoaderStatus(false))
    localStorage.removeItem(TOKEN)
  }
}
