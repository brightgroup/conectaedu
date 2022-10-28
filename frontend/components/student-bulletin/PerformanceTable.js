import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { NEWSLETTER_ITEMS } from 'constants/Bulletin'
import { toComparisonKey } from 'utils/Text'
import { stylesPerformance } from '.'

export const PerformanceTable = ({ courses, studentReport }) => {
  const getValue = (notes, { item, valueKey = 'Nota' }) => {
    if (Array.isArray(notes) && notes.length) {
      const value = notes[0]?.Notas.find(note => toComparisonKey(note.Itemname) === toComparisonKey(item))?.[valueKey]
      return isNaN(Number(value)) ? value : Number(value) || '-'
    }
  }

  const replacePerformance = text => text?.replace('Desempeño', '')

  return (
    <View style={{ marginTop: 40 }}>
      <View style={stylesPerformance.headerTable}>
        <View style={stylesPerformance.area}>
          <Text style={stylesPerformance.subtitle}>AREA</Text>
        </View>
        <View style={stylesPerformance.fp}>
          <Text style={stylesPerformance.subtitle}>FP</Text>
        </View>
        <View style={stylesPerformance.performance}>
          <Text style={stylesPerformance.subtitle}>DESEMPEÑO Y CALIFICACIONES</Text>
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
      {courses.map((course, index) => (
        <View style={stylesPerformance.row} key={index}>
          <View style={stylesPerformance.areaDescription}>
            <Text style={stylesPerformance.subtitle}>{studentReport[course][0].Curso.replace(/[0-9]/g, '')}</Text>
          </View>
          <View style={stylesPerformance.studentDescription}>
            <View style={{ flexDirection: 'row' }}>
              <View style={stylesPerformance.fpDescription}>
                <Text style={stylesPerformance.subtitle}>
                  {getValue(studentReport[course], {
                    item: NEWSLETTER_ITEMS.faults,
                  })}
                </Text>
              </View>
              <View style={stylesPerformance.performance_description}>
                <Text style={stylesPerformance.subtitle}>
                  {`Desempeño del periodo: ${replacePerformance(
                    getValue(studentReport[course], {
                      item: NEWSLETTER_ITEMS.thirdPeriod,
                      valueKey: 'Desempenio',
                    })
                  )}`}
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
              <Text style={stylesPerformance.title_indicators}>INDICADORES DE DESEMPEÑO</Text>
              <Text style={stylesPerformance.subtitle}>
                {getValue(studentReport[course], {
                  item: NEWSLETTER_ITEMS.competencesFirstPeriod,
                  valueKey: 'Description',
                })?.toLowerCase()}
              </Text>
              <Text style={stylesPerformance.subtitle}>-</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}