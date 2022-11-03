import { Text, View } from '@react-pdf/renderer'
import { BEHAVIUR, FAULTS, NEWSLETTER_ITEMS, PERIOD } from 'constants/Bulletin'
import { getValue } from 'utils/Bulletin'
import { stylesNotes } from '.'

export const TableNotes = ({ courses, studentReport, period }) => {
  const replacePerformance = text => text?.replace('Desempeño', '')

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
              <Text style={stylesNotes.subtitle}>1P</Text>
            </View>
            <View style={stylesNotes.period_notes}>
              <Text style={stylesNotes.subtitle}>2P</Text>
            </View>
            <View style={stylesNotes.period_notes}>
              <Text style={stylesNotes.subtitle}>3P</Text>
            </View>
            <View style={stylesNotes.period_last_note}>
              <Text style={stylesNotes.subtitle}>4P</Text>
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
          <Text style={stylesNotes.subtitle}>PROMEDIO GENERAL 3P</Text>
        </View>
        <View style={stylesNotes.column_comport}>
          <Text style={stylesNotes.subtitle}>NOTA COMPORT</Text>
        </View>
      </View>
      {courses?.map((course, index) => (
        <View style={stylesNotes.row} key={index}>
          <View style={stylesNotes.column_area}>
            <Text style={stylesNotes.subtitle}>{studentReport[course][0].Curso?.replace(/[0-9]/g, '')}</Text>
          </View>
          <View style={stylesNotes.column_notes}>
            <View style={{ flexDirection: 'row', margin:'auto 0' }}>
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
          <View style={stylesNotes.column_pt}>
            <Text style={stylesNotes.subtitle}></Text>
          </View>
          <View style={stylesNotes.columl_average}>
            <Text style={stylesNotes.subtitle}>
              {getValue(studentReport[course], { item: NEWSLETTER_ITEMS.averagePeriod })}
            </Text>
          </View>
          <View style={stylesNotes.column_comport}>
            <Text style={stylesNotes.subtitle}>{getValue(studentReport[course], { item: BEHAVIUR[period] })}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}
