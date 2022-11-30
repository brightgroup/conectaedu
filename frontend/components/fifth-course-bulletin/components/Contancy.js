import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { PROMOTED, stylescontancy } from '.'

export const Contancy = ({ status }) => {
  return (
    <View style={stylescontancy.container}>
      <View style={stylescontancy.container_promoted}>
        <Text style={stylescontancy.text_promoted}>{PROMOTED[status]}</Text>
      </View>
      <View style={stylescontancy.container_sing}>
        <Text style={stylescontancy.description_sing}>Para constancia firman</Text>
        <View style={stylescontancy.subcontainer_sing}>
          <View style={stylescontancy.column_sing}>
            <Text style={stylescontancy.text_sing}>Rector(a)</Text>
          </View>
          <View style={stylescontancy.column_sing}>
            <Text style={stylescontancy.text_sing}>Director(a) curso</Text>
          </View>
        </View>
      </View>
      <Text style={stylescontancy.text_note}>
        NOTA: El presente documento no requiere de sellos ni autenticaciones de firmas, segun decreto 2150 de diciembre 5
        de 1995
      </Text>
    </View>
  )
}
