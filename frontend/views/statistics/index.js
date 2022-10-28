import { removeAccents, toComparisonKey, toSnakeCase } from 'utils/Text'

export * from './Statistics'

export const SUBJECTS = [
  'ARQUITECTURA DE COMPUTADORES',
  'CIENCIAS NATURALES',
  'CIENCIAS SOCIALES',
  'COMPORTAMIENTO SOCIAL',
  'CONTABILIDAD',
  'DIMENSION COGNITIVA',
  'DIMENSION COMUNICATIVA',
  'DIMENSION CORPORAL',
  'DIMENSION ESTETICA',
  'DIMENSION ETICA',
  'EDUCACION ARTISTICA',
  'EDUCACION ETICA',
  'EDUCACION ETICA Y VALORES HUMANOS',
  'EDUCACION FISICA',
  'EDUCACION RELIGIOSA',
  'EDUCACION RELIGIOSA Y MORAL',
  'EMPRENDERISMO',
  'EMPRENDIMIENTO',
  'ESPAñOL',
  'ETICA Y VALORES HUMANOS',
  'FENOMENOLOGIA DE LA EMPRESA',
  'FILOSOFIA',
  'FISICA',
  'FUNDAMENTOS DE ADMINISTRACION',
  'HUMANIDADES-LENGUA CASTELLANA',
  'INGLES',
  'MATEMATICAS',
  'MH FUNDAMENTOS DE ADMINISTRACION',
  'PROYECTO EMPRESARIAL',
  'QUIMICA',
  'SISTEMAS I',
  'SISTEMAS II',
  'TECNOLOGIA E INFORMATICA',
]

export const COURSES = [
  'PREESCOLAR RONDON MAÑANA',
  'PREESCOLAR LIBERTADOR MAÑANA',
  'PRESCOLAR LIBERTADOR TARDE',
  'PRIMERO RONDON MAÑANA',
  'PRIMERO LIBERTADOR MAÑANA',
  'PRIMERO LIBERTADOR TARDE',
  'SEGUNDO RONDON MAÑANA',
  'SEGUNDO LIBERTADOR MAÑANA',
  'TERCERO RONDON MAÑANA',
  'TERCERO LIBERTADOR MAÑANA',
  'TERCERO LIBERTADOR TARDE',
  'CUARTO RONDON MAÑANA',
  'CUARTO LIBERTADOR MAÑANA',
  'CUARTO LIBERTADOR TARDE',
  'QUINTO RONDON MAÑANA',
  'QUINTO LIBERTADOR MAÑANA',
  '601',
  '602',
  '701',
  '702',
  '703',
  '801',
  '802',
  '901',
  '902',
  '1001',
  '1101',
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
  {
    value: 'Final',
    label: 'Final',
    acronym: 'Final',
  },
]

export const TABLE_TITLE = {
  'Notas finales Primer periodo': 'PRIMER PERÍODO',
  'Notas finales Segundo periodo': 'SEGUNDO PERÍODO',
  'Notas finales Tercer periodo': 'TERCER PERÍODO',
  'Notas finales Cuarto periodo': 'CUARTO PERÍODO',
  Final: 'FINALES',
}

export const getFailedStatistics = (data = {}, period = '') => {
  const disapprovalByAreas = {}
  const failuresNumber = {}

  if (!Object.keys(data).length) return { disapprovalByAreas, failuresNumber }

  COURSES.forEach(course =>
    SUBJECTS.forEach(subject => {
      const notes = data[`${toSnakeCase(removeAccents(subject))}_${toSnakeCase(removeAccents(course))}`] || []

      if (notes.length) {
        notes.forEach(({ Student, Notas: items }, index) => {
          const lostSubject = !!items?.find(
            item => toComparisonKey(item.Itemname) === toComparisonKey(period) && Number(item.Nota) && item.Nota < 3
          )
            ? 1
            : 0

          failuresNumber[course] = failuresNumber[course]
            ? { ...failuresNumber[course], [Student]: (failuresNumber[course][Student] || 0) + lostSubject }
            : { [Student]: lostSubject }
        })
      }

      const result =
        notes?.filter(item =>
          item?.Notas?.some(
            item => toComparisonKey(item.Itemname) === toComparisonKey(period) && Number(item.Nota) && item.Nota < 3
          )
        ) || []

      if (result.length) {
        const currentItem = disapprovalByAreas[course]
        const newItem = {
          failed: result.length,
          failedPercentage: notes.length ? ((result?.length * 100) / notes.length).toFixed(1) : '-',
        }
        disapprovalByAreas[course] = currentItem ? { ...currentItem, [subject]: newItem } : { [subject]: newItem }
      }
    })
  )

  return {
    disapprovalByAreas,
    failuresNumber,
  }
}
