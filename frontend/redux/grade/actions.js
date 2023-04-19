import { URLS } from 'api/Urls'
import { Axios } from 'utils/Axios'
import { GET_COURSES_COHORT, GET_REPORT_FOLIO_MORNING, GET_TOTAL_FOLIOS, SET_COHORT, SET_ERROR } from './types'

export const setCohorts = cohorts => ({
  type: SET_COHORT,
  payload: cohorts,
})

export const setCoursesByCohort = courses => ({
  type: GET_COURSES_COHORT,
  payload: courses,
})

export const setFolios = courses => ({
  type: GET_REPORT_FOLIO_MORNING,
  payload: courses,
})

export const setTotalFolios = courses => ({
  type: GET_TOTAL_FOLIOS,
  payload: courses,
})

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getCohorts = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getCohort)
      dispatch(setCohorts(data || []))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getCoursesCohort = id => {
  return async dispatch => {
    try {
      if (id === 'reset') {
        dispatch(setCoursesByCohort([]))
      }
      const { data } = await Axios(URLS.getCoursesByCohort(id))
      dispatch(setCoursesByCohort(data || []))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getFoliosMorning = (information = '') => {
  return async dispatch => {
    try {
      const data = await Axios(URLS.getAllFolios, information)
      dispatch(setFolios(data || {}))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const clearFolios = () => {
  return async dispatch => {
    try {
      dispatch(setFolios({}))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getTotalFolios = () => {
  return async dispatch => {
    try {
      await Promise.all([
        Axios(URLS.getAllFolios, { colegio: 'LIBERTADOR', jornada: 'MANANA', secundaria: true }),
        Axios(URLS.getAllFolios, { colegio: 'LIBERTADOR', jornada: 'TARDE' }),
        Axios(URLS.getAllFolios, { colegio: 'RONDON', jornada: 'MANANA' }),
      ])
        .then(res => {
          const data = { ...res[0], ...res[1], ...res[2] }
          dispatch(setTotalFolios(data))
        })
        .catch(err => new Error(err))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const updateCourseTime = (information, id) => {
  return async dispatch => {
    try {
      const { status } = await Axios(URLS.updateCourse, information, 'POST')
      if (status) dispatch(getCoursesCohort(id))
      return !!data
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
