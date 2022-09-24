import { useState } from 'react'
import { firstLetterToUpperCase, toComparisonKey } from 'utils/Text'
import { Paginator } from 'components/paginator'
import { TableHeader } from './TableHeader'
import { COURSES, SUBJECTS, TABLE_TITLE } from '../..'
import { TABLE_ROWS } from '.'

export const LostAreasTable = ({ data = {}, period = '' }) => {
  const [table, setTable] = useState(SUBJECTS)

  const getFailRate = course => {
    const subjects = Object.keys(data).filter(item => item.includes(course))

    subjects.forEach(subject => {
      const notes = data[subject]

      // if (course === '901') {
      //   console.log('las notes', notes)
      // }
    })
  }

  // console.log('ACA', data)
  // console.log(
  //   'MATERIAS',
  //   Object.keys(data).filter(item => item.includes('901'))
  // )

  return (
    <div>
      <h2 className="text-blue text-center font-black text-xl mb-2">ÁREAS PERDIDAS {TABLE_TITLE[period]}</h2>
      <div className="table-container overflow-y-auto bg-transparent">
        <table className="table m-auto lock-column">
          <TableHeader />
          <tbody>
            {TABLE_ROWS.map(({ label }, index) => (
              <tr key={`${label}${index}`}>
                <td className="text-center">{label}</td>
                {COURSES.map((course, index) => (
                  <td className="text-center" key={`${course}${index}`}>
                    {getFailRate(course)}-
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
