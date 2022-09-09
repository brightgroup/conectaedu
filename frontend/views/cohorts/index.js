import { sortArray } from 'utils/Array'
import { firstLetterToUpperCase } from 'utils/Text'

export * from './Cohorts'
export * from './components'

export const getTitle = table => {
  if (table) return table.includes('-') ? 'Resumen de estudiantes' : table[0].toUpperCase() + table.slice(1)

  return 'Cohortes'
}

export const getStudentNotes = scores => {
  const data = {}
  scores?.forEach(item => {
    const student = item[0]?.student
    if (student) data[student] = data[student] ? [...data[student], ...item] : item
  })
  return data
}

export const getStudentSubjects = data => {
  const result = []

  for (const student in data) {
    const studentItems = data[student]
    const currentItem = {}
    studentItems.forEach(item => {
      const course = firstLetterToUpperCase(item.curso)
      currentItem[course] = currentItem[course] ? [...currentItem[course], item] : [item]
    })
    result.push({
      student: firstLetterToUpperCase(student),
      ...currentItem,
    })
  }
  return result
}

export const getAveragesAndFaults = data => sortArray(getStudentSubjects(data), { key: 'student', isAscending: true })

export const getSubjects = data => {
  const [studentKey] = Object.keys(data)
  const subjects = Array.from(new Set(data[studentKey]?.map(item => firstLetterToUpperCase(item.curso))))
  return subjects?.length ? subjects : []
}
