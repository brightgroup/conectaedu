import React, { useState, useEffect, createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudents } from 'redux/students/actions'
import { sortArray } from 'utils/Array'

export const StudentContext = createContext()

const StudentProvider = ({ children }) => {
  const dispatch = useDispatch()
  const { students: studentList, student: notes } = useSelector(state => state.students)

  const [students, setStudents] = useState([])
  const [student, setStudent] = useState([])
  const [studentTable, setStudentTable] = useState([])
  const [studentsTable, setStudentsTable] = useState([])

  useEffect(() => setStudentsTable(studentList), [studentList])

  useEffect(() => setStudentTable(notes), [notes])

  useEffect(() => {
    dispatch(getStudents())
  }, [])

  const toggleSortStudents = (key, isAscending) => setStudentsTable(sortArray([...studentList], { key, isAscending }))

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
