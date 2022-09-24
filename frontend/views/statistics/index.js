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

// const getSubjects = () => {
//     const subjects = Object.keys(fullData)
//     console.log('todas las subjects', subjects)
//     const uniqueSubjects = []
//     subjects.forEach(subject => {
//       const name = getSubjectName(subject)

//       if (!uniqueSubjects.includes(name)) {
//         if (name.includes('HUMANIDADES-HUMANIDADES-LENGUA_CASTELLANA__SEGUNDO_LIBERTADOR_MAÑANA')) {
//           console.log('EL NAME', name, 'subject', subject)
//         }

//         uniqueSubjects.push(name)
//       }
//     })

//     return uniqueSubjects
//   }

//   const getSubjectName = name => {
//     if (name.split('_').some(item => !isNaN(Number(item)))) {
//       return getSubjectByCourse(name)
//     }
//     return getSubjectBySchool(name)
//   }

//   const getSubjectByCourse = subject => {
//     return toComparisonKey(
//       subject
//         .split('_')
//         .filter(item => isNaN(Number(item)))
//         .join(' ')
//     ).toUpperCase()
//   }

//   const getSubjectBySchool = name => {
//     const index = name?.split('_').findIndex(item => ['RONDON', 'LIBERTADOR'].includes(item))
//     const item = name
//       .split('_')
//       .slice(0, index - 1)
//       .join(' ')

//     if (item) return toComparisonKey(item).toUpperCase()

//     const index2 = name?.split(' ').findIndex(item => ['RONDON', 'LIBERTADOR'].includes(item))
//     const item2 = name
//       .split(' ')
//       .slice(0, index2 - 1)
//       .join(' ')
//     return item2
//   }
