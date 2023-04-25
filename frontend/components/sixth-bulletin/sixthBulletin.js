import React, { useEffect, useState } from 'react'
import { Document, Page, View } from '@react-pdf/renderer'
import { Contancy, Description, Table, Header } from './components'
import { FILTER_COURSES, styles } from '.'

export const SixthBulletin = ({ institutions, subjects, course, folios, hoursCourse }) => {
  return (
    <Document>
      {folios.map((student, index) => (
        <Page style={styles.container} key={index}>
          <Header
            institutions={institutions}
            student={student.student}
            course={course}
            code={index + 1}
            folio={student.folio}
          />
          <View style={styles.container}>
            <Description
              student={student.student}
              id_number={student.id_number}
              course={course}
              status={student.status}
            />
            <Table studentReport={student.notas} subjects={subjects} course={course} final={student.final} />
            <View style={{ width: '100%', height: '50%', position: 'relative' }}>
              <Contancy status={student.status} />
            </View>
          </View>
        </Page>
      ))}
    </Document>
  )
}
