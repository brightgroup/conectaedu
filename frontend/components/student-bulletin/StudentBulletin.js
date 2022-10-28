import React, { useMemo } from 'react'
import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import { PerformanceTable } from './PerformanceTable'
import { TableNotes } from './TableNotes'
import { image, styles } from '.'

export const StudentBulletin = ({ studentReport, schoolData }) => {
  const courses = useMemo(() => Object.keys(studentReport), [studentReport])
  const coursesPageOne = courses.slice(0, 6)
  const coursesPagetwo = courses.slice(6, -1)

  const getNameStudent = () => studentReport[courses.slice(0, 1)][0]?.student

  return (
    <Document>
      <Page>
        <View style={styles.container}>
          <View style={styles.container__header}>
            <View style={styles.container__header_image}>
              <Image src={schoolData?.URLImage || image} style={{ width: 60, height: 60 }} />
            </View>
            <View style={styles.container__header_title}>
              <View style={styles.container__description}>
                <Text style={styles.title}>{schoolData?.schoolName}</Text>
                <Text style={styles.subtitle}>{schoolData?.addres}</Text>
                <Text style={styles.subtitle}>{schoolData.municipality}</Text>
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
                  <Text style={styles.text__student}>MARIA AMPARO ROA CASTRO</Text>
                </View>
                <View style={{ width: '27.5%', fontSize: 10 }}>
                  <View style={{ paddingLeft: 6 }}>
                    <Text style={styles.subtitle}>2022</Text>
                  </View>
                  <View style={styles.box_background}>
                    <Text style={styles.title}>GRADO</Text>
                  </View>
                  <View style={{ paddingLeft: 6, paddingTop: 2 }}>
                    <Text style={styles.subtitle}>QUINTO LIBERTADOR</Text>
                  </View>
                </View>
                <View style={{ width: '14%' }}>
                  <View style={{ paddingLeft: 6 }}>
                    <Text style={styles.subtitle}>3</Text>
                  </View>
                  <View style={styles.box_background}>
                    <Text style={styles.title}>JORNADA</Text>
                  </View>
                  <View style={{ paddingLeft: 6, paddingTop: 2 }}>
                    <Text style={styles.subtitle}>MAÑANA</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: 700, width: '100%', marginTop: 10 }}>
            <Image
              src={schoolData?.URLImage || image}
              style={{ width: '100%', opacity: 0.2, marginTop: 100, zIndex: '10' }}
            />
            <View style={{ width: '100%', position: 'absolute' }}>
              <View>
                <TableNotes courses={courses} studentReport={studentReport} />
              </View>
              <View>
                <Text style={styles.description}>
                  Convenciones: FP (Fallas Periodo) F.J (Fallas Justificadas) F.I (Fallas injustificadas) P (Periodo) Pt
                  (Puesto)
                </Text>
              </View>
              <View>
                <PerformanceTable courses={coursesPageOne} studentReport={studentReport} />
              </View>
            </View>
          </View>
        </View>
      </Page>
      <Page>
        <View style={styles.container}>
          <View style={{ height: '100%', width: '100%' }}>
            <Image
              src={schoolData?.URLImage || image}
              style={{ width: '100%', opacity: 0.2, marginTop: 100, zIndex: '10' }}
            />
            <View style={{ width: '100%', position: 'absolute' }}>
              <View>
                <PerformanceTable courses={coursesPagetwo} studentReport={studentReport} />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 100,
                position: 'absolute',
                flexDirection: 'row',
                border: 1,
                bottom: 20,
                borderColor: '#AEAAAA',
              }}
            >
              <View style={{ flex: 1, borderRight: 1, borderColor: '#AEAAAA', padding: 10 }}>
                <Text style={styles.subtitle}>Observaciones:</Text>
              </View>
              <View style={{ flex: 1, borderRight: 1, borderColor: '#AEAAAA', padding: 10 }}>
                <Text style={styles.subtitle}>Firma director de curso</Text>
              </View>
              <View style={{ flex: 1, padding: 10 }}>
                <Text style={styles.subtitle}>Firma Rector</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
