import { Text, View } from '@react-pdf/renderer'
import { NEWSLETTER_ITEMS } from 'constants/Bulletin'
import { toComparisonKey } from 'utils/Text'
import { stylesNotes } from '.'

export const TableNotes = ({ courses, studentReport }) => {
  const getValue = (notes, { item, valueKey = 'Nota' }) => {
    if (Array.isArray(notes) && notes.length) {
      const value = notes[0]?.Notas.find(note => toComparisonKey(note.Itemname) === toComparisonKey(item))?.[valueKey]
      return isNaN(Number(value)) ? value : Number(value) || '-'
    }
  }

  const replacePerformance = text => text?.replace('Desempeño', '')

  return (
    <View>
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
          <Text style={stylesNotes.subtitle}>PT 3P</Text>
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
            <Text style={stylesNotes.subtitle}>{studentReport[course][0].Curso.replace(/[0-9]/g, '')}</Text>
          </View>
          <View style={stylesNotes.column_notes}>
            <View style={{ flexDirection: 'row' }}>
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
              {getValue(studentReport[course], { item: NEWSLETTER_ITEMS.faults })}
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
              {replacePerformance(
                getValue(studentReport[course], { item: NEWSLETTER_ITEMS.thirdPeriod, valueKey: 'Desempenio' })
              )}
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
            <Text style={stylesNotes.subtitle}>-</Text>
          </View>
        </View>
      ))}
    </View>
  )
}
