import React from 'react'
import { Document, Page, Text, View } from '@react-pdf/renderer'
import { studentInformation, styles } from '.'

export const Observer = ({ studentUser, studentObservations }) => {
  return (
    <Document>
      <Page size={'A4'} style={{ padding: '20', paddingBottom: '60' }}>
        <View>
          <View style={styles.container__title}>
            <Text style={styles.title}>Estudiante</Text>
          </View>
          <View style={styles.container__description}>
            {studentInformation?.map(item => (
              <View key={item.name}>
                <Text style={styles.subtitle}>
                  {item.subtitle}
                  <Text style={styles.description}>{studentUser[item.description] || 'No disponible'}</Text>
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.container__title}>
            <Text style={styles.title}>Observaciones</Text>

            {studentObservations?.map((observation, index) => (
              <View style={styles.observation__container} key={index}>
                <View style={styles.observation__subcontainer}>
                  <Text style={styles.observation__subtitle}>
                    Docente: <Text style={styles.observation__subtitle}>{observation?.Docente}</Text>
                  </Text>
                  <Text style={styles.observation__subtitle}>{observation?.date}</Text>
                </View>
                <Text style={styles.observation__subtitle}>
                  Observacion: <Text style={styles.observation__description}>{observation?.observation}</Text>
                </Text>
                <Text style={styles.observation__subtitle}>
                  Compromiso estudiante: <Text style={styles.observation__description}>{observation?.goals}</Text>
                </Text>
              </View>
            ))}
            {!studentObservations.length ? (
              <Text style={styles.observation__empty}>El estudiante no reporta observaciones</Text>
            ) : null}
          </View>
        </View>
      </Page>
    </Document>
  )
}
