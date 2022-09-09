export * from './SummaryTable'
export * from './TableHeader'

export const INDICATORS = ['JD11P', 'JD21P']

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

export const FAILURE_KEYS = [
  'fallas acumuladas primer periodo',
  'fallas acumuladas segundo periodo',
  'fallas acumuladas tercer periodo',
  'fallas acumuladas cuarto periodo',
]
