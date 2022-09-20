export const firstLetterToUpperCase = value => {
  const newValue = value.toLowerCase()
  return newValue[0].toUpperCase() + newValue.slice(1)
}

export const removeAccents = (str = '') => (str ? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '')

export const toComparisonKey = (key = '') => removeAccents(key.trim().toLowerCase())
