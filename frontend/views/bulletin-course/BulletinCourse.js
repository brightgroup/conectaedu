import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'components/select'
import { getCohorts, getCoursesCohort } from 'redux/grade/actions'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { getCourse, getCouseAverage, getNotesCourse, getNotesCourse2, getSheets } from 'redux/courses/actions'
import { getInstitutions } from 'redux/institutions/actions'
import { getStudentsCohort } from 'redux/students/actions'
import { CourseBulletin } from 'components/course-bulletin'
import { getCourseDescription, getStudents } from 'utils/Bulletin'
import { setLoaderStatus } from 'redux/loader/actions'
import { FifthCourseBulletin } from 'components/fifth-course-bulletin'
import { PERIODS } from '.'

export const BulletinCourse = () => {
  const dispatch = useDispatch()

  const {
    grades: { cohorts, courses },
    courses: { course: infocourse, courseNotes, courseNotes2 = [], sheet, courseAverage },
    institutions: { institutions },
    students: { cohortStudent },
    auth: { user },
  } = useSelector(state => state)

  const [course, setCourse] = useState({})
  const [toggleDownload, setToggleDownload] = useState(false)
  const [students2, setStudents2] = useState([])

  useEffect(() => {
    dispatch(getCohorts())
    dispatch(getInstitutions())
  }, [])

  useEffect(() => {
    if (course.period && courseNotes2.length) setToggleDownload(true)
  }, [course.period, courseNotes2])

  useEffect(() => {
    if (course.period) setToggleDownload(true)
  }, [course.period])

  const getCourses = () => {
    const grades = []
    cohorts?.map(cohort => grades.push({ value: cohort.id, label: cohort.name }))
    return grades
  }

  const getvalueObject = (array, key) => {
    const listKeys = []
    array.map(item => listKeys.push(item[key]))
    return listKeys
  }

  const selectCohort = async ({ target }, name) => {
    const { value } = target
    setCourse({
      ...course,
      [name]: value,
    })

    if (name === 'period') {
      dispatch(setLoaderStatus(true))
      await dispatch(getNotesCourse2(getvalueObject(students2, 'id'), course.course))
      dispatch(setLoaderStatus(false))

      if (sheet) {
        dispatch(getCouseAverage(getStudents(sheet, value)))
      }
    } else {
      dispatch(getCourse(value))
      const students = await dispatch(getStudentsCohort(value))
      const half = getHalfArray(students)
      const firstHalf = students.slice(0, half)
      await dispatch(getSheets(value))

      if (firstHalf.length) {
        dispatch(setLoaderStatus(true))
        await dispatch(getNotesCourse(getvalueObject(firstHalf, 'id'), value))
        dispatch(setLoaderStatus(false))
        setStudents2(students.slice(half, students.length))
      }
    }
    dispatch(getCoursesCohort(value))
  }

  const getHalfArray = array => Math.round(array.length / 2)

  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <div className="w-6/12 min-w-min h-50 bg-white p-10 rounded">
        <h2 className="text-center form__title text-blue">Descargar boletin por curso</h2>
        {user.role === 'admin' ? (
          <>
            <div className="flex gap-5 justify-center mb-4">
              <div className="flex flex-col gap-2">
                <label className="ml-6 font-bold text-[#354052]">Seleccione grado</label>
                <Select
                  options={getCourses()}
                  initialValue="Grado"
                  handleChange={e => selectCohort(e, 'course')}
                  value={course.course}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="ml-6 font-bold text-[#354052]">Seleccione periodo</label>
                <Select
                  options={PERIODS}
                  initialValue="Periodo"
                  handleChange={e => selectCohort(e, 'period')}
                  value={course.period}
                />
              </div>
            </div>
            <div className="flex justify-center">
              {course.period !== '5' && toggleDownload ? (
                <PDFDownload
                  period={course.period || 1}
                  course={infocourse}
                  institutions={institutions}
                  courseReport={[...courseNotes, ...courseNotes2]}
                  courseAverage={courseAverage}
                />
              ) : toggleDownload ? (
                <PDFFifthBulletin
                  courseReport={[...courseNotes, ...courseNotes2]}
                  course={infocourse}
                  institutions={institutions}
                  hoursCourse={courses}
                />
              ) : null}
            </div>
          </>
        ) : (
          <h2 className="text-center form__title text-blue">campo no disponible</h2>
        )}
      </div>
    </div>
  )
}

const PDFDownload = ({ courseReport, institutions, course, period, courseAverage }) => {
  const [viewComponet, setViewComponet] = useState(false)

  const toggleViwe = () => {
    setTimeout(() => {
      setViewComponet(true)
    }, 17000)
  }

  useEffect(() => {
    toggleViwe()
  }, [])

  return (
    <>
      <PDFDownloadLink
        document={
          <CourseBulletin
            period={period}
            course={course}
            institutions={institutions}
            courseReport={courseReport}
            courseAverage={courseAverage}
          />
        }
        fileName={`${getCourseDescription(course, 'name')} - Boletines`}
      >
        <button className={`px-3 py-1 text-white bg-gray-600 rounded pointer ${!viewComponet ? 'hidden' : null}`}>
          Descargar PDF
        </button>
      </PDFDownloadLink>
      <label className={`ml-6 font-bold text-[#354052] ${viewComponet ? 'hidden' : null}`}>
        Generando PDF, por favor espere...
      </label>
    </>
  )
}

const PDFFifthBulletin = ({ courseReport, institutions, course, hoursCourse }) => {
  const [viewComponet, setViewComponet] = useState(false)

  const toggleViwe = () => {
    setTimeout(() => {
      setViewComponet(true)
    }, 2000)
  }

  useEffect(() => {
    toggleViwe()
  }, [])
  return (
    <>
      <PDFDownloadLink
        document={
          <FifthCourseBulletin
            course={course}
            institutions={institutions}
            courseReport={courseReport}
            hoursCourse={hoursCourse}
          />
        }
        fileName={`${getCourseDescription(course, 'name')} - Boletines`}
      >
        <button className={`px-3 py-1 text-white bg-gray-600 rounded pointer ${!viewComponet ? 'hidden' : null}`}>
          Descargar Informe
        </button>
      </PDFDownloadLink>
      <label className={`ml-6 font-bold text-[#354052] ${viewComponet ? 'hidden' : null}`}>
        Generando informe, por favor espere...
      </label>
    </>
  )
}
