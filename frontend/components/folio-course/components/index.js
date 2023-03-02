export * from './Header'
export * from './Table'

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
    width: '50%',
    borderRight: 1,
    borderColor: '#D0CECE',
  },

  container__header_col2: {
    width: '40%',
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

  table: {
    width: '100%',
    marginTop: 20,
    border: 1,
    borderColor: '#D0CECE',
    borderTop: 0,
  },
})

export const stylesRow = StyleSheet.create({
  container_row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    fontSize: 9,
    borderTop: 1,
    borderColor: '#D0CECE',
  },

  container_row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    fontSize: 9,
    borderTop: 1,
    borderColor: '#D0CECE',
  },

  col_item: {
    borderRight: 1,
    width: '5%',
    borderColor: '#D0CECE',
    padding: '1px 0 1px 4px',
  },

  col_name: {
    width: '42%',
    borderRight: 1,
    borderColor: '#D0CECE',
    padding: '1px 0 1px 4px',
  },

  col_folio: {
    width: '8%',
    borderRight: 1,
    borderColor: '#D0CECE',
    padding: '1px 0 1px 4px',
  },

  col_observation: {
    width: '31%',
    borderRight: 1,
    borderColor: '#D0CECE',
    padding: '1px 0 1px 4px',
  },

  col_approve: {
    width: '7%',
    borderRight: 1,
    borderColor: '#D0CECE',
    padding: '1px 0 1px 4px',
  },

  col_fail: {
    width: '7%',
    padding: '1px 0 1px 4px',
  },
})
