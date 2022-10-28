import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getCohorts } from 'redux/grade/actions'
import {
  getCompleteStudents,
  getStudentData,
  getStudentObservation,
  getStudentReport,
  getStudentsCohort,
} from 'redux/students/actions'
import { Paginator } from 'components/paginator'
import { StudentContext } from 'views/students/context/Provider'
import { TableHeader } from './TableHeader'
import { Select } from 'components/select'

export const StudentsTable = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const {
    grades: { cohorts },
    auth: { user },
  } = useSelector(state => state)

  const { students, setStudents, studentsTable } = useContext(StudentContext)

  const [subject, setSubject] = useState('')
  const [newCohort, setNewCohort] = useState(false)
  const [cohotStudent, setCohotStudent] = useState('')

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

  const getstudenrbulletin = async (id, cohort) => {
    await dispatch(getStudentReport(id, cohort || cohotStudent))
    router.push('/boletin')
  }

  const getCourses = () => {
    const grades = []
    cohorts?.map(cohort => grades.push({ value: cohort.id, label: cohort.name }))
    return grades
  }

  const selectCohort = ({ target }) => {
    const { value } = target
    setCohotStudent(value)
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
            <TableHeader admin={user.role === 'admin'} />
            <tbody>
              {students?.map((item, index) => (
                <tr key={`student${index}`}>
                  <td className="subjects__table-field text-center leading-4">{item['DisplayName']}</td>
                  <td className="subjects__view-field text-center">
                    <i
                      className="fa-solid fa-eye pointer"
                      onClick={() => getStudentInformation(item['DisplayName'], item['id'])}
                    />
                  </td>
                  {user.role === 'admin' ? (
                    <td className="subjects__view-field text-center">
                      <i
                        className="fa-regular fa-address-book pointer"
                        onClick={() => getstudenrbulletin(item['id'], item['cohort'])}
                      />
                    </td>
                  ) : null}
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
