export const createArray = items => {
  const array = []
  for (let i = 0; i < items; i++) array.push(i + 1)
  return array
}

export const sortArray = (array, { key, isAscending = true }) => {
  return [...array].sort((a, b) => {
    const [firstValue, secondValue] = [a[key].toLowerCase(), b[key].toLowerCase()]
    if (isAscending) return firstValue < secondValue ? -1 : firstValue > secondValue ? 1 : 0
    return firstValue < secondValue ? 1 : firstValue > secondValue ? -1 : 0
  })
}
