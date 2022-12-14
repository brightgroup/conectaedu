import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { assessment, behaviorPerformance, getValue } from 'utils/Bulletin'
import { NEWSLETTER_ITEMS, PRESCHOOL_GRADE } from 'constants/Bulletin'
import { stylesTable } from '.'

export const Table = ({ orderedCourses, studentReport, course }) => {
  return (
    <View style={stylesTable.container}>
      <View style={stylesTable.container_header}>
        <View style={stylesTable.header_column1}>
          <Text>AREAS/Asignaturas</Text>
        </View>
        <View style={stylesTable.header_column2}>
          <Text>Nota</Text>
        </View>
        <View style={stylesTable.header_column3}>
          <Text>Valoración </Text>
          <Text>Conceptual</Text>
        </View>
      </View>
      {orderedCourses.map((course, index) =>
        Array.isArray(studentReport[course]) ? (
          <View style={stylesTable.row} key={index}>
            <View style={stylesTable.row_column1}>
              <Text>{studentReport[course][0].Curso?.replace(/[0-9]/g, '')}</Text>
            </View>
            <View style={stylesTable.row_column2}>
              <Text>{getValue(studentReport[course], { item: NEWSLETTER_ITEMS.averagePeriod })}</Text>
            </View>
            <View style={stylesTable.row_column3}>
              <Text style={{ fontSize: 10 }}>
                {assessment(getValue(studentReport[course], { item: NEWSLETTER_ITEMS.averagePeriod }))}
              </Text>
            </View>
          </View>
        ) : null
      )}
      {!PRESCHOOL_GRADE.includes(course) ? (
        <View style={stylesTable.row}>
          <View style={stylesTable.row_column1}>
            <Text>Comportamiento</Text>
          </View>
          <View style={stylesTable.row_column2}>
            <Text>{behaviorPerformance(studentReport).toFixed(1)}</Text>
          </View>
          <View style={stylesTable.row_column3}>
            <Text style={{ fontSize: 10 }}>{assessment(behaviorPerformance(studentReport))}</Text>
          </View>
        </View>
      ) : null}
      <View style={stylesTable.row}>
        <View style={stylesTable.row_column1}>
          <Text>Promedio generalL</Text>
        </View>
        <View style={stylesTable.row_column2}>
          <Text>{parseFloat(studentReport?.final).toFixed(1)}</Text>
        </View>
        <View style={stylesTable.row_column3}>
          <Text style={{ fontSize: 10 }}>{assessment(studentReport?.final)}</Text>
        </View>
      </View>
    </View>
  )
}
