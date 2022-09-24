import { useState } from 'react'
import { firstLetterToUpperCase, toComparisonKey } from 'utils/Text'
import { Paginator } from 'components/paginator'
import { TableHeader } from './TableHeader'
import { COURSES, SUBJECTS } from '../..'

export const PercentageFailureTable = ({ data = {}, period = '' }) => {
  const [table, setTable] = useState(SUBJECTS)

  const getFailRate = (course, subject) => {
    const notes = data[`${subject.split(' ').join('_')}_${course}`] || []

    const result = notes?.filter(item =>
      item?.Notas?.some(
        item => toComparisonKey(item.Itemname) === toComparisonKey(period) && Number(item.Nota) && item.Nota < 3
      )
    )

    return notes.length ? ((result?.length * 100) / notes.length).toFixed(1) : '-'
  }

  return (
    <div>
      <h2 className="text-blue text-center font-black text-xl mb-2">PORCENTAJE DE REPROBACIÓN POR ÁREAS</h2>
      <div className="table-container overflow-y-auto bg-transparent">
        <table className="table m-auto lock-column">
          <TableHeader />
          <tbody>
            {table.map((subject, index) => (
              <tr key={`${subject}${index}`}>
                <td className="text-center">{firstLetterToUpperCase(subject)}</td>
                {COURSES.map((course, index) => (
                  <td className="text-center" key={`${course}${index}`}>
                    {getFailRate(course, subject)}
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
