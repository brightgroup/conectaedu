import React, { useEffect, useMemo, useState } from 'react'
import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import { PerformanceTable } from './PerformanceTable'
import { TableNotes } from './TableNotes'
import { getCourseDescription, getInstitutionDescription } from 'utils/Bulletin'
import { SignaturesSection } from './components'
import { styles } from '.'

export const StudentBulletin = ({ studentReport, period, course, institutions }) => {
  const courses = useMemo(() => Object.keys(studentReport), [studentReport])
  const [{ coursesFirstPage, coursesSecondPage, coursesThirdPage }, setPages] = useState({
    coursesFirstPage: [],
    coursesSecondPage: [],
    coursesThirdPage: [],
  })

  useEffect(() => {
    if (courses.length > 12) {
      setPages({
        coursesFirstPage: courses.slice(0, 5),
        coursesSecondPage: courses.slice(5, 13),
        coursesThirdPage: courses.slice(13, courses.length),
      })
    } else {
      setPages({
        coursesFirstPage: courses.slice(0, 5),
        coursesSecondPage: courses.slice(5, courses.length),
      })
    }
  }, [courses])

  const getNameStudent = () => studentReport[courses.slice(0, 1)]?.[0]?.student

  return (
    <Document>
      <Page>
        <View style={styles.container}>
          <View style={styles.container__header}>
            <View style={styles.container__header_image}>
              {/* <Image src="https://api.conectaedu.co/1667330222.png" width={20} height={20} /> */}
            </View>
            <View style={styles.container__header_title}>
              <View style={styles.container__description}>
                <Text style={styles.title}>{getInstitutionDescription(institutions, 'name')}</Text>
                <Text style={styles.subtitle}>{getInstitutionDescription(institutions, 'address')}</Text>
                <Text style={styles.subtitle}>{getInstitutionDescription(institutions, 'municipality')}</Text>
              </View>
              <View style={styles.container__subtitle}>
                <View style={styles.container__subtitle_comulmn1}>
                  <Text style={{ fontSize: 10 }}>BOLETIN DE EVALUACION</Text>
                </View>
                <View style={styles.container__subtitle_comulmn2}>
                  <Text style={styles.title}>AÑO</Text>
                </View>
                <View style={styles.container__subtitle_comulmn3}>
                  <Text style={styles.title}>Periodo</Text>
                </View>
              </View>
              <View style={styles.container__information}>
                <View style={styles.information__name}>
                  <Text style={styles.subtitle}>Alumno:</Text>
                  <Text style={styles.text__student}>{getNameStudent()}</Text>
                </View>
                <View style={styles.information__name}>
                  <Text style={styles.subtitle}>Director de Grupo:</Text>
                  <Text style={styles.text__student}>{getCourseDescription(course, 'director')}</Text>
                </View>
                <View style={{ width: '27.5%', fontSize: 10 }}>
                  <View style={{ paddingLeft: 6 }}>
                    <Text style={styles.subtitle}>
                      {getCourseDescription(course, 'year') || new Date().getFullYear()}
                    </Text>
                  </View>
                  <View style={styles.box_background}>
                    <Text style={styles.title}>GRADO</Text>
                  </View>
                  <View style={{ paddingLeft: 6, paddingTop: 2 }}>
                    <Text style={styles.subtitle}>{getCourseDescription(course, 'name')}</Text>
                  </View>
                </View>
                <View style={{ width: '14%' }}>
                  <View style={{ paddingLeft: 6 }}>
                    <Text style={styles.subtitle}>{period}</Text>
                  </View>
                  <View style={styles.box_background}>
                    <Text style={styles.title}>JORNADA</Text>
                  </View>
                  <View style={{ paddingLeft: 6, paddingTop: 2 }}>
                    <Text style={styles.subtitle}>{getCourseDescription(course, 'day_trip')}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: 700, width: '100%', marginTop: 10 }}>
            {/* <Image src={image} style={{ width: '100%', opacity: 0.2, marginTop: 100, zIndex: '10' }} /> */}
            <View style={{ width: '100%', position: 'absolute' }}>
              <View>
                <TableNotes courses={courses} studentReport={studentReport} period={period} />
              </View>
              <View>
                <Text style={styles.description}>
                  Convenciones: FP (Fallas Periodo) F.J (Fallas Justificadas) F.I (Fallas injustificadas) P (Periodo) Pt
                  (Puesto)
                </Text>
              </View>
              <View>
                <PerformanceTable courses={coursesFirstPage} studentReport={studentReport} period={period} />
              </View>
            </View>
          </View>
        </View>
      </Page>
      <Page>
        <View style={styles.container}>
          <View style={{ height: '100%', width: '100%' }}>
            {/* <Image src={image} style={{ width: '100%', opacity: 0.2, marginTop: 100, zIndex: '10' }} /> */}
            <View style={{ width: '100%', position: 'absolute' }}>
              <View>
                <PerformanceTable courses={coursesSecondPage} studentReport={studentReport} period={period} />
              </View>
            </View>
            {coursesThirdPage ? null : <SignaturesSection />}
          </View>
        </View>
      </Page>
      {coursesThirdPage ? (
        <Page>
          <View style={styles.container}>
            <View style={{ height: '100%', width: '100%' }}>
              {/* <Image src={image} style={{ width: '100%', opacity: 0.2, marginTop: 100, zIndex: '10' }} /> */}
              <View style={{ width: '100%', position: 'absolute' }}>
                <View>
                  <PerformanceTable courses={coursesThirdPage} studentReport={studentReport} period={period} />
                </View>
              </View>
              <SignaturesSection />
            </View>
          </View>
        </Page>
      ) : null}
    </Document>
  )
}
