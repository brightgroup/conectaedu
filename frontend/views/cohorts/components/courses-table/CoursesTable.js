import { useEffect, useState } from 'react'
import { Paginator } from 'components/paginator'
import { sortArray } from 'utils/Array'
import { TableHeader } from '.'

export const CoursesTable = ({ initialData = [] }) => {
  const [tableData, setTableData] = useState([])
  const [data, setData] = useState([])

  useEffect(() => setTableData(initialData), [initialData])

  const toggleSort = isAscending => setTableData(sortArray(initialData, { key: 'fullname', isAscending }))

  return (
    <div className="table-container overflow-y-auto">
      <table className="table overflow-hidden z-50">
        <TableHeader toggleSort={toggleSort} />
        <tbody>
          {data.map(({ fullname }, index) => (
            <tr key={`course${index}`}>
              <td className="text-center leading-4">{fullname}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator setData={setData} data={tableData} />
    </div>
  )
}
