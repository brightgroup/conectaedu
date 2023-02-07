import React, { useMemo } from 'react'
import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import { URLS } from 'api/Urls'
import { coursesList, getCourseDescription, getInstitutionDescription } from 'utils/Bulletin'
import { Contancy, Description, Table } from './components'
import { GRADES } from 'constants/Bulletin'
import { styles } from '.'

export const FifthBulletin = ({ studentReport, institutions, course }) => {
  const courses = useMemo(() => Object.keys(studentReport), [studentReport])

  const orderedCourses = useMemo(() => coursesList(courses), [courses])

  const getNameStudent = () => studentReport[courses.slice(0, 1)]?.[0]?.student

  return (
    <Document>
      <Page>
        <View style={styles.container}>
          <View style={styles.container__header}>
            <View style={styles.container__header_image}>
              {WithDynamicImage(getInstitutionDescription(institutions, 'brand'), false)}
            </View>
            <View style={styles.container__header_title}>
              <View style={styles.container__description}>
                <Text style={styles.title}>{getInstitutionDescription(institutions, 'name')}</Text>
                <Text style={styles.subtitle}>{getInstitutionDescription(institutions, 'address')}</Text>
                <Text style={styles.subtitle}>{getInstitutionDescription(institutions, 'municipality')}</Text>
              </View>
              <View style={styles.container__subtitle}>
                <View style={styles.container__subtitle_comulmn1}>
                  <Text style={styles.title_bold}>INFORME FINAL DE EVALUACION</Text>
                </View>
                <View style={styles.container__subtitle_comulmn2}>
                  <Text style={styles.title}>AÑO</Text>
                </View>
              </View>
              <View style={styles.container__information}>
                <View style={styles.information__name}>
                  <Text style={styles.subtitleLeft}>Alumno:</Text>
                  <Text style={styles.text__student}>{getNameStudent()}</Text>
                </View>
                <View style={styles.information__name}>
                  <Text style={styles.subtitleLeft}>Director de Grupo:</Text>
                  <Text style={styles.text__student}>
                    {GRADES[getCourseDescription(course, 'name').replace(/\s+/g, '')].director}
                  </Text>
                </View>
                <View style={{ width: '20%', fontSize: 10 }}>
                  <View style={{ paddingLeft: 6 }}>
                    <Text style={styles.subtitle}>
                      2022
                    </Text>
                  </View>
                  <View style={styles.box_background}>
                    <Text style={styles.title}>GRADO</Text>
                  </View>
                  <View style={{ paddingLeft: 6, paddingTop: 2 }}>
                    <Text style={styles.subtitle}>
                      {GRADES[getCourseDescription(course, 'name').replace(/\s+/g, '')].name}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Description
            student={getNameStudent()}
            status={studentReport.status}
            course={getCourseDescription(course, 'name').replace(/\s+/g, '')}
          />
          <Table
            studentReport={studentReport}
            orderedCourses={orderedCourses}
            course={getCourseDescription(course, 'name').replace(/\s+/g, '')}
          />
          <View style={{ width: '100%', height: '50%', position: 'relative' }}>
            <Contancy status={studentReport.status} />
          </View>
        </View>
      </Page>
    </Document>
  )
}

const WithDynamicImage = (image, background = true) => {
  let imageDynamic = URLS.assets(image)
  return (
    <Image src={imageDynamic} alt="Picture of the author" style={background ? styles.backgroundImage : styles.image} />
  )
}
