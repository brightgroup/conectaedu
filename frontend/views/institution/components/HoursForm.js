import { Select } from 'components/select'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCohorts, getCoursesCohort, updateCourseTime } from 'redux/grade/actions'

export const HoursForm = () => {
  const dispatch = useDispatch()
  const { cohorts, courses } = useSelector(state => state.grades)

  const [idCourse, setIdCourse] = useState('')
  const [updateCourses, setUpdateCourses] = useState(courses)
  const [edit, setEdit] = useState({})

  const selectCohort = ({ target }) => {
    const { value } = target
    setIdCourse(value)
  }

  const getCourses = () => {
    const grades = []
    cohorts?.map(cohort => grades.push({ value: cohort.id, label: cohort.name }))
    return grades
  }

  useEffect(() => {
    if (idCourse) {
      dispatch(getCoursesCohort(idCourse))
    }
  }, [idCourse])

  useEffect(() => {
    setUpdateCourses(courses)
  }, [courses])

  useEffect(() => {
    dispatch(getCohorts())
  }, [])

  const activeEdition = (e, id) => {
    e.preventDefault()
    const courses = updateCourses.map((course, index) => {
      if (course.id === id) {
        return {
          ...course,
          edit: true,
        }
      }
      return course
    })
    setUpdateCourses(courses)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setEdit({ ...edit, [name]: value })
  }

  const updateCourse = (e, id) => {
    e.preventDefault()
    dispatch(updateCourseTime({ id: id, hours: edit[id] }, idCourse))
  }

  return (
    // <form className="w-9/12 m-20 overflow-y-scroll border border-red-900">
    <form className={`w-full h-full`}>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="mb-2">
          <h4 className="text-lg font-bold mb-4">{`Intensidad horaria por materia.`}</h4>
          <Select
            options={getCourses()}
            initialValue="Seleccione Curso"
            handleChange={selectCohort}
            allOption="Todos los grados"
            value={idCourse}
          />
        </div>
        <div className="overflow-y-scroll list_courses_time_scroll">
          {Array.isArray(updateCourses) &&
            updateCourses?.map((course, index) => (
              <div className="flex justify-between" key={course.id}>
                <h3 className="w-3/4">{course.fullname}</h3>
                {course.edit ? (
                  <>
                    <input
                      type="number"
                      onChange={e => handleChange(e)}
                      name={course.id}
                      className="w-10 border border-gray-400 mx-4 mx-2 h-6 mt-1 pl-1 list_courses_time rounded"
                    />
                    <button
                      className="w1/6 px-2 bg-gray-400 my-1 h-6 mx-3 rounded hover:text-white active:transform active:translate-y-1"
                      onClick={e => updateCourse(e, course.id)}
                    >
                      actualizar
                    </button>
                  </>
                ) : (
                  <>
                    <h4>{course?.hours === null ? 0 : course.hours}</h4>
                    <button
                      className="w1/6 px-2 bg-gray-400 my-1 h-6 mx-3 rounded hover:text-white active:transform active:translate-y-1"
                      onClick={e => activeEdition(e, course.id)}
                    >
                      Editar
                    </button>
                  </>
                )}
              </div>
            ))}
        </div>
      </div>
    </form>
  )
}
