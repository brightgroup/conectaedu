import { Font, StyleSheet } from '@react-pdf/renderer'

export * from './Description'
export * from './Table'
export * from './Contancy'
export * from './Header'

Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf', fontWeight: 700 },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-800.ttf', fontWeight: 800 },
  ],
})

export const response = {
  Promovido: 'Aprobó',
  Reprobado: 'Reprobó',
  Promovidoporpromedio: 'Aprobó por promedio',
}
export const PROMOTED = {
  Promovido: 'El estudiante ES PROMOVIDO AL SIGUIENTE GRADO',
  Reprobado: 'El estudiante NO ES PROMOVIDO AL SIGUIENTE GRADO',
}

export const stylesDescription = StyleSheet.create({
  text_center: {
    fontSize: 9,
    textAlign: 'center',
  },
  text_bold_center: {
    fontSize: 9,
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontWeight: '700',
  },
  mt: {
    marginTop: '4rem',
  },
})

export const stylescontancy = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '10px',
    width: '100%',
  },
  container_promoted: {
    border: '1px solid gray',
    paddingBottom: '15px',
    paddingTop: '5px',
    width: '100%',
  },
  text_promoted: {
    fontSize: 9,
    paddingLeft: '4px',
  },
  container_sing: {
    border: '1px solid gray',
    height: '100px',
    borderRadius: '10px',
    marginTop: '7px',
  },
  description_sing: {
    fontSize: 9,
    paddingLeft: '15px',
    paddingTop: '4px',
  },
  subcontainer_sing: {
    display: 'flex',
    flexDirection: 'row',
  },
  column_sing: {
    height: '80px',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text_sing: {
    fontSize: 9,
    borderTop: '1px solid gray',
    width: '150px',
    textAlign: 'center',
    paddingTop: '3px',
  },
  text_note: {
    fontSize: 9,
    padding: '6px',
  },
})

export const stylesTable = StyleSheet.create({
  container: {
    marginTop: '20px',
    border: '1px solid gray',
  },
  container_header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BDD6EE',
  },
  header_column1: {
    width: '70%',
    fontSize: 10,
    textAlign: 'center',
    borderRight: '1px solid gray',
  },
  header_column2: {
    width: '7%',
    fontSize: 10,
    textAlign: 'center',
    borderRight: '1px solid gray',
  },
  header_column3: {
    width: '7%',
    fontSize: 10,
    textAlign: 'center',
    borderRight: '1px solid gray',
  },
  header_column4: {
    width: '14%',
    fontSize: 10,
    textAlign: 'center',
  },
  header_column1_preschool: {
    width: '70%',
    fontSize: 10,
    textAlign: 'center',
    borderRight: '1px solid gray',
  },
  header_column2_preschool: {
    width: '10%',
    fontSize: 10,
    textAlign: 'center',
    borderRight: '1px solid gray',
  },
  header_column3_preeschool: {
    width: '20%',
    fontSize: 10,
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid gray',
    paddingBottom: '3px',
  },
  row_column1_no_margin: {
    width: '70%',
    fontSize: 10,
    textAlign: 'left',
    paddingLeft: '8px',
  },
  row_column1: {
    width: '70%',
    fontSize: 10,
    textAlign: 'left',
    borderRight: '1px solid gray',
    paddingLeft: '8px',
  },
  row_column2: {
    width: '7%',
    fontSize: 10,
    textAlign: 'center',
    borderRight: '1px solid gray',
  },
  row_column3: {
    width: '7%',
    fontSize: 10,
    textAlign: 'center',
    borderRight: '1px solid gray',
  },
  row_column4: {
    width: '14%',
    fontSize: 10,
    textAlign: 'center',
  },
  row_column1_preschool: {
    width: '70%',
    fontSize: 10,
    textAlign: 'left',
    borderRight: '1px solid gray',
    paddingLeft: '8px',
  },
  row_column2_preschool: {
    width: '10%',
    fontSize: 10,
    textAlign: 'center',
    borderRight: '1px solid gray',
  },
  row_column3_preschool: {
    width: '20%',
    fontSize: 10,
    textAlign: 'center',
  },
})
