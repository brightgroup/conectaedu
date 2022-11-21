import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'components/select'
import { getCohorts } from 'redux/grade/actions'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { getCourse, getCouseAverage, getNotesCourse, getSheets } from 'redux/courses/actions'
import { getInstitutions } from 'redux/institutions/actions'
import { getStudentsCohort } from 'redux/students/actions'
import { CourseBulletin } from 'components/course-bulletin'
import { getCourseDescription, getStudents } from 'utils/Bulletin'
import { PERIODS } from '.'

export const BulletinCourse = () => {
  const dispatch = useDispatch()

  const {
    grades: { cohorts },
    courses: { course: infocourse, courseNotes, sheet, courseAverage },
    institutions: { institutions },
    students: { cohortStudent },
  } = useSelector(state => state)

  const [course, setCourse] = useState({})
  const [toggleDownload, setToggleDownload] = useState(false)

  useEffect(() => {
    dispatch(getCohorts())
    dispatch(getInstitutions())
  }, [])

  useEffect(() => {
    setToggleDownload(false)
    if (course.course) {
      dispatch(getCourse(course.course))
      dispatch(getStudentsCohort(course.course))
    }
  }, [course.course])

  useEffect(() => {
    if (cohortStudent?.length && course.course)
      dispatch(getNotesCourse(getvalueObject(cohortStudent, 'id'), course.course))
  }, [cohortStudent])

  useEffect(() => {
    if (courseNotes?.length) setToggleDownload(true)
  }, [courseNotes])

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

  const selectCohort = ({ target }, name) => {
    const { value } = target
    dispatch(getSheets(value))
    setCourse({
      ...course,
      [name]: value,
    })
    if (sheet) {
      dispatch(getCouseAverage(getStudents(sheet, value)))
    }
  }

  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <div className="w-6/12 min-w-min h-50 bg-white p-10 rounded">
        <h2 className="text-center form__title text-blue">Descargar boletin por curso</h2>
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
          {toggleDownload ? (
            <PDFDownload
              period={course.period || 1}
              course={infocourse}
              institutions={institutions}
              courseReport={courseNotes}
              courseAverage={courseAverage}
            />
          ) : course.course && course.period ? (
            <label className="ml-6 font-bold text-[#354052]">Generando PDF, por favor espere...</label>
          ) : null}
        </div>
      </div>
    </div>
  )
}

const PDFDownload = ({ courseReport, institutions, course, period, courseAverage }) => {
  const [viewComponet, setViewComponet] = useState(false)

  const toggleViwe = () => {
    setTimeout(() => {
      setViewComponet(true)
    }, 1)
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
