import { URLS } from 'api/Urls'
import { Axios } from 'utils/Axios'
import { createFormData } from 'utils/FormData'
import { GET_INSTITUTIONS, SET_ERROR } from './types'

export const institutions = institutions => ({
  type: GET_INSTITUTIONS,
  payload: institutions,
})

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const createInstitution = institution => {
  return async dispatch => {
    try {
      const data = await Axios(
        URLS.postInstitution,
        createFormData(['name', 'address', 'municipality', 'brand'], institution),
        'post',
        'multipart/form-data'
      )
    } catch (error) {
      dispatch(setError)
    }
  }
}

export const updateInstitution = institution => {
  return async dispatch => {
    try {
      const data = await Axios(
        URLS.updateInstitution,
        createFormData(['name', 'address', 'municipality', 'brand'], institution),
        'post',
        'multipart/form-data'
      )
      dispatch(getInstitutions())
    } catch (error) {
      dispatch(setError)
    }
  }
}

export const getInstitutions = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getInstitutions)
      if (data) {
        dispatch(institutions(data))
      }
    } catch (error) {
      dispatch(setError)
    }
  }
}
