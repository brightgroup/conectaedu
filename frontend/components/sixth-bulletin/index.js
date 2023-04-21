export * from './sixthBulletin'

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
    maxWidth: '90%',
    maxHeigth: '90%',
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
    marginTop: 2,
  },
  container__subtitle: {
    flexDirection: 'row',
    backgroundColor: '#BDD6EE',
    border: 1,
    borderColor: '#D0CECE',
  },

  container__subtitle_comulmn1: {
    width: '70%',
    textAlign: 'center',
    fontWeight: 900,
    borderColor: '#D0CECE',
  },

  container__subtitle_comulmn2: {
    width: '15%',
    textAlign: 'center',
    borderRight: 1,
    borderColor: '#D0CECE',
  },
  container__subtitle_comulmn3: {
    width: '15%',
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
    width: '35%',
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

export const FILTER_COURSES = {
  C601: '601',
  C601T: '601',
  C602: '602',
  C602T: '602',
  C701: '701',
  C701T: '701',
  C702: '702',
  C702T: '702',
  C703: '703',
  C703T: '703',
  C801: '801',
  C801T: '801',
  C802: '802',
  C802T: '802',
  C901: '901',
  C901T: '901',
  C902: '902',
  C902T: '902',
  C1001: '1001',
  C1001T: '1001',
  C1101: '1101',
  C1101T: '1101',
  QUINTORONDONMAÑANA: 'QUINTORONDONMAÑANA',
  QUINTORONDONMAÑANAT: 'QUINTO RONDON MAÑANA',
  QUINTOLIBERTADORMAÑANAT: 'QUINTO LIBERTADOR MAÑANA',
  QUINTOLIBERTADORMAÑANA: 'QUINTOLIBERTADORMAÑANA',
  CUARTORONDONMAÑANAT: 'CUARTO RONDON MAÑANA',
  CUARTORONDONMAÑANA: 'CUARTORONDONMAÑANA',
  CUARTOLIBERTADORMAÑANA: 'CUARTOLIBERTADORMAÑANA',
  CUARTOLIBERTADORMAÑANAT: 'CUARTO LIBERTADOR MAÑANA',
  CUARTOLIBERTADORTARDET: 'CUARTO LIBERTADOR TARDE',
  CUARTOLIBERTADORTARDE: 'CUARTOLIBERTADORTARDE',
  TERCEROLIBERTADORMAÑANAT: 'TERCERO LIBERTADOR MAÑANA',
  TERCEROLIBERTADORMAÑANA: 'TERCEROLIBERTADORMAÑANA',
  TERCEROLIBERTADORTARDET: 'TERCERO LIBERTADOR TARDE',
  TERCEROLIBERTADORTARDE: 'TERCEROLIBERTADORTARDE',
  TERCERORONDONMAÑANAT: 'TERCERO RONDON MAÑANA',
  TERCERORONDONMAÑANA: 'TERCERORONDONMAÑANA',
  SEGUNDOLIBERTADORMAÑANAT: 'SEGUNDO LIBERTADOR MAÑANA',
  SEGUNDOLIBERTADORMAÑANA: 'SEGUNDOLIBERTADORMAÑANA',
  SEGUNDORONDONMAÑANAT: 'SEGUNDO RONDON MAÑANA',
  SEGUNDORONDONMAÑANA: 'SEGUNDORONDONMAÑANA',
  PRIMEROLIBERTADORMAÑANAT: 'PRIMERO LIBERTADOR MAÑANA',
  PRIMEROLIBERTADORMAÑANA: 'PRIMEROLIBERTADORMAÑANA',
  PRIMEROLIBERTADORTARDET: 'PRIMERO LIBERTADOR TARDE',
  PRIMEROLIBERTADORTARDE: 'PRIMEROLIBERTADORTARDE',
  PRIMERORONDONMAÑANAT: 'PRIMERO RONDON MAÑANA',
  PRIMERORONDONMAÑANAT: 'PRIMERORONDONMAÑANA',
  PREESCOLARLIBERTADORMAÑANT: 'PREESCOLAR LIBERTADOR MAÑANA',
  PREESCOLARLIBERTADORMAÑAN: 'PREESCOLARLIBERTADORMAÑANA',
  PRESCOLARLIBERTADORTARDET: 'PRESCOLAR LIBERTADOR TARDE',
  PRESCOLARLIBERTADORTARDE: 'PRESCOLARLIBERTADORTARDE',
  PREESCOLARRONDONMAÑANAT: 'PREESCOLAR RONDON MAÑANA',
  PREESCOLARRONDONMAÑANA: 'PREESCOLARRONDONMAÑANA',
  PREESCOLARLIBERTADORMAÑANA: 'PREESCOLARLIBERTADORMAÑANA',
  PREESCOLARLIBERTADORMAÑANAT: 'PREESCOLAR LIBERTADOR MAÑANA',
  PRESCOLARLIBERTADORTARDET: 'PRESCOLAR LIBERTADOR TARDE',
  PRESCOLARLIBERTADORTARDE: 'PRESCOLARLIBERTADORTARDE',
  PREESCOLARRONDONMAÑANAT: 'PREESCOLAR RONDON MAÑANA',
  PREESCOLARRONDONMAÑANA: 'PREESCOLARRONDONMAÑANA',
}
