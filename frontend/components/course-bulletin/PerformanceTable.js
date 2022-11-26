import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { COMPETENCES, FAULTS, NEWSLETTER_ITEMS, PERIOD } from 'constants/Bulletin'
import { stylesPerformance } from '.'
import { getValue } from 'utils/Bulletin'

export const PerformanceTable = ({ courses, studentReport, period }) => {
  const replacePerformance = text => text?.replace('Desempeño', '')

  return (
    <View style={{ marginTop: 40 }}>
      <View style={stylesPerformance.headerTable}>
        <View style={stylesPerformance.area}>
          <Text style={stylesPerformance.subtitle_bold}>AREA</Text>
        </View>
        <View style={stylesPerformance.fp}>
          <Text style={stylesPerformance.subtitle}>FP</Text>
        </View>
        <View style={stylesPerformance.performance}>
          <Text style={stylesPerformance.subtitle_bold}>DESEMPEÑO Y CALIFICACIONES</Text>
        </View>
        <View style={stylesPerformance.note}>
          <Text style={stylesPerformance.subtitle}>1P</Text>
        </View>
        <View style={stylesPerformance.note}>
          <Text style={stylesPerformance.subtitle}>2P</Text>
        </View>
        <View style={stylesPerformance.note}>
          <Text style={stylesPerformance.subtitle}>3P</Text>
        </View>
        <View style={stylesPerformance.note}>
          <Text style={stylesPerformance.subtitle}>4P</Text>
        </View>
      </View>
      {courses?.map((course, index) => (
        <View style={stylesPerformance.row} key={index}>
          <View style={stylesPerformance.areaDescription}>
            <Text style={stylesPerformance.subtitle_matter}>
              {studentReport[course]?.[0]?.Curso.replace(/[0-9]/g, '')}
            </Text>
          </View>
          <View style={stylesPerformance.studentDescription}>
            <View style={{ flexDirection: 'row' }}>
              <View style={stylesPerformance.fpDescription}>
                <Text style={stylesPerformance.subtitle}>
                  {getValue(studentReport[course], {
                    item: FAULTS[period],
                    decimals: 0,
                  })}
                </Text>
              </View>
              <View style={stylesPerformance.performance_description}>
                <Text style={stylesPerformance.subtitle}>Desempeño del periodo:</Text>
                <Text style={stylesPerformance.subtitle_bold}>
                  {replacePerformance(
                    getValue(studentReport[course], {
                      item: PERIOD[period],
                      valueKey: 'Desempenio',
                    })
                  )}
                </Text>
              </View>
              <View style={stylesPerformance.note_description}>
                <Text style={stylesPerformance.subtitle}>
                  {getValue(studentReport[course], {
                    item: NEWSLETTER_ITEMS.firstPeriod,
                  })}
                </Text>
              </View>
              <View style={stylesPerformance.note_description}>
                <Text style={stylesPerformance.subtitle}>
                  {getValue(studentReport[course], {
                    item: NEWSLETTER_ITEMS.secondPeriod,
                  })}
                </Text>
              </View>
              <View style={stylesPerformance.note_description}>
                <Text style={stylesPerformance.subtitle}>
                  {getValue(studentReport[course], {
                    item: NEWSLETTER_ITEMS.thirdPeriod,
                  })}
                </Text>
              </View>
              <View style={stylesPerformance.last_note}>
                <Text style={stylesPerformance.subtitle}>
                  {getValue(studentReport[course], {
                    item: NEWSLETTER_ITEMS.fourthPeriod,
                  })}
                </Text>
              </View>
            </View>
            <View style={stylesPerformance.container_indicators}>
              <Text style={stylesPerformance.title_indicators}>INDICADOR DE DESEMPEÑO:</Text>
              <Text style={stylesPerformance.text_competences}>
                {getValue(studentReport[course], {
                  item: COMPETENCES[period],
                  valueKey: 'Description',
                })}
              </Text>
              <Text style={stylesPerformance.text_competences}>-</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}