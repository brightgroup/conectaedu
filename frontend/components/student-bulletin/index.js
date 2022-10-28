import { StyleSheet } from '@react-pdf/renderer'

export * from './StudentBulletin'

export const image =
  'data:image/jpeg;base64,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'

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
  },

  container__description: {
    textAlign: 'center',
  },

  container__information: {
    flexDirection: 'row',
  },

  information__name: {
    width: '29.5%',
    fontSize: 10,
    borderRight: 1,
    borderColor: '#D0CECE',
    flexDirection: 'column',
    padding: 2,
    paddingLeft: 4,
  },

  container__subtitle: {
    flexDirection: 'row',
    backgroundColor: '#BDD6EE',
    border: 1,
    borderColor: '#D0CECE',
  },

  container__subtitle_comulmn1: {
    width: '59%',
    textAlign: 'center',
    fontWeight: 900,
    borderRight: 1,
    borderColor: '#D0CECE',
  },

  container__subtitle_comulmn2: {
    width: '27%',
    textAlign: 'center',
    borderRight: 1,
    borderColor: '#D0CECE',
  },

  container__subtitle_comulmn3: {
    width: '14%',
    textAlign: 'center',
  },

  container__header_title: {
    flex: 1,
    border: 1,
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
  },

  text__student: {
    fontSize: 9,
    marginTop: 3,
  },

  box_background: {
    backgroundColor: '#BDD6EE',
    textAlign: 'center',
  },

  border: {
    border: 1,
  },

  border1: {
    border: 1,
    borderColor: 'red',
  },

  description: {
    fontSize: 8,
    textAlign: 'center',
    marginTop: 10,
  },
})

export const stylesNotes = StyleSheet.create({
  title_bold: {
    fontSize: 10,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 8,
  },

  table__header: {
    flexDirection: 'row',
    backgroundColor: '#BDD6EE',
    border: 1,
    borderColor: '#D0CECE',
  },

  column_area: {
    width: '29%',
    alignItems: 'start',
    justifyContent: 'center',
    paddingLeft: 6,
    borderRight: 1,
    borderColor: '#D0CECE',
  },

  column_notes: {
    width: '18%',
    borderRight: 1,
    borderColor: '#D0CECE',
  },

  column_faults: {
    width: '4%',
    borderRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D0CECE',
  },

  column_performance: {
    width: '10.5%',
    borderRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D0CECE',
  },

  columl_average: {
    width: '10.5%',
    borderRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D0CECE',
  },

  column_pt: {
    width: '7.5%',
    borderRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D0CECE',
  },

  column_comport: {
    width: '12.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  period_notes: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: 1,
    borderColor: '#D0CECE',
  },

  period_last_note: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  border_bottom: {
    borderBottom: 1,
    borderColor: '#D0CECE',
    textAlign: 'center',
  },

  row: {
    border: 1,
    borderColor: '#D0CECE',
    borderTop: 'none',
    flexDirection: 'row',
  },
})

export const stylesPerformance = StyleSheet.create({
  headerTable: {
    width: '100%',
    flexDirection: 'row',
    border: 1,
    borderColor: '#AEAAAA',
    borderRight: 'none',
  },

  area: {
    width: '30%',
    borderRight: 1,
    borderColor: '#AEAAAA',
    paddingLeft: 4,
    paddingBottom: 8,
    paddingTop: 1,
  },

  fp: {
    width: '6%',
    borderRight: 1,
    borderColor: '#AEAAAA',
    paddingLeft: 4,
    paddingBottom: 8,
    paddingTop: 1,
  },

  performance: {
    width: '40%',
    borderRight: 1,
    borderColor: '#AEAAAA',
    paddingLeft: 4,
    paddingBottom: 8,
    paddingTop: 1,
  },

  note: {
    width: '6%',
    borderRight: 1,
    borderColor: '#AEAAAA',
    paddingLeft: 4,
    paddingBottom: 8,
    paddingTop: 1,
  },

  areaDescription: {
    width: '30%',
    borderRight: 1,
    padding: 10,
    borderColor: '#AEAAAA',
    backgroundColor: '#DEEAF6',
  },

  studentDescription: {
    width: '70%',
  },

  row: {
    flexDirection: 'row',
    border: 1,
    borderColor: '#AEAAAA',
    borderTop: 'none',
  },

  fpDescription: {
    width: '8.5%',
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  performance_description: {
    width: '57.5%',
    borderRight: 1,
    borderLeft: 1,
    borderColor: '#AEAAAA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  note_description: {
    width: '8.5%',
    borderRight: 1,
    borderColor: '#AEAAAA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  last_note: {
    width: '8.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container_indicators: {
    padding: 10,
    paddingTop: 2,
    borderTop: 1,
    borderColor: '#AEAAAA',
  },

  title_indicators: {
    fontSize: 9,
    marginBottom: 6,
    fontWeight: 'extrabold',
  },

  subtitle: {
    fontSize: 10,
  },
})
