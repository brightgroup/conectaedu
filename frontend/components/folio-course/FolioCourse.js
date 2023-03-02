import { Document, Page, Text, View } from '@react-pdf/renderer'
import { useEffect, useState } from 'react'
import { styles } from '.'
import { Header, Table } from './components'

export const FolioCourse = ({ institutions, folios }) => {
  const [courses, setCourses] = useState([])
  let folio = 1

  useEffect(() => {
    setCourses(Object.keys(folios))
  }, [folios])

  //add folio number to each student

  for (const course in folios) {
    const students = folios[course]
    for (const studet of students) {
      studet.folio = folio
      folio++
    }
  }

  return (
    <Document>
      {courses?.map((course, index) => (
        <Page className="" key={index}>
          <View style={styles.container}>
            <Header institutions={institutions} course={folios[course]?.[0].curso} />
            <Table students={folios[course]} />
          </View>
        </Page>
      ))}
    </Document>
  )
}
