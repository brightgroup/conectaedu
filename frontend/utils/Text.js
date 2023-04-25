export const firstLetterToUpperCase = value => {
  const newValue = value.toLowerCase()
  return newValue[0].toUpperCase() + newValue.slice(1)
}

export const removeAccents = (str = '') => (str ? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '')

export const toComparisonKey = (key = '') => removeAccents(key ? key?.trim().toLowerCase() : key)

export const toSnakeCase = text => (text ? `${text.split(' ').join('_')}` : '')

export const capitalized = word => (word ? word[0].toUpperCase() + word.slice(1) : '')

export const capitalizeWords = text => {
  // Split the text into words
  let words = text.split(' ')
  // iterate and capitalize each word
  words?.forEach((word, index) => {
    words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
  return words.join(' ')
}
