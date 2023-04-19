import React, { useEffect, useState } from 'react'
import { Text, View } from '@react-pdf/renderer'
import { assessment, behaviorPerformanceFolio, HourlyintensityFolio } from 'utils/Bulletin'
import { PRESCHOOL_GRADE } from 'constants/Bulletin'
import { stylesTable } from '.'
import { FILTER_COURSES } from '..'

export const Table = ({ final, studentReport, course, hoursCourse, subjects }) => {
  const [courses, setCourses] = useState([])
  const [coursesHours, setCoursesHours] = useState([])

  const filterSubjectsHours = subjects.filter(obj => obj.name?.includes(FILTER_COURSES[`${course}T`]))

  useEffect(() => {
    const option = []
    const optionsHours = []
    for (let i = 0; i < studentReport?.length; i++) {
      for (let j = 0; j < studentReport[i].length; j++) {
        if (studentReport[i][j].curso) {
          option.push(studentReport[i][j].curso)
        }
        if (studentReport[i][j].Itemname?.includes(FILTER_COURSES[`${course}T`])) {
          optionsHours.push(studentReport[i][j].Itemname)
        }
      }
    }
    setCourses([...option])
    setCoursesHours([...optionsHours])
  }, [studentReport])

  const getValueFolios = (report, search, key = '') => {
    const option = report?.find(item => item.Itemname?.includes(search))
    if (option) {
      return option[key]
    }
  }

  const getSubjectName = (report, search, key) => {
    const option = report?.find(item => item.Itemname?.includes(search))
    if (option) {
      return report?.find(item => item.curso)?.[key]
    }
  }

  return (
    <View style={stylesTable.container}>
      <View style={stylesTable.container_header}>
        {!PRESCHOOL_GRADE.includes(course) ? (
          <>
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
          </>
        ) : (
          <>
            <View style={stylesTable.header_column1_preschool}>
              <Text>AREAS/Asignaturas</Text>
            </View>
            <View style={stylesTable.header_column2_preschool}>
              <Text>Nota</Text>
            </View>
            <View style={stylesTable.header_column3_preeschool}>
              <Text>Valoración </Text>
              <Text>Conceptual</Text>
            </View>
          </>
        )}
      </View>
      {courses?.map((subject, index) => (
        <View style={stylesTable.row} key={index}>
          {!PRESCHOOL_GRADE.includes(course) ? (
            <>
              <View style={stylesTable.row_column1}>
                <Text>{getSubjectName(studentReport[index], course, 'curso') || subject}</Text>
              </View>
              <View style={stylesTable.row_column2}>
                <Text>{HourlyintensityFolio(coursesHours[index], filterSubjectsHours)?.toString()}</Text>
              </View>
              <View style={stylesTable.row_column3}>
                <Text>{getValueFolios(studentReport[index], 'Final', 'Nota')}</Text>
              </View>
              <View style={stylesTable.row_column4}>
                <Text style={{ fontSize: 10 }}>
                  {assessment(getValueFolios(studentReport[index], 'Final', 'Nota'))}
                </Text>
              </View>
            </>
          ) : (
            ''
          )}
        </View>
      ))}

      {!PRESCHOOL_GRADE.includes(course) ? (
        <View style={stylesTable.row}>
          <View style={stylesTable.row_column1_no_margin}>
            <Text>Comportamiento</Text>
          </View>
          <View style={stylesTable.row_column2}>
            <Text></Text>
          </View>
          <View style={stylesTable.row_column3}>
            <Text>{behaviorPerformanceFolio(studentReport).toFixed(1)}</Text>
          </View>
          <View style={stylesTable.row_column4}>
            <Text style={{ fontSize: 10 }}>{assessment(behaviorPerformanceFolio(studentReport))}</Text>
          </View>
        </View>
      ) : null}
      <View style={stylesTable.row}>
        {!PRESCHOOL_GRADE.includes(course) ? (
          <>
            <View style={stylesTable.row_column1_no_margin}>
              <Text>Promedio general</Text>
            </View>
            <View style={stylesTable.row_column2}>
              <Text></Text>
            </View>
            <View style={stylesTable.row_column3}>
              <Text>{parseFloat(final).toFixed(1)}</Text>
            </View>
            <View style={stylesTable.row_column4}>
              <Text style={{ fontSize: 10 }}>{assessment(final)}</Text>
            </View>
          </>
        ) : (
          <>
            <View style={stylesTable.row_column1_no_margin}>
              <Text>Promedio general</Text>
            </View>

            <View style={stylesTable.row_column2_preschool}>
              <Text>{parseFloat(studentReport?.final).toFixed(1)}</Text>
            </View>
            <View style={stylesTable.row_column3_preschool}>
              <Text style={{ fontSize: 10 }}>{assessment(final)}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  )
}
