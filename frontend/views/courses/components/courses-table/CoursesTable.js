import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Router from 'next/router'
import { Paginator } from 'components/paginator'
import { getSheets } from 'redux/courses/actions'
import { sortArray } from 'utils/Array'
import { TableHeader } from '.'

export const CoursesTable = ({ data = [], setData = [], initialData = [] }) => {
  const dispatch = useDispatch()

  const [tableData, setTableData] = useState([])

  useEffect(() => setTableData(initialData), [initialData])

  const toggleSort = isAscending => setTableData(sortArray(initialData, { key: 'name', isAscending }))

  const viewCourse = async (course, id) => {
    await dispatch(getSheets(id))
    Router.push(`?tabla=sabana-${course.toLowerCase()}`)
  }

  return (
    <div className="table-container overflow-y-auto">
      <table className="table overflow-hidden z-50">
        <TableHeader toggleSort={toggleSort} />
        <tbody>
          {data.map(({ name, id }, index) => (
            <tr key={`cohort${index}`}>
              <td className="text-center leading-4">{name}</td>
              <td className="text-center">
                <span className="text-blue underline cursor-pointer" onClick={() => viewCourse(name, id)}>
                  Ver sabana
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator setData={setData} data={tableData} />
    </div>
  )
}
