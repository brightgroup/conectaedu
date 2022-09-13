import { sortArray } from 'utils/Array'
import { toComparisonKey } from 'utils/Text'

export * from './SummaryTable'
export * from './TableHeader'

export const INDICATORS = [
  'JD11P',
  'JD21P',
  'JD31P',
  'JD12P',
  'JD22P',
  'JD32P',
  'JD13P',
  'JD23P',
  'JD33P',
  'JD14P',
  'JD24P',
  'JD34P',
]

export const PERIODS = [
  {
    value: 'Notas finales Primer periodo',
    label: 'Primer período',
    acronym: 'P1',
  },
  {
    value: 'Notas finales Segundo periodo',
    label: 'Segundo período',
    acronym: 'P2',
  },
  {
    value: 'Notas finales Tercer periodo',
    label: 'Tercer período',
    acronym: 'P3',
  },
  {
    value: 'Notas finales Cuarto periodo',
    label: 'Cuarto período',
    acronym: 'P4',
  },
]

export const SORTING_KEYS = [
  {
    value: 'student',
    label: 'Ordenas por nombre',
  },
  {
    value: 'position',
    label: 'Ordenas por posición',
  },
]

export const FAILURE_KEYS = [
  'fallas acumuladas primer periodo',
  'fallas acumuladas segundo periodo',
  'fallas acumuladas tercer periodo',
  'fallas acumuladas cuarto periodo',
]

export const indicatorsByPeriod = {
  'notas finales primer periodo': ['JD11P', 'JD21P', 'JD31P'],
  'notas finales segundo periodo': ['JD12P', 'JD22P', 'JD32P'],
  'notas finales tercer periodo': ['JD13P', 'JD23P', 'JD33P'],
  'notas finales cuarto periodo': ['JD14P', 'JD24P', 'JD34P'],
}

export const getAverageByPeriod = (data, period) => {
  const newData = data.map(({ average, lostAverages, position, student, ...item }) => {
    let total = 0
    const lostItems = []
    for (const key in item) {
      const { notes } = item[key]
      const periodNote =
        notes?.find(({ Itemname: name }) => toComparisonKey(name) === toComparisonKey(period))?.Nota || 0
      total += Number(periodNote)
      if (Number(periodNote) && Number(periodNote) < 3) lostItems.push(key)
    }

    return {
      ...item,
      average: (total / Object.keys(item).length).toFixed(2),
      lostAverages: lostItems,
      student,
    }
  })

  const orderedList = sortArray([...newData], { key: 'average', isAscending: false }).map((item, index) => ({
    ...item,
    position: index + 1,
  }))

  return sortArray(orderedList, { key: 'student' })
}
