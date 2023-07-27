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

export const FOLIO_NUMBER = {
  "PREESCOLAR LIBERTADOR MAÑANA": 1,
  "PRIMERO LIBERTADOR MAÑANA": 23,
  "SEGUNDO LIBERTADOR MAÑANA": 52,
  "TERCERO LIBERTADOR MAÑANA": 86,
  "CUARTO LIBERTADOR MAÑANA": 109,
  "QUINTO LIBERTADOR MAÑANA": 133,
  "PRESCOLAR LIBERTADOR TARDE": 168,
  "PRIMERO LIBERTADOR TARDE": 185,
  "TERCERO LIBERTADOR TARDE": 209,
  "CUARTO LIBERTADOR TARDE": 235,
  "PREESCOLAR RONDON MAÑANA": 257,
  "PRIMERO RONDON MAÑANA": 279,
  "SEGUNDO RONDON MAÑANA": 300,
  "TERCERO RONDON MAÑANA": 320,
  "CUARTO RONDON MAÑANA": 328,
  "QUINTO RONDON MAÑANA": 345,
  C601: 363,
  C602: 401,
  C701: 439,
  C702: 469,
  C703: 500,
  C801: 531,
  C802: 566,
  C901: 602,
  C902: 627,
  C1001: 650,
  C1101: 681
}


