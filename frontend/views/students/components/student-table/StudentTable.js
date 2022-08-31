import { useContext } from 'react'
import { Paginator } from 'components/paginator'
import { StudentContext } from 'views/students/context/Provider'
import { TableHeader } from './TableHeader'

export const StudentTable = () => {
  const { setStudent, studentTable, student } = useContext(StudentContext)

  return (
    <div className="table-container overflow-y-auto">
      {!!studentTable?.length && (
        <>
          <table className="table overflow-hidden z-50">
            <TableHeader />
            <tbody>
              {student.map(({ fullname, finalgrade }, index) => (
                <tr key={`student${index}`}>
                  <td className="courses__course-field text-center leading-4">{fullname}</td>
                  <td className="courses__view-field text-center">{finalgrade}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Paginator setData={setStudent} data={studentTable} />
        </>
      )}
    </div>
  )
}
