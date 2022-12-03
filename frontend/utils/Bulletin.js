import { AVERAGES, BASIC_SUBJECTS, ITEMS_BEHAVITOR, PERIOD, SUBJECTS10 } from 'constants/Bulletin'
import { sortArray } from './Array'
import { toComparisonKey } from './Text'

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
  courses.map((course, index) => {
    if (course !== 'COMPORTAMIENTO') {
      if (Array.isArray(studentReport[course])) {
        notes.push(parseFloat(getValue(studentReport[course], { item: PERIOD[period] })))
      }
    }
  })
  const average =
    notes.filter(item => Number(item)).reduce((previus, current) => (previus += current), 0) / notes.length
  return average.toFixed(4)
}

const deleteWord = item => {
  if (item.replace(/\d+/g, '').includes('QUINTO_LIBERTADOR')) {
    return item.replace('_QUINTO_LIBERTADOR_MAÑANA', '')
  }
}

// const sedes = ['_QUINTO_LIBERTADOR_MAÑANA', '_QUINTO_LIBERTADOR_TARDE', '_QUINTO_RONDON_MAÑANA']

export const coursesList = (courses = []) => {
  const newList = []
  const orderList = []
  const messySubjects = []
  const orderSubjects = []

  SUBJECTS10.map(item => orderSubjects.push(toComparisonKey(item.key)))

  courses.map(course => {
    if (orderSubjects.includes(toComparisonKey(course.replace(/\d+/g, '')))) {
      newList.push({
        name: course,
        place: SUBJECTS10.find(item => toComparisonKey(item.key) === toComparisonKey(course.replace(/\d+/g, ''))).place,
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
      const matter = Object.keys(subjects)
      if (matter.includes(subject)) {
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
        averageThirdPeriod += parseFloat(thirdPeriod)
        if (Number(thirdPeriod) !== 0) itemsThirdPeriod += 1

        const fourthPeriod =
          notes?.find(({ Itemname: name }) => toComparisonKey(name) === toComparisonKey('Notas Finales Cuarto Periodo'))
            ?.Nota || 0
        averageFourthPeriod += parseFloat(fourthPeriod)
        if (Number(fourthPeriod) !== 0) itemsFourthPeriod += 1
      }
    }
    result.push({
      ...subjects,
      firstPeriodAverage:
        averageFirstPeriod / itemsFirstPeriod > 0 ? (averageFirstPeriod / itemsFirstPeriod).toFixed(4) : '1.0',
      secondPeriodAverage:
        averageSecondPeriod / itemsSecondPeriod > 0 ? (averageSecondPeriod / itemsSecondPeriod).toFixed(4) : '1.0',
      thirdPeriodAverage:
        averageThirdPeriod / itemsThirdPeriod > 0 ? (averageThirdPeriod / itemsThirdPeriod).toFixed(4) : '1.0',
      fourthPeriodAverage:
        averageFourthPeriod / itemsFourthPeriod > 0 ? (averageFourthPeriod / itemsFourthPeriod).toFixed(4) : '1.0',
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

export const assessment = note => {
  if (Number(note) < 3) return 'Bajo'
  if (Number(note) >= 3 && Number(note) < 4) return 'Basico'
  if (Number(note) >= 4 && Number(note) <= 4.5) return 'Alto'
  if (Number(note) > 4.5) return 'Superior'
}

export const getBehaviator = report => {
  const response = ''
  for (const key in report) {
    const matter = report[key]
    matter?.[0]?.Notas?.map(({ Itemname }) => {
      if (ITEMS_BEHAVITOR.includes(Itemname)) response = key
    })
  }
  return response
}

export const behaviorPerformance = studentReport => {
  let total = 0
  let counter = 0
  ITEMS_BEHAVITOR.map((item, index) => {
    total += parseFloat(getValue(studentReport[getBehaviator(studentReport)], { item }) || 0)
    counter = index
  })
  return total / (counter + 1)
}
