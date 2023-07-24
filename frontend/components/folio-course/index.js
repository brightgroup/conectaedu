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


