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
