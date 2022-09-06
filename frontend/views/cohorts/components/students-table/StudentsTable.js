import { useEffect, useState } from 'react'
import { Paginator } from 'components/paginator'
import { sortArray } from 'utils/Array'
import { TableHeader } from '.'

export const StudentsTable = ({ initialData = [] }) => {
  const [tableData, setTableData] = useState([])
  const [data, setData] = useState([])

  useEffect(() => setTableData(initialData), [initialData])

  const toggleSort = (isAscending, key = 'firstname') => setTableData(sortArray(initialData, { key, isAscending }))

  return (
    <div className="table-container overflow-y-auto">
      <table className="table overflow-hidden z-50">
        <TableHeader toggleSort={toggleSort} />
        <tbody>
          {data.map(({ firstname, lastname }, index) => (
            <tr key={`cohort${index}`}>
              <td className="text-center leading-4">
                {firstname} {lastname}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator setData={setData} data={tableData} />
    </div>
  )
}
