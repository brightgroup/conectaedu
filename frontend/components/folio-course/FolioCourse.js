import { useEffect, useState } from 'react'
import { Document, Page, Text, View } from '@react-pdf/renderer'
import { Header, Table } from './components'
import { initialFolioValue, orderCoursesHeadquarters, sortCourses, styles } from '.'

export const FolioCourse = ({ institutions, folios, render }) => {
  const [courses, setCourses] = useState([])
  let folio = initialFolioValue[render]

  useEffect(() => {
    const courses = Object.keys(folios)
    if (render === "sedeCentral") {
      return setCourses(orderCoursesHeadquarters)
    }
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
            <Header institutions={institutions} course={course} />
            <Table students={folios[course]} />
          </View>
        </Page>
      ))}
    </Document>
  )
}
