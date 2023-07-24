export * from './FolioCourse'

import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    width: '100%',
  },
})

export const initialFolioValue = {
  libertador: 1,
  rondon: 257,
  sedeCentral: 363
}

export const orderCoursesHeadquarters = [
  "C601",
  "C602",
  "C701",
  "C702",
  "C703",
  "C801",
  "C802",
  "C901",
  "C902",
  "C1001",
  "C1101",
]

