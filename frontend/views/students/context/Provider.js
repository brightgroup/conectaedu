import React, { useState, useEffect, createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompleteStudents, getStudents } from 'redux/students/actions'
import { sortArray } from 'utils/Array'

export const StudentContext = createContext()

const StudentProvider = ({ children }) => {
  const dispatch = useDispatch()
  const {
    students: studentList,
    student: notes,
    completeStudents,
    cohortStudent,
  } = useSelector(state => state.students)

  const [students, setStudents] = useState([])
  const [student, setStudent] = useState([])
  const [studentTable, setStudentTable] = useState([])
  const [studentsTable, setStudentsTable] = useState([])

  const setFullStudents = () => {
    const fullStudents = []
    completeStudents.map(cohort => fullStudents.push(cohort))
    return fullStudents
  }

  const setListStudents = () => {
    const fullStudents = []
    studentsTable?.map(cohort => fullStudents.push(cohort))
    return fullStudents
  }

  useEffect(() => setStudentsTable(cohortStudent), [cohortStudent])

  useEffect(() => setStudentsTable(completeStudents), [completeStudents])

  useEffect(() => setStudentTable(notes), [notes])

  useEffect(() => {
    dispatch(getStudents())
    dispatch(getCompleteStudents())
    setFullStudents()
  }, [])

  const toggleSortStudents = (key, isAscending) => setStudentsTable(sortArray(setListStudents(), { key, isAscending }))

  const toggleSortStudent = (key, isAscending = false) => setStudentTable(sortArray([...notes], { key, isAscending }))

  return (
    <StudentContext.Provider
      value={{
        student,
        students,
        studentTable,
        studentsTable,
        setStudent,
        setStudents,
        toggleSortStudent,
        toggleSortStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  )
}

export default StudentProvider
