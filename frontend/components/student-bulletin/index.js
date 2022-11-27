import { Font, StyleSheet } from '@react-pdf/renderer'

export * from './StudentBulletin'
Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf', fontWeight: 700 },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-800.ttf', fontWeight: 800 },
  ],
})

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

  backgroundImage: {
    objectFit: 'cover',
    width: '80%',
    opacity: 0.2,
    marginTop: 70,
    zIndex: '10',
  },

  image: {
    width: '100%',
    heigth: '100%',
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
  title_bold: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'Open Sans',
  },
})

export const stylesNotes = StyleSheet.create({
  container: {
    overflow: 'hidden',
    border: 1,
    borderColor: '#D0CECE',
    position: 'relative',
  },

  title_bold: {
    fontSize: 10,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 8,
  },

  subtitle_comport: {
    fontSize: 8,
    positiono: 'absolute',
    top: 10,
  },

  subtitle_average: {
    position: 'absolute',
    fontSize: 8,
    top: 30,
  },

  subtitle_bold: {
    fontSize: 8,
    fontWeight: '700',
    fontFamily: 'Open Sans',
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
    borderBottom: 1,
    borderColor: '#D0CECE',
  },

  column_notes: {
    width: '18%',
    borderRight: 1,
    borderBottom: 1,
    borderColor: '#D0CECE',
    height: 'auto',
  },

  column_faults: {
    width: '4%',
    borderRight: 1,
    borderBottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D0CECE',
  },

  column_performance: {
    width: '10.5%',
    borderRight: 1,
    borderBottom: 1,
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

  prueba: {
    width: '10.5%',
    borderRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'transparent',
    borderColor: '#D0CECE',
  },

  column_pt: {
    width: '7.5%',
    borderRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D0CECE',
  },

  column_pt_hidden: {
    width: '7.5%',
    borderRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D0CECE',
    color: 'transparent',
  },

  text_pt: {
    top: 30,
    fontSize: 8,
  },

  column_comport: {
    width: '12.5%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  item_comport: {
    width: '12.5%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  period_notes: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: 1,
    borderColor: '#D0CECE',
    overflow: 'hidden',
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
    minHeight: 60,
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
    display: 'flex',
    flexDirection: 'row',
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
    fontSize: 8,
    marginBottom: 6,
    fontWeight: '700',
    fontFamily: 'Open Sans',
  },
  subtitle: {
    fontSize: 10,
    whiteSpace: 'normal',
    textAlign: 'center',
  },
  subtitle_matter: {
    fontSize: 7,
    whiteSpace: 'normal',
    textAlign: 'center',
  },
  subtitle_bold: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'Open Sans',
    display: 'inline',
  },
  text_competences: {
    fontSize: 10,
    textAlign: 'left',
  },
})
