import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Router from 'next/router'
import { Paginator } from 'components/paginator'
import { sortArray } from 'utils/Array'
import { getStudentScores } from 'redux/students/actions'
import { TableHeader } from '.'

export const CoursesTable = ({ initialData = [] }) => {
  const dispatch = useDispatch()
  const [tableData, setTableData] = useState([])
  const [data, setData] = useState([])

  useEffect(() => setTableData(initialData), [initialData])

  const toggleSort = isAscending => setTableData(sortArray(initialData, { key: 'fullname', isAscending }))

  const viewCourse = async fullname => {
    await dispatch(getStudentScores())
    Router.push(`?tabla=estudiantes-de-${fullname.toLowerCase()}`)
  }

  return (
    <div className="table-container overflow-y-auto">
      <table className="table overflow-hidden z-50">
        <TableHeader toggleSort={toggleSort} />
        <tbody>
          {data.map(({ fullname: course }, index) => (
            <tr key={`course${index}`}>
              <td className="text-center leading-4">{course}</td>
              <td className="text-center">
                <i className="fa-solid fa-eye" onClick={() => viewCourse(course)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator setData={setData} data={tableData} />
    </div>
  )
}
