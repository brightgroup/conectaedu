import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { COMPETENCES, FAULTS, ITEMS_BEHAVITOR, NEWSLETTER_ITEMS, PERIOD } from 'constants/Bulletin'
import { assessment, behaviorPerformance, getValue } from 'utils/Bulletin'
import { stylesPerformance } from '.'

export const PerformanceTable = ({ courses, studentReport, period }) => {
  const replacePerformance = text => {
    const word = text?.replace('Desempeño ', '')
    return word ? word[0].toUpperCase() + word.slice(1) : null
  }

  return (
    <View style={{ marginTop: 40 }}>
      <View style={stylesPerformance.headerTable}>
        <View style={stylesPerformance.area}>
          <Text style={stylesPerformance.subtitle_bold}>ÁREA</Text>
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
      {courses?.map((course, index) =>
        course === 'COMPORTAMIENTO' ? (
          <View style={stylesPerformance.row} key={index}>
            <View style={stylesPerformance.areaDescription}>
              <Text style={stylesPerformance.subtitle_matter}>Comportamiento</Text>
            </View>
            <View style={stylesPerformance.studentDescription}>
              <View style={{ flexDirection: 'row' }}>
                <View style={stylesPerformance.fpDescription}></View>
                <View style={stylesPerformance.performance_description}>
                  <Text style={stylesPerformance.subtitle}>Desempeño del periodo:</Text>
                  <Text style={stylesPerformance.subtitle_bold}>{assessment(behaviorPerformance(studentReport))}</Text>
                </View>
                {ITEMS_BEHAVITOR.map((item, index) => (
                  <View style={stylesPerformance.note_description} key={index}>
                    <Text style={stylesPerformance.subtitle}>
                      {getValue(studentReport[course], {
                        item: item,
                      })}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={stylesPerformance.container_indicators}>
                <Text style={stylesPerformance.title_indicators}>INDICADOR DE DESEMPEÑO:</Text>
                {COMPETENCES[period]?.map(index => (
                  <Text style={stylesPerformance.text_competences} key={index}>
                    -
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ) : Array.isArray(studentReport[course]) ? (
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
                {COMPETENCES[period]?.map((indicator, index) => (
                  <Text style={stylesPerformance.text_competences} key={index}>
                    -
                    {getValue(studentReport[course], {
                      item: indicator,
                      valueKey: 'Description',
                    })}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ) : null
      )}
    </View>
  )
}
