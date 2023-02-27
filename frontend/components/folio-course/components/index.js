export * from './Header'

import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },

  // --section header--

  container__header: {
    flexDirection: 'row',
    height: '80px',
    width: '100%',
    border: '1px',
    borderColor: '#D0CECE',
  },

  container__header_image: {
    padding: 4,
    border: 1,
    borderColor: '#D0CECE',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
  },

  container__header_title: {
    flex: 1,
    border: 1,
    borderColor: '#D0CECE',
  },

  container__header_description: {
    display: 'flex',
    flexDirection: 'row',
    height: 23,
  },

  container__header_color: {
    height: 12,
    backgroundColor: '#BDD6EE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container__description: {
    textAlign: 'center',
    marginVertical: 6,
  },

  container__header_col1: {
    width: '60%',
    borderRight: 1,
    borderColor: '#D0CECE',
  },

  container__header_col2: {
    width: '30%',
    borderRight: 1,
    borderColor: '#D0CECE',
  },

  title: {
    fontSize: 10,
  },

  title_bold: {
    fontSize: 10,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 9,
    paddingLeft: 4,
  },

  subtitle_padding: {
    fontSize: 9,
    paddingLeft: 4,
    paddingTop: 4,
  },
})
