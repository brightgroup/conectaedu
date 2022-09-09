export const firstLetterToUpperCase = value => {
  const newValue = value.toLowerCase()
  return newValue[0].toUpperCase() + newValue.slice(1)
}

const removeAccents = (str = '') => (str ? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '')

const getAcronym = subject =>
  removeAccents(
    subject
      .split(' ')
      .slice(0, subject.split(' ').length - 2)
      .map(item => item[0])
      .join('')
      .toLowerCase()
  )
