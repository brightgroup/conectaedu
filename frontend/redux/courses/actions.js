import { URLS } from 'api/Urls'
import { setLoaderStatus } from 'redux/loader/actions'
import { Axios } from 'utils/Axios'
import { removeAccents } from 'utils/Text'
import { GET_COURSE, GET_NOTES_COURSE, SET_COURSES, SET_ERROR, SET_FULL_DATA, SET_SHEETS } from './types'

export const setCourses = cohorts => ({
  type: SET_COURSES,
  payload: cohorts,
})

export const setSheets = sheets => ({
  type: SET_SHEETS,
  payload: sheets,
})

export const setFullData = data => ({
  type: SET_FULL_DATA,
  payload: data,
})

export const setcourse = course => ({
  type: GET_COURSE,
  payload: course,
})

export const setcourseNotes = notesCourse => ({
  type: GET_NOTES_COURSE,
  payload: notesCourse,
})

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getCourses = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getCourses)
      if (data) dispatch(setCourses(data))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getSheets = (course = 64) => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getSheets, { cohort: course })
      if (data) dispatch(setSheets(data))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getFullData = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getFullData)
      if (data) dispatch(setFullData(formatData(data)))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getCourse = cohort => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getCourse(cohort))
      if (data) dispatch(setcourse(data))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

const formatData = data => {
  const newData = {}
  for (const key in data) newData[removeAccents(key)] = data[key]
  return newData
}

export const getNotesCourse = (student, cohort) => {
  return async dispatch => {
    dispatch(setLoaderStatus(true))
    try {
      await Promise.all(student.map(item => Axios(URLS.getReport, { cohort, student: item })))
        .then(res => {
          const data = res.map(item => item.data)
          dispatch(setcourseNotes(data.some(item => item) ? data : []))
        })
        .catch(error => dispatch(setError(error)))
    } catch (error) {
      dispatch(setError())
    }
    dispatch(setLoaderStatus(false))
  }
}
