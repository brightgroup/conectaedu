import { StyleSheet } from '@react-pdf/renderer'

export * from './Observer'
export const studentInformation = [
  {
    name: 'ID',
    subtitle: 'ID',
    description: 'id',
  },
  {
    name: 'Nombres',
    subtitle: 'Nombres',
    description: 'firstname',
  },
  {
    name: 'Apellidos',
    subtitle: 'Apellidos',
    description: 'lastname',
  },
  {
    name: 'Correo',
    subtitle: 'Correo',
    description: 'lastname',
  },
  {
    name: 'Telefono',
    subtitle: 'Telefono',
    description: 'phone',
  },
]

export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: '15',
  },
  subtitle: {
    fontWeight: '700',
    color: 'black',
    fontSize: '12',
    padding: '2',
  },
  description: {
    fontWeight: '300',
    color: 'gray',
    marginleft: '1',
  },
  container__description: {
    width: '90%',
    marginLeft: '5%',
  },
  container__title: {
    display: 'flex',
    justifyContent: 'center',
  },
  observation__container: {
    padding: '3',
    borderBottom: '2px solid #4B5563',
    width: '90%',
    marginLeft: '5%',
    marginBottom: '8',
  },
  observation__subcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  observation__subtitle: {
    fontWeight: 'bold',
    fontSize: '12',
    marginTop: '2',
  },
  observation__description: {
    fontWeight: 'normal ',
    fontSize: '12',
    color: 'gray',
  },
  observation__empty: {
    fontWeight: 'normal ',
    fontSize: '12',
    color: 'black',
    textAlign: 'center',
    marginTop: '12',
  },
})
