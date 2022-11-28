import React, { useEffect, useMemo, useState } from 'react'
import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import { PerformanceTable } from './PerformanceTable'
import { TableNotes } from './TableNotes'
import { coursesList, getBehaviator, getCourseDescription, getInstitutionDescription } from 'utils/Bulletin'
import { SignaturesSection } from './components'
import { URLS } from 'api/Urls'
import { styles } from '.'

export const CourseBulletin = ({ period, course, institutions, courseReport: report, courseAverage }) => {
  const [courseReport, setCourseReport] = useState(report)
  const courses = useMemo(() => Object.keys(courseReport?.[0]), [courseReport])

  const orderedCourses = useMemo(() => coursesList(courses), [courses])

  const [{ coursesFirstPage, coursesSecondPage, coursesThirdPage }, setPages] = useState({
    coursesFirstPage: [],
    coursesSecondPage: [],
    coursesThirdPage: [],
  })

  useEffect(() => {
    if (orderedCourses.length > 12) {
      setPages({
        coursesFirstPage: orderedCourses.slice(0, 4),
        coursesSecondPage: orderedCourses.slice(4, 11),
        coursesThirdPage: orderedCourses.slice(11, courses.length),
      })
    } else {
      setPages({
        coursesFirstPage: orderedCourses.slice(0, 4),
        coursesSecondPage: orderedCourses.slice(4, courses.length),
      })
    }
  }, [orderedCourses])

  const includeBehavior = () => {
    let matter = ''
    const report = []
    courseReport.map((student, index) => {
      matter = getBehaviator(student)
      report.push({ ...student, COMPORTAMIENTO: student[matter] })
    })
    return report
  }

  useEffect(() => {
    if (period == 4) {
      setCourseReport(includeBehavior())
    }
  }, [period])

  console.log(courseAverage, 'ESTE ES EL COURSE ABERAGE  PARA VER POR QUE NO SE RENDERIZA EL CURSO')

  return (
    <Document>
      {courseReport?.map((student, id) => (
        <React.Fragment key={id}>
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
                      <Text style={styles.text__student}>{student[courses?.[0]]?.[0]?.student}</Text>
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
                {WithDynamicImage(getInstitutionDescription(institutions, 'brand'))}
                <View style={{ width: '100%', position: 'absolute' }}>
                  <View>
                    <TableNotes
                      courses={orderedCourses}
                      studentReport={student}
                      period={period}
                      courseAverage={courseAverage}
                      behaviour={getBehaviator(student)}
                    />
                  </View>
                  <View>
                    <Text style={styles.description}>
                      Convenciones: FP (Fallas Periodo) F.J (Fallas Justificadas) F.I (Fallas injustificadas) P
                      (Periodo) Pt (Puesto)
                    </Text>
                  </View>
                  <View>
                    <PerformanceTable courses={coursesFirstPage} studentReport={student} period={period} />
                  </View>
                </View>
              </View>
            </View>
          </Page>
          <Page>
            <View style={styles.container}>
              <View style={{ height: '100%', width: '100%' }}>
                {WithDynamicImage(getInstitutionDescription(institutions, 'brand'))}
                <View style={{ width: '100%', position: 'absolute' }}>
                  <View>
                    <PerformanceTable courses={coursesSecondPage} studentReport={student} period={period} />
                  </View>
                </View>
                {coursesThirdPage ? null : <SignaturesSection />}
              </View>
            </View>
          </Page>
          {!!coursesThirdPage ? (
            <Page>
              <View style={styles.container}>
                <View style={{ height: '100%', width: '100%' }}>
                  {WithDynamicImage(getInstitutionDescription(institutions, 'brand'))}
                  <View style={{ width: '100%', position: 'absolute' }}>
                    <View>
                      <PerformanceTable courses={coursesThirdPage} studentReport={student} period={period} />
                    </View>
                  </View>
                  <SignaturesSection />
                </View>
              </View>
            </Page>
          ) : null}
        </React.Fragment>
      ))}
    </Document>
  )
}

const WithDynamicImage = (image, background = true) => {
  let imageDynamic = URLS.assets(image)
  return (
    <Image src={imageDynamic} alt="Picture of the author" style={background ? styles.backgroundImage : styles.image} />
  )
}
