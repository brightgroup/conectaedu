export const createArray = items => {
  const array = []
  for (let i = 0; i < items; i++) array.push(i + 1)
  return array
}

const getValue = value => (isNaN(value) ? value.toLowerCase() : value)

export const sortArray = (array, { key, isAscending = true }) => {
  return [...array].sort((a, b) => {
    const [firstValue, secondValue] = [getValue(a[key]), getValue(b[key])]
    if (isAscending) return firstValue < secondValue ? -1 : firstValue > secondValue ? 1 : 0
    return firstValue < secondValue ? 1 : firstValue > secondValue ? -1 : 0
  })
}

export const getAverage = array => {
  return array.length ? array.reduce((total = 0, item) => (total += Number(item)), 0) / array.length : 0
}
