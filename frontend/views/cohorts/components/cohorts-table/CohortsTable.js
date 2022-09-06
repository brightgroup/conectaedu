import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Router from 'next/router'
import { Paginator } from 'components/paginator'
import { getCoursesByCohort, getStudentsByCohort } from 'redux/cohorts/actions'
import { sortArray } from 'utils/Array'
import { TableHeader } from '.'

export const CohortsTable = ({ data = [], setData = [], initialData = [] }) => {
  const dispatch = useDispatch()

  const [tableData, setTableData] = useState([])

  useEffect(() => setTableData(initialData), [initialData])

  const toggleSort = isAscending => setTableData(sortArray(initialData, { key: 'name', isAscending }))

  const viewTable = viewStudentsTable => {
    dispatch(viewStudentsTable ? getStudentsByCohort() : getCoursesByCohort())
    Router.push(`?tabla=${viewStudentsTable ? 'estudiantes' : 'cursos'}`)
  }

  return (
    <div className="table-container overflow-y-auto">
      <table className="table overflow-hidden z-50">
        <TableHeader toggleSort={toggleSort} />
        <tbody>
          {data.map(({ name }, index) => (
            <tr key={`cohort${index}`}>
              <td className="text-center leading-4">{name}</td>
              <td className="text-center">
                <p
                  className="flex items-center justify-center w-max m-auto cursor-pointer"
                  onClick={() => viewTable(true)}
                >
                  <i className="fa-solid fa-eye mr-2" />
                  Ver
                </p>
              </td>
              <td className="text-center">
                <p
                  className="flex items-center justify-center w-max m-auto cursor-pointer"
                  onClick={() => viewTable(false)}
                >
                  <i className="fa-solid fa-eye mr-2" />
                  Ver
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator setData={setData} data={tableData} />
    </div>
  )
}