import { useState } from 'react'
import { firstLetterToUpperCase, toComparisonKey } from 'utils/Text'
import { Select } from 'components/select'
import { Paginator } from 'components/paginator'
import { COURSES, SUBJECTS, PERIODS, TABLE_TITLE } from '../..'
import { TableHeader } from '.'

export const FailureTable = ({ data = {}, period = '', setPeriod = () => {} }) => {
  const [table, setTable] = useState(SUBJECTS)

  const getFailedStudents = (course, subject) => {
    const notes = data[`${subject.split(' ').join('_')}_${course}`] || []

    const result = notes?.filter(item =>
      item?.Notas?.some(
        item => toComparisonKey(item.Itemname) === toComparisonKey(period) && Number(item.Nota) && item.Nota < 3
      )
    )

    return result?.length || '-'
  }

  const sortByPeriod = ({ target }) => setPeriod(target.value)

  return (
    <div>
      <h2 className="text-blue text-center font-black text-xl mb-2">ESTADISTICAS {TABLE_TITLE[period]}</h2>
      <h2 className="text-blue text-center font-black text-xl mb-2">REPROBACIÓN POR ÁREAS</h2>
      <div className="flex justify-end mb-2">
        <Select options={PERIODS} value={period} handleChange={sortByPeriod} />
      </div>
      <div className="table-container overflow-y-auto bg-transparent">
        <table className="table m-auto lock-column">
          <TableHeader />
          <tbody>
            {table.map((subject, index) => (
              <tr key={`${subject}${index}`}>
                <td className="text-center">{firstLetterToUpperCase(subject)}</td>
                {COURSES.map((course, index) => (
                  <td className="text-center" key={`${course}${index}`}>
                    {getFailedStudents(course, subject)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paginator setData={setTable} data={SUBJECTS} />
    </div>
  )
}
