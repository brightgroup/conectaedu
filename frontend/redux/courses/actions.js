import { URLS } from 'api/Urls'
import { Axios } from 'utils/Axios'
import { getAveragesAndFaults, getStudentNotes, getSubjects } from 'views/courses'
import { SET_COURSES, SET_SHEETS } from './types'

export const setCourses = cohorts => ({
  type: SET_COURSES,
  payload: cohorts,
})

export const setSheets = sheets => ({
  type: SET_SHEETS,
  payload: sheets,
})

export const getCourses = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getCourses)
      if (data) dispatch(setCourses(data))
    } catch (error) {
      dispatch(setCourses([]))
    }
  }
}

export const getSheets = (course = 64) => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getSheets, { cohort: course })
      if (data) dispatch(setSheets(data))
    } catch (error) {
      dispatch(setSheets())
    }
  }
}
