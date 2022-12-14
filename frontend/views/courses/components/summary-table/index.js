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
    label: 'Ordenar por nombre',
  },
  {
    value: 'lastname',
    label: 'Ordenar por apellido',
  },
  {
    value: 'position',
    label: 'Ordenar por posición',
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

const invalidSubjects = ['string', 'boolean', 'number']

export const getAverageByPeriod = (data, period) => {
  const newData = data.map(({ average, lostAverages, position, student, ...item }) => {
    let total = 0
    let subjects = 0
    const lostItems = []
    for (const key in item) {
      const { notes } = item[key]
      const periodNote =
        notes?.find(({ Itemname: name }) => toComparisonKey(name) === toComparisonKey(period))?.Nota || 0
      total += Number(periodNote)
      if (Number(periodNote) !== 0) subjects += 1
      if (Number(periodNote) && Number(periodNote) < 3) lostItems.push(key)
    }

    return {
      ...item,
      average: total / subjects > 0 ? (total / subjects).toFixed(4) : '1.0',
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

export const performanceColors = {
  bajo: 'bg-red-300',
  básico: 'bg-orange-300',
  alto: 'bg-green-300',
  superior: 'bg-green-500',
}

export const behaviorColors = note => {
  if (isNaN(note)) return 'white'
  return note <= 2.9 ? 'bg-red-300 text-white' : note <= 4.5 ? 'bg-orange-300 text-white' : 'bg-green-500 text-white'
}

export const SINGLE_SUBJECT_FIELDS = 3

export const subjectAcronyms = {
  'ciencias naturales': 'CIE',
  'ciencias sociales': 'SOC',
  'educacion artistica': 'ART',
  'educacion etica': 'ETI',
  'educacion fisica': 'ED FIS',
  'educacion religiosa': 'REL',
  'humanidades-lengua castellana ': 'HUM',
  ingles: 'ING',
  matematicas: 'MAT',
  'tecnologia e informatica': 'TEC',
}

export const BEHAVIOUR_KEYS = [
  'calificacion comportamental 1 periodo',
  'calificacion comportamental 2 periodo',
  'calificacion comportamental 3 periodo',
  'calificacion comportamental 4 periodo',
]

export const alternativebehaviourKeys = [
  'calificacion comportamental primer periodo',
  'calificacion comportamental segundo periodo',
  'calificacion comportamental tercer periodo',
  'calificacion comportamental cuarto periodo',
]
