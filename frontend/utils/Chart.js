import { firstLetterToUpperCase } from 'utils/Text'

export const getChartLabel = (name = '') => {
  if (name.split(' ').length > 2) {
    return firstLetterToUpperCase(
      name
        .split(' ')
        .map(item => item[0])
        .join('')
    )
  }
  return firstLetterToUpperCase(name)
}
