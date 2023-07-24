export * from './FoliosCourse'

import { StyleSheet } from '@react-pdf/renderer'

export const buttons = [
  {
    name: 'Libertador',
    key: 'libertador'
  },
  {
    name: 'Rondon',
    key: 'rondon'
  },
  {
    name: 'Sede central',
    key: 'sedeCentral'
  },
]

export const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '80vh',
  },
})

export const DUPLICATE_STUDENTS = {
  "PREESCOLAR LIBERTADOR MAÑANA": ['ARIANA ISABELLA CERVERA SANDOVAL', 'LAUREN SALOME GONZALEZ FELIX', 'YOIBERLYNG VILLAROEL GONZALEZ'],
  "PRESCOLAR LIBERTADOR TARDE ": ['XILENA MARIANA SOTO ARIAS', 'JERONIMO PACHECO NAVARRO']
}