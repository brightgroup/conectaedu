import React, { useEffect, useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { StudentBulletin } from 'components/student-bulletin'
import { styles } from '.'
import { getInstitutions } from 'redux/institutions/actions'
import { FifthBulletin } from 'components/fifth-bulletin'

export const Bulletin = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const { period, fifth } = router.query

  const {
    students: { studentReport },
    courses: { course, courseAverage },
    institutions: { institutions },
  } = useSelector(state => state)

  const [finalReport, setFinalReport] = useState('')

  useEffect(() => {
    dispatch(getInstitutions())
    setFinalReport(fifth)
  }, [])

  const render = report => {
    if (report !== 'true') {
      return (
        <PDFViewer style={styles.page}>
          <StudentBulletin
            studentReport={studentReport}
            period={period}
            course={course}
            institutions={institutions}
            courseAverage={courseAverage}
          />
        </PDFViewer>
      )
    }

    return (
      <PDFViewer style={styles.page}>
        <FifthBulletin studentReport={studentReport} institutions={institutions} course={course} />
      </PDFViewer>
    )
  }

  return (
    <div>
      <button onClick={() => router.push('/estudiantes')}>
        <i className="fa-solid fa-chevron-left" /> volver
      </button>
      {render(finalReport)}
    </div>
  )
}
