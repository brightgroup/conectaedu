export * from './FinalCertificate'

import { StyleSheet } from '@react-pdf/renderer'

export const buttons = [
  {
    name: 'Certificado final Libertador Mañana',
    colegio: 'LIBERTADOR',
    jornada: 'MANANA',
  },
  {
    name: 'Certificado Final Libertador Tarde',
    colegio: 'LIBERTADOR',
    jornada: 'TARDE',
  },
  {
    name: 'Certificado Final Folios Rondon Mañana',
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




