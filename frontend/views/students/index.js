export * from './components'
export * from './Students'

export const getInitials = array => {
  return array?.map(item => {
    const { 0: name, 2: lastName } = item['Display Name'].split(' ')
    return {
      ...item,
      lastName: lastName[0],
      name: name[0],
    }
  })
}
