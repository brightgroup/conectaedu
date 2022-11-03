import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { styles } from '.'

export const SignaturesSection = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        position: 'absolute',
        flexDirection: 'row',
        border: 1,
        bottom: 20,
        borderColor: '#AEAAAA',
      }}
    >
      <View style={{ flex: 1, borderRight: 1, borderColor: '#AEAAAA', padding: 10 }}>
        <Text style={styles.subtitle}>Observaciones:</Text>
      </View>
      <View style={{ flex: 1, borderRight: 1, borderColor: '#AEAAAA', padding: 10 }}>
        <Text style={styles.subtitle}>Firma director de curso</Text>
      </View>
      <View style={{ flex: 1, padding: 10 }}>
        <Text style={styles.subtitle}>Firma Rector</Text>
      </View>
    </View>
  )
}
