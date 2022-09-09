import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getCohorts } from 'redux/cohorts/actions'
import { TableTitle } from 'components/table-title'
import { CohortsTable, StudentsTable, CoursesTable, SummaryTable, getTitle } from '.'

export const Cohorts = () => {
  const dispatch = useDispatch()

  const {
    query: { tabla: table = '' },
  } = useRouter()

  const {
    cohorts: { cohorts, students, courses },
    students: { scores },
  } = useSelector(state => state)

  const [cohortsTable, setCohortsTable] = useState([])
  const [subjects, setSubjects] = useState([])
  const [averagesTable, setAveragesTable] = useState([])

  useEffect(() => {
    if (!table) dispatch(getCohorts())
  }, [])

  useEffect(() => formatData(), [scores])

  const currentTable = {
    cursos: <CoursesTable initialData={courses} />,
    estudiantes: <StudentsTable initialData={students} />,
  }

  const formatData = () => {
    const { subjects, data } = scores
    setSubjects(subjects)
    setAveragesTable(data)
  }

  return (
    <div className="cohorts m-auto w-max mt-12">
      <TableTitle title={getTitle(table)} includesArrow={!!table} backRoute="/cohortes" />
      {table ? (
        currentTable[table] || <SummaryTable subjects={subjects} data={averagesTable} />
      ) : (
        <CohortsTable data={cohortsTable} setData={setCohortsTable} initialData={cohorts} />
      )}
    </div>
  )
}

// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
// import { useDispatch, useSelector } from 'react-redux'
// import { getCohorts } from 'redux/cohorts/actions'
// import { TableTitle } from 'components/table-title'
// import { firstLetterToUpperCase } from 'utils/Text'

// import {
//   CohortsTable,
//   StudentsTable,
//   CoursesTable,
//   SummaryTable,
//   getTitle,
//   getAveragesAndFaults,
//   getSubjects,
//   getStudentNotes,
// } from '.'

// export const Cohorts = () => {
//   const dispatch = useDispatch()

//   const {
//     query: { tabla: table = '' },
//   } = useRouter()

//   const {
//     cohorts: { cohorts, students, courses },
//     students: { scores },
//   } = useSelector(state => state)

//   const [cohortsTable, setCohortsTable] = useState([])
//   const [subjects, setSubjects] = useState([])
//   const [averagesTable, setAveragesTable] = useState()

//   useEffect(() => {
//     // if (!table) dispatch(getCohorts())
//     formatData()
//   }, [])

//   const currentTable = {
//     cursos: <CoursesTable initialData={courses} />,
//     estudiantes: <StudentsTable initialData={students} />,
//   }

//   const getStudentNotes = scores => {
//     const data = {}
//     scores?.forEach(item => {
//       const student = item[0]?.student
//       if (student) data[student] = data[student] ? [...data[student], ...item] : item
//     })
//     return data
//   }

//   const getStudentSubjects = data => {
//     const result = []

//     for (const student in data) {
//       const studentItems = data[student]
//       const currentItem = {}
//       studentItems.forEach(item => {
//         const course = firstLetterToUpperCase(item.curso)
//         currentItem[course] = currentItem[course] ? [...currentItem[course], item] : [item]
//       })
//       result.push({
//         student: firstLetterToUpperCase(student),
//         ...currentItem,
//       })
//     }
//     return result
//   }

//   const getAveragesAndFaults = data => {
//     const studentsWithSubjects = getStudentSubjects(data)

//     const averagesAndFaults = studentsWithSubjects?.map(item => {
//       const { student } = item
//       const subjectResume = { student, averages: {}, faults: {} }
//       for (const subject in item) {
//         const scores = Array.isArray(item[subject]) ? item[subject] : []
//         if (!scores?.length) continue
//         const average = scores?.find(item => item.item.toLowerCase() === 'final')?.grade
//         const faults = scores?.find(item => item.item.toLowerCase().includes('fallas'))?.grade
//         subjectResume.averages[subject] = average
//         if (faults) subjectResume.faults[subject] = faults
//       }
//       return subjectResume
//     })

//     return studentsWithSubjects
//   }

//   const getSubjects = data => {
//     const [studentKey] = Object.keys(data)
//     const subjects = Array.from(new Set(data[studentKey]?.map(item => firstLetterToUpperCase(item.curso))))
//     return subjects?.length ? subjects : []
//   }

//   const formatData = () => {
//     const data = getStudentNotes(scores)
//     setSubjects(getSubjects(data))
//     setAveragesTable(getAveragesAndFaults(data))
//   }

//   return (
//     <div className="cohorts m-auto w-max mt-12">
//       <TableTitle title={getTitle(table)} includesArrow={!!table} backRoute="/cohortes" />
//       {table ? (
//         currentTable[table] || <SummaryTable subjects={subjects} data={averagesTable} />
//       ) : (
//         <CohortsTable data={cohortsTable} setData={setCohortsTable} initialData={cohorts} />
//       )}
//     </div>
//   )
// }
