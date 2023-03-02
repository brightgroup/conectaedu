export * from './FoliosCourse'

import { StyleSheet } from '@react-pdf/renderer'

export const buttons = [
  {
    name: 'Generar Folios Libertador Mañana',
  },
  {
    name: 'Generar Folios Libertador Tarde',
    colegio: 'LIBERTADOR',
    jornada: 'TARDE',
  },
  {
    name: 'Generar Folios Rondon Mañana',
    colegio: 'RONDON',
    jornada: 'MAÑANA',
  },
]

export const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '80vh',
  },
})
