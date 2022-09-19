import { sortArray } from 'utils/Array'
import { firstLetterToUpperCase } from 'utils/Text'

export * from './Courses'
export * from './components'

const getStudentNotes = (data = {}) => {
  const students = {}

  for (const key in data) {
    const items = data[key]
    items?.forEach(({ student, Notas: notes, lastname }) => {
      const average = notes?.find(({ Itemname: average }) => average)?.Nota
      const isLostSubject = average < 3
      const [newItem, currentItem] = [{ notes, average, isLostSubject, lastname }, students[student]]
      students[student] = { ...(currentItem && { ...currentItem }), [key]: newItem }
    })
  }

  return students
}

const createStudentArray = (students = {}) => {
  const result = []
  for (const key in students) {
    let average = 0
    const lostAverages = []
    const subjects = students[key]
    let lastname = ''
    for (const subject in subjects) {
      if (!lastname) lastname = subjects[subject]?.lastname
      average += Number(subjects[subject]?.average) || 0
      if (subjects[subject]?.isLostSubject) lostAverages.push(subject)
    }
    result.push({
      ...subjects,
      student: key,
      average: (average / Object.keys(subjects).length).toFixed(2),
      lostAverages,
      lastname,
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
