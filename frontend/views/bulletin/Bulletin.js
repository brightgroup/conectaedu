import { PDFViewer } from '@react-pdf/renderer'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { StudentBulletin } from 'components/student-bulletin'
import { styles } from '.'
import { getInstitutions } from 'redux/institutions/actions'

export const Bulletin = () => {
  const router = useRouter()

  const { period } = router.query

  const {
    students: { studentReport },
    courses: { course },
    institutions: { institutions },
  } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInstitutions())
  }, [])

  return (
    <div>
      <button onClick={() => router.push('/estudiantes')}>
        <i className="fa-solid fa-chevron-left" /> volver
      </button>

      <PDFViewer style={styles.page}>
        <StudentBulletin studentReport={studentReport} period={period} course={course} institutions={institutions} />
      </PDFViewer>
    </div>
  )
}
