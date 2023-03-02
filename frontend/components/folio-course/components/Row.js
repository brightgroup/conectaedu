import { Text, View } from '@react-pdf/renderer'
import { stylesRow } from '.'

export const Row = ({ item, name, folio, observation, approve = '', fail = '', status }) => {
  return (
    <View style={stylesRow.container_row}>
      <View style={stylesRow.col_item}>
        <Text>{item}</Text>
      </View>
      <View style={stylesRow.col_name}>
        <Text>{name}</Text>
      </View>
      <View style={stylesRow.col_folio}>
        <Text>{folio}</Text>
      </View>
      <View style={stylesRow.col_observation}>
        <Text>{observation}</Text>
      </View>
      <View style={stylesRow.col_approve}>
        <Text>{(status === 'Promovido' && 'x') || approve}</Text>
      </View>
      <View style={stylesRow.col_fail}>
        <Text>{(status === 'Reprobado' && 'X') || fail}</Text>
      </View>
    </View>
  )
}
