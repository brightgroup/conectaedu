import { useEffect, useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { useDispatch, useSelector } from 'react-redux'
import { getFoliosMorning } from 'redux/grade/actions'
import { SixthBulletin } from 'components/sixth-bulletin'
import { getInstitutions } from 'redux/institutions/actions'
import { FOLIO_NUMBER, styles } from '.'
import { getSubjects } from 'redux/subjects/actions'
import { Select } from 'components/select'

export const FinalCertificate = () => {
  const [show, setShow] = useState(false)
  const [course, setCourse] = useState('')
  const [courses, setCourses] = useState([])

  const dispatch = useDispatch()

  const {
    institutions: { institutions },
    grades: { cohorts, folios },
    subjects: { subjects },
  } = useSelector(state => state)

  useEffect(() => {
    dispatch(getSubjects())
    dispatch(getInstitutions())
  }, [])

  useEffect(() => {
    dispatch(getFoliosMorning())
  }, [])

  useEffect(() => {
    getCourses()
  }, [cohorts])

  const getCourses = () => {
    const grades = []
    cohorts?.map(cohort => grades.push({ value: cohort.id, label: cohort.name }))
    return grades
  }

  useEffect(() => {
    const grades = []
    const keys = Object.keys(folios)
    keys.map(item => grades.push({ value: item, label: item }))
    setCourses(grades)
  }, [folios])

  const handleSelect = e => {
    const { value } = e.target
    setCourse(value)
    setShow(true)
  }

  console.log(course ,FOLIO_NUMBER[course])

  return (
    <>
      <div className="flex flex-col bg-white w-fit p-20 mx-auto mb-4">
        <h2 className="text-center form__title text-blue mb-6">Descargar informe final</h2>

        <div className="flex justify-center flex-col items-center mb-4">
          <p className="mb-3">
            {!!courses.length ? 'Selecciona un curso de la lista para descargar' : 'Cargando información de cursos...'}
          </p>
          {!!courses.length && (
            <Select
              options={courses}
              initialValue="Seleciona curso"
              handleChange={e => handleSelect(e)}
              value={course}
            />
          )}
        </div>
        <div className="flex justify-center">
        </div>
      </div>
      {show && (
        <PDFViewer style={styles.page}>
          <SixthBulletin
            institutions={institutions}
            folios={folios[course]}
            folio={FOLIO_NUMBER[course]}
            subjects={subjects}
            course={course.replace(/\s+/g, '')}
          />
        </PDFViewer>
      )}
    </>
  )
}
