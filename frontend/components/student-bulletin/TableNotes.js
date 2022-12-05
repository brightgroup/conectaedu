import { useMemo } from 'react'
import { Text, View } from '@react-pdf/renderer'
import { BEHAVIUR, FAULTS, ITEMS_BEHAVITOR, NEWSLETTER_ITEMS, PERIOD } from 'constants/Bulletin'
import { assessment, behaviorPerformance, generalAverageperiod, getValue, replacePerformance } from 'utils/Bulletin'
import { stylesNotes } from '.'

export const TableNotes = ({ courses, studentReport, period, getPosition, behaviour, isPreschoolCourse }) => {
  const average = useMemo(() => generalAverageperiod(courses, studentReport, period), [])
  return (
    <View style={stylesNotes.container}>
      <View style={stylesNotes.table__header}>
        <View style={stylesNotes.column_area}>
          <Text style={stylesNotes.subtitle}>AREA</Text>
        </View>
        <View style={stylesNotes.column_notes}>
          <View style={stylesNotes.border_bottom}>
            <Text style={stylesNotes.subtitle}>NOTAS ACUM</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={stylesNotes.period_notes}>
              <Text style={stylesNotes.subtitle_bold}>1P</Text>
            </View>
            <View style={stylesNotes.period_notes}>
              <Text style={stylesNotes.subtitle_bold}>2P</Text>
            </View>
            <View style={stylesNotes.period_notes}>
              <Text style={stylesNotes.subtitle_bold}>3P</Text>
            </View>
            <View style={stylesNotes.period_last_note}>
              <Text style={stylesNotes.subtitle_bold}>4P</Text>
            </View>
          </View>
        </View>
        <View style={stylesNotes.column_faults}>
          <Text style={stylesNotes.subtitle}>FP</Text>
        </View>
        <View style={stylesNotes.column_faults}>
          <Text style={stylesNotes.subtitle}>F.J</Text>
        </View>
        <View style={stylesNotes.column_faults}>
          <Text style={stylesNotes.subtitle}>F.I</Text>
        </View>
        <View style={stylesNotes.column_performance}>
          <Text style={stylesNotes.subtitle}>DESEMPEÑO</Text>
        </View>
        <View style={stylesNotes.column_pt}>
          <Text style={stylesNotes.subtitle}>{`PT ${period}P`}</Text>
        </View>
        <View style={stylesNotes.columl_average}>
          <Text style={stylesNotes.subtitle}>{`PROMEDIO GENERAL ${period}P`}</Text>
        </View>
        <View style={stylesNotes.column_comport}>
          <Text style={stylesNotes.subtitle}>NOTA COMPORT</Text>
        </View>
      </View>
      {courses?.map((course, index) =>
        course === 'COMPORTAMIENTO' && !isPreschoolCourse ? (
          <View style={stylesNotes.row} key={index}>
            <View style={stylesNotes.column_area}>
              <Text style={stylesNotes.subtitle}>Comportamiento</Text>
            </View>
            <View style={stylesNotes.column_notes}>
              <View style={{ flexDirection: 'row', margin: 'auto 0' }}>
                {ITEMS_BEHAVITOR.map((item, index) => (
                  <View style={stylesNotes.period_notes} key={index}>
                    <Text style={stylesNotes.subtitle}>{getValue(studentReport[behaviour], { item })}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={stylesNotes.column_faults}></View>
            <View style={stylesNotes.column_faults}></View>
            <View style={stylesNotes.column_faults}></View>
            <View style={stylesNotes.column_performance}>
              <Text style={stylesNotes.subtitle}>{assessment(behaviorPerformance(studentReport))}</Text>
            </View>
            <View style={stylesNotes.column_pt_hidden}></View>
            <View style={stylesNotes.prueba}></View>
            <View style={stylesNotes.item_comport}></View>
          </View>
        ) : Array.isArray(studentReport[course]) ? (
          <View style={stylesNotes.row} key={index}>
            <View style={stylesNotes.column_area}>
              <Text style={stylesNotes.subtitle}>{studentReport[course][0].Curso?.replace(/[0-9]/g, '')}</Text>
            </View>
            <View style={stylesNotes.column_notes}>
              <View style={{ flexDirection: 'row', margin: 'auto 0' }}>
                <View style={stylesNotes.period_notes}>
                  <Text style={stylesNotes.subtitle}>
                    {getValue(studentReport[course], { item: NEWSLETTER_ITEMS.firstPeriod })}
                  </Text>
                </View>
                <View style={stylesNotes.period_notes}>
                  <Text style={stylesNotes.subtitle}>
                    {getValue(studentReport[course], { item: NEWSLETTER_ITEMS.secondPeriod })}
                  </Text>
                </View>
                <View style={stylesNotes.period_notes}>
                  <Text style={stylesNotes.subtitle}>
                    {getValue(studentReport[course], { item: NEWSLETTER_ITEMS.thirdPeriod })}
                  </Text>
                </View>
                <View style={stylesNotes.period_last_note}>
                  <Text style={stylesNotes.subtitle}>
                    {getValue(studentReport[course], { item: NEWSLETTER_ITEMS.fourthPeriod })}
                  </Text>
                </View>
              </View>
            </View>
            <View style={stylesNotes.column_faults}>
              <Text style={stylesNotes.subtitle}>
                {getValue(studentReport[course], { item: FAULTS[period], decimals: 0 })}
              </Text>
            </View>
            <View style={stylesNotes.column_faults}>
              <Text style={stylesNotes.subtitle}></Text>
            </View>
            <View style={stylesNotes.column_faults}>
              <Text style={stylesNotes.subtitle}></Text>
            </View>
            <View style={stylesNotes.column_performance}>
              <Text style={stylesNotes.subtitle}>
                {replacePerformance(getValue(studentReport[course], { item: PERIOD[period], valueKey: 'Desempenio' }))}
              </Text>
            </View>
            <View style={index === 0 ? stylesNotes.column_pt : stylesNotes.column_pt_hidden}>
              <Text style={index === 0 ? stylesNotes.text_pt : stylesNotes.subtitle}>{getPosition}</Text>
            </View>
            <View style={index === 0 ? stylesNotes.columl_average : stylesNotes.prueba}>
              <Text style={stylesNotes.subtitle_average}>{average.slice(0, 3)}</Text>
            </View>
            <View style={stylesNotes.item_comport}>
              <Text style={stylesNotes.subtitle_comport}>
                {getValue(studentReport[course], { item: BEHAVIUR[period] })}
              </Text>
            </View>
          </View>
        ) : null
      )}
    </View>
  )
}
