import axios from 'axios'
import { TOKEN } from 'constants/Auth'
import { setLoaderStatus } from 'redux/loader/actions'
import { toast } from 'react-toastify'
import { SET_SESSION, SET_ERROR } from './types'

export const setSession = status => ({
  type: SET_SESSION,
  payload: status,
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
        localStorage.setItem(TOKEN, data)
        dispatch(setSession(true))
      }
      toast('Bienvenido')
      dispatch(setLoaderStatus(false))
    } catch (error) {
      toast(error.message)
      console.log('error', error)
      console.log('STRINGIY', JSON.stringify(error))
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
    localStorage.removeItem(TOKEN)
  }
}
