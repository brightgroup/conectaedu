import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Paginator } from 'components/paginator'
import { getStudentData } from 'redux/students/actions'
import { StudentContext } from 'views/students/context/Provider'
import { TableHeader } from './TableHeader'

export const StudentsTable = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { students, setStudents, studentsTable } = useContext(StudentContext)

  const getStudentInformation = async student => {
    await dispatch(getStudentData())
    router.push(`?nombre=${student}`)
  }

  return (
    <div className="table-container overflow-y-auto">
      {!!studentsTable?.length && (
        <>
          <table className="table overflow-hidden z-50">
            <TableHeader />
            <tbody>
              {students.map((item, index) => (
                <tr key={`student${index}`}>
                  <td className="subjects__table-field text-center leading-4">{item['Display Name']}</td>
                  <td className="subjects__view-field text-center">
                    <i className="fa-solid fa-eye" onClick={() => getStudentInformation(item['Display Name'])} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      <Paginator setData={setStudents} data={studentsTable} />
    </div>
  )
}
