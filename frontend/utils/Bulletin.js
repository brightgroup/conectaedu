import { AVERAGES, BASIC_SUBJECTS, PERIOD, SUBJECTS10 } from 'constants/Bulletin'
import { sortArray } from './Array'

const { toComparisonKey } = require('./Text')

export const getValue = (notes, { item, valueKey = 'Nota', decimals = 1 }) => {
  if (Array.isArray(notes) && notes.length) {
    const value = notes[0]?.Notas.find(note => toComparisonKey(note.Itemname) === toComparisonKey(item))?.[valueKey]
    return isNaN(Number(value)) ? value : (Number(value) !== 0 && Number(value).toFixed(decimals)) || '-'
  }
}

export const getCourseDescription = (course, key) => {
  if (course.length) return course[0]?.[key]
}

export const getInstitutionDescription = (institutions, key) => {
  return institutions[1]?.[key]
}

export const replacePerformance = text => {
  const word = text?.replace('Desempeño ', '')
  return word ? word[0].toUpperCase() + word.slice(1) : null
}

export const generalAverageperiod = (courses, studentReport, period) => {
  const notes = []
  courses.map(course => notes.push(parseFloat(getValue(studentReport[course], { item: PERIOD[period] }))))
  const average =
    notes.filter(item => Number(item)).reduce((previus, current) => (previus += current), 0) /
    notes.filter(item => Number(item)).length
  return average.toFixed(1)
}

export const coursesList = (courses = []) => {
  const newList = []
  const orderList = []
  const messySubjects = []
  const orderSubjects = []

  SUBJECTS10.map(item => orderSubjects.push(item.key))

  courses.map(course => {
    if (orderSubjects.includes(course.replace(/\d+/g, ''))) {
      newList.push({
        name: course,
        place: SUBJECTS10.find(item => item.key === course.replace(/\d+/g, '')).place,
      })
    } else {
      messySubjects.push(course)
    }
  })
  messySubjects.map((course, index) =>
    newList.push({
      name: course,
      place: orderSubjects.length + index,
    })
  )
  sortArray(newList, { key: 'place' }).map(({ name }) => orderList.push(name))
  return orderList
}

const getStudentNotes = (data = {}) => {
  const students = {}
  for (const key in data) {
    const items = data[key]
    items?.forEach(({ student, Notas: notes, lastname, Status }) => {
      const average = notes?.find(({ Itemname: average }) => average)?.Nota
      const isLostSubject = average < 3
      const [newItem, currentItem] = [{ notes, average, isLostSubject, lastname, Status }, students[student]]
      students[student] = { ...(currentItem && currentItem), [key]: newItem }
    })
  }
  return students
}

const averageByPeriod = (students = {}) => {
  const result = []

  for (const key in students) {
    let averageFirstPeriod = 0
    let averageSecondPeriod = 0
    let averageThirdPeriod = 0
    let averageFourthPeriod = 0
    let itemsFirstPeriod = 0
    let itemsSecondPeriod = 0
    let itemsThirdPeriod = 0
    let itemsFourthPeriod = 0
    const subjects = students[key]
    let lastname = ''

    for (const subject in subjects) {
      if (BASIC_SUBJECTS.includes(subject.replace(/[0-9]/g, ''))) {
        if (!lastname) lastname = subjects[subject]?.lastname
        const { notes } = subjects[subject]
        const firstPeriod =
          notes?.find(({ Itemname: name }) => toComparisonKey(name) === toComparisonKey('Notas Finales Primer Periodo'))
            ?.Nota || 0
        averageFirstPeriod += Number(firstPeriod)
        if (Number(firstPeriod) !== 0) itemsFirstPeriod += 1

        const secondPeriod =
          notes?.find(
            ({ Itemname: name }) => toComparisonKey(name) === toComparisonKey('Notas Finales Segundo periodo')
          )?.Nota || 0
        averageSecondPeriod += Number(secondPeriod)
        if (Number(secondPeriod) !== 0) itemsSecondPeriod += 1

        const thirdPeriod =
          notes?.find(({ Itemname: name }) => toComparisonKey(name) === toComparisonKey('Notas Finales Tercer Periodo'))
            ?.Nota || 0
        averageThirdPeriod += Number(thirdPeriod)
        if (Number(thirdPeriod) !== 0) itemsThirdPeriod += 1

        const fourthPeriod =
          notes?.find(({ Itemname: name }) => toComparisonKey(name) === toComparisonKey('Notas Finales Cuarto Periodo'))
            ?.Nota || 0
        averageFourthPeriod += Number(fourthPeriod)
        if (Number(fourthPeriod) !== 0) itemsFourthPeriod += 1
      }
    }
    result.push({
      ...subjects,
      firstPeriodAverage: (averageFirstPeriod / itemsFirstPeriod).toFixed(1),
      secondPeriodAverage: (averageSecondPeriod / itemsSecondPeriod).toFixed(1),
      thirdPeriodAverage: (averageThirdPeriod / itemsThirdPeriod).toFixed(1),
      fourthPeriodAverage: (averageFourthPeriod / itemsFourthPeriod).toFixed(1),
      student: key,
      lastname,
    })
  }
  return result
}

const getStudentsRanking = (students = [], period) => {
  const orderedList = sortArray([...students], { key: AVERAGES[period], isAscending: false }).map((item, index) => ({
    ...item,
    position: index + 1,
  }))
  return sortArray(orderedList, { key: 'lastname' })
}

export const getStudents = (data = {}, period) => {
  const students = averageByPeriod(getStudentNotes(data))
  return getStudentsRanking(students, period)
}
