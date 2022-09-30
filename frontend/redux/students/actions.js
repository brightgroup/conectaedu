import { URLS } from 'api/Urls'
import { Axios } from 'utils/Axios'
import { getAveragesAndFaults, getStudentNotes, getSubjects } from 'views/courses'
import { getInitials } from 'views/students'
import {
  SET_STUDENTS,
  SET_STUDENT_DATA,
  SET_STUDENT_SCORES,
  SET_ERROR,
  SET_COMPLETE_STUDENTS,
  SET_STUDENT_COHORT,
  SET_STUDENT_USER,
  SET_OBSERVATIONS,
} from './types'

export const setStudents = courses => ({
  type: SET_STUDENTS,
  payload: courses,
})

export const setStudentData = information => ({
  type: SET_STUDENT_DATA,
  payload: information,
})

export const setCompleteStudents = students => ({
  type: SET_COMPLETE_STUDENTS,
  payload: students,
})

export const setStudentScores = scores => ({
  type: SET_STUDENT_SCORES,
  payload: scores,
})

export const setStudentsCohort = students => ({
  type: SET_STUDENT_COHORT,
  payload: students,
})

export const setStudentUser = student => ({
  type: SET_STUDENT_USER,
  payload: student,
})

export const setObservations = observations => ({
  type: SET_OBSERVATIONS,
  payload: observations,
})

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
})

export const getStudents = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getStudents)
      dispatch(setStudents(data ? getInitials(data) : []))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getCompleteStudents = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getCompleteStudents)
      dispatch(setCompleteStudents(data || []))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getStudentData = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getStudentInformation)
      dispatch(setStudentData(data || []))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getStudentScores = () => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getStudentScores)
      if (data) {
        const scores = getStudentNotes(data)
        dispatch(setStudentScores({ subjects: getSubjects(scores), data: getAveragesAndFaults(scores) }))
      }
    } catch (error) {
      dispatch(setStudentScores([]))
    }
  }
}

export const getStudentsCohort = cohort => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getStudentsByCohort(cohort))
      if (data) {
        dispatch(setStudentsCohort(data || []))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getStudentObservation = id => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getObservations, { student_id: id })
      dispatch(setObservations(data))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const sendStudentObservation = information => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getObservations, information, 'POST')
      if (data) dispatch(getStudentObservation(information.student_id))
      return !!data
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export const getStudentUser = id => {
  return async dispatch => {
    try {
      const { data } = await Axios(URLS.getStudentUser, { user_id: id })
      if (data) {
        dispatch(setStudentUser(data || []))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
