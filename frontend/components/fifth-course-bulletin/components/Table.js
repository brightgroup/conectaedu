import React, { useMemo } from 'react'
import { Text, View } from '@react-pdf/renderer'
import { assessment, behaviorPerformance, coursesList, getValue, Hourlyintensity } from 'utils/Bulletin'
import { NEWSLETTER_ITEMS, PRESCHOOL_GRADE } from 'constants/Bulletin'
import { stylesTable } from '.'

export const Table = ({ studentReport, course, hoursCourse }) => {
  const courses = useMemo(() => Object.keys(studentReport), [studentReport])

  const orderedCourses = useMemo(() => coursesList(courses), [courses])

  return (
    <View style={stylesTable.container}>
      <View style={stylesTable.container_header}>
        <View style={stylesTable.header_column1}>
          <Text>AREAS/Asignaturas</Text>
        </View>
        <View style={stylesTable.header_column2}>
          <Text>I.H.</Text>
        </View>
        <View style={stylesTable.header_column3}>
          <Text>Nota</Text>
        </View>
        <View style={stylesTable.header_column4}>
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
              <Text>{Hourlyintensity(course.replace(/_/g, ' '), hoursCourse)?.toString()}</Text>
            </View>
            <View style={stylesTable.row_column3}>
              <Text>{getValue(studentReport[course], { item: NEWSLETTER_ITEMS.averagePeriod })}</Text>
            </View>
            <View style={stylesTable.row_column4}>
              <Text style={{ fontSize: 10 }}>
                {assessment(getValue(studentReport[course], { item: NEWSLETTER_ITEMS.averagePeriod }))}
              </Text>
            </View>
          </View>
        ) : null
      )}
      {!PRESCHOOL_GRADE.includes(course) ? (
        <View style={stylesTable.row}>
          <View style={stylesTable.row_column1_no_margin}>
            <Text>Comportamiento</Text>
          </View>
          <View style={stylesTable.row_column2}>
            <Text></Text>
          </View>
          <View style={stylesTable.row_column3}>
            <Text>{behaviorPerformance(studentReport).toFixed(1)}</Text>
          </View>
          <View style={stylesTable.row_column4}>
            <Text style={{ fontSize: 10 }}>{assessment(behaviorPerformance(studentReport))}</Text>
          </View>
        </View>
      ) : null}
      <View style={stylesTable.row}>
        <View style={stylesTable.row_column1_no_margin}>
          <Text>Promedio generalL</Text>
        </View>
        <View style={stylesTable.row_column2}>
          <Text></Text>
        </View>
        <View style={stylesTable.row_column3}>
          <Text>{parseFloat(studentReport?.final).toFixed(1)}</Text>
        </View>
        <View style={stylesTable.row_column4}>
          <Text style={{ fontSize: 10 }}>{assessment(studentReport?.final)}</Text>
        </View>
      </View>
    </View>
  )
}
