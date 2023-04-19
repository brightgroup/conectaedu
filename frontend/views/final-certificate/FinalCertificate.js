import { useEffect, useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import { useDispatch, useSelector } from 'react-redux'
import { getFoliosMorning } from 'redux/grade/actions'
import { SixthBulletin } from 'components/sixth-bulletin'
import { getInstitutions } from 'redux/institutions/actions'
import { styles } from '.'
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

  let folio = 1

  for (const course in folios) {
    const students = folios[course]
    for (const studet of students) {
      studet.folio = folio
      folio++
    }
  }

  return (
    <>
      <div className="flex flex-col bg-white w-fit p-20 mx-auto mt-20">
        <h2 className="text-center form__title text-blue mb-6">Descargar folio por jornada</h2>

        <button className="bg-gray-400 mb-8 rounded px-4 py-2">Descargar informe final</button>
        {!!courses.length && (
          <Select options={courses} initialValue="Seleciona curso" handleChange={e => handleSelect(e)} value={course} />
        )}

        <div className="flex justify-center">
          {/* {show && (
            <PDFDownloadLink fileName={`FOLIOS`} document={<FolioCourse institutions={institutions} folios={folios} />}>
            <button className={`px-3 py-1 text-white bg-gray-600 rounded pointer`}>Descargar</button>
            </PDFDownloadLink>
          )} */}
        </div>
      </div>
      {show && (
        <PDFViewer style={styles.page}>
          <SixthBulletin
            institutions={institutions}
            folios={folios[course]}
            subjects={subjects}
            course={course.replace(/\s+/g, '')}
          />
        </PDFViewer>
      )}
    </>
  )
}
