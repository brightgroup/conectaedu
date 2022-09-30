import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getCohorts } from 'redux/grade/actions'
import { getCompleteStudents, getStudentData, getStudentObservation, getStudentsCohort } from 'redux/students/actions'
import { Paginator } from 'components/paginator'
import { StudentContext } from 'views/students/context/Provider'
import { TableHeader } from './TableHeader'
import { Select } from 'components/select'

export const StudentsTable = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const {
    grades: { cohorts },
  } = useSelector(state => state)

  const { students, setStudents, studentsTable } = useContext(StudentContext)

  const [subject, setSubject] = useState('')
  const [newCohort, setNewCohort] = useState(false)

  useEffect(() => {
    dispatch(getCompleteStudents())
    dispatch(getCohorts())
    dispatch(getStudentObservation())
  }, [])

  const getStudentInformation = async (student, id) => {
    await dispatch(getStudentData())
    router.push({
      query: { nombre: student, id },
    })
  }

  const getCourses = () => {
    const grades = []
    cohorts?.map(cohort => grades.push({ value: cohort.id, label: cohort.name }))
    return grades
  }

  const selectCohort = ({ target }) => {
    const { value } = target
    setSubject(value)
    setNewCohort(true)
    dispatch(getStudentsCohort(value))
  }

  return (
    <div className="table-container overflow-y-auto">
      <div className="my-2 flex gap-2 justify-center">
        <Select
          options={getCourses()}
          initialValue="Filtrar por grado"
          handleChange={selectCohort}
          allOption="Todos los grados"
          value={subject}
        />
      </div>
      {!!studentsTable?.length && (
        <>
          <table className="table overflow-hidden z-50">
            <TableHeader />
            <tbody>
              {students?.map((item, index) => (
                <tr key={`student${index}`}>
                  <td className="subjects__table-field text-center leading-4">{item['DisplayName']}</td>
                  <td className="subjects__view-field text-center">
                    <i
                      className="fa-solid fa-eye"
                      onClick={() => getStudentInformation(item['DisplayName'], item['id'])}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      <Paginator setData={setStudents} data={studentsTable} newCohort={newCohort} setNewCohort={setNewCohort} />
    </div>
  )
}
