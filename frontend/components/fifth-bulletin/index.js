export * from './FifthBulletin'

import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },

  container__header: {
    flexDirection: 'row',
  },

  container__header_image: {
    padding: 4,
    border: 1,
    borderColor: '#D0CECE',
    justifyContent: 'center',
    borderRight: 'none',
    width: 70,
  },
  container__header_title: {
    flex: 1,
    border: 1,
    borderColor: '#D0CECE',
  },
  image: {
    width: 'auto',
    maxWidth:'90%',
    heigth: '90%',
    objectFit: 'cover',
  },

  container__description: {
    textAlign: 'center',
  },
  title: {
    fontSize: 10,
  },
  subtitle: {
    fontSize: 9,
    textAlign: 'center',
    wordBreak: 'break-all',
  },
  subtitleLeft: {
    fontSize: 9,
    textAlign: 'left',
  },
  container__subtitle: {
    flexDirection: 'row',
    backgroundColor: '#BDD6EE',
    border: 1,
    borderColor: '#D0CECE',
  },

  container__subtitle_comulmn1: {
    width: '80%',
    textAlign: 'center',
    fontWeight: 900,
    borderColor: '#D0CECE',
  },

  container__subtitle_comulmn2: {
    width: '20%',
    textAlign: 'center',
    borderRight: 1,
    borderColor: '#D0CECE',
  },
  title_bold: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'Open Sans',
  },
  container__information: {
    flexDirection: 'row',
  },
  information__name: {
    width: '40%',
    fontSize: 10,
    borderRight: 1,
    borderColor: '#D0CECE',
    flexDirection: 'column',
    padding: 2,
    paddingLeft: 4,
  },
  text__student: {
    fontSize: 9,
    marginTop: 3,
  },
  box_background: {
    backgroundColor: '#BDD6EE',
    textAlign: 'center',
  },
})
