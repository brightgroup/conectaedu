import { sortArray } from 'utils/Array'
import { firstLetterToUpperCase } from 'utils/Text'

export * from './Courses'
export * from './components'

export const getStudentNotes = (data = {}) => {
  const students = {}
  for (const key in data) {
    const items = data[key]
    items?.forEach(({ student, Notas: notes, lastname, Status }) => {
      const average = notes?.find(({ Itemname: average }) => average === 'Final')?.Nota || '-'
      const isLostSubject = Number(average.replace(',', '.')) && average < 3
      const [newItem, currentItem] = [{ notes, average, isLostSubject, lastname, Status }, students[student]]
      students[student] = { ...(currentItem && { ...currentItem }), [key]: newItem }
    })
  }
  return students
}

const SPECIALTIES = [
  'CONTABILIDAD',
  'FENOMENOLOGÍA_DE_LA_EMPRESA',
  'FUNDAMENTOS_DE_ADMINISTRACIÓN',
  'SISTEMAS_I',
  'MH_FUNDAMENTOS_DE_ADMINISTRACIÓN',
  'ARQUITECTURA_DE_COMPUTADORES',
  'PROYECTO_EMPRESARIAL',
  'SISTEMAS_II',
]

const createStudentArray = (students = {}) => {
  const result = []

  for (const key in students) {
    let average = 0

    const lostAverages = []
    const subjects = students[key]
    let lastname = ''

    for (const subject in subjects) {
      if (SPECIALTIES.every(item => !subject.includes(item))) {
        if (!lastname) lastname = subjects[subject]?.lastname
        average += Number(subjects[subject]?.average) || 0
        if (subjects[subject]?.isLostSubject) lostAverages.push(subject)
      }
    }

    const averageSubjects = Object.keys(subjects).filter(subject =>
      SPECIALTIES.every(item => !subject.includes(item))
    ).length

    result.push({
      ...subjects,
      student: key,
      average: (average / averageSubjects).toFixed(1),
      lostAverages,
      lastname,
      isRetired: Object.values(students[key])?.length ? !!Object.values(students[key])[0]?.Status || false : false,
    })
  }
  return result
}

const getStudentsRanking = (students = []) => {
  const orderedList = sortArray([...students], { key: 'average', isAscending: false }).map((item, index) => ({
    ...item,
    position: index + 1,
  }))
  return sortArray(orderedList, { key: 'lastname' })
}

export const getSubjectName = (name = '', course) => {
  if (course) {
    const courseName = course.toLowerCase().split('_').join(' ')
    const newName = firstLetterToUpperCase(name.toLowerCase().replace(`_${course}`, '').split('_').join(' '))
    return newName.includes(courseName) ? newName.replace(courseName, '') : newName
  }

  return name.toLowerCase()
}

export const getSubjects = (item = {}, table = '') => {
  const course = table.split('-')[1]?.split(' ').join('_')

  return Object.keys(item).map(item => ({ label: getSubjectName(item, course), name: item }))
}

export const getStudents = (data = {}) => {
  const students = createStudentArray(getStudentNotes(data))
  return getStudentsRanking(students)
}
