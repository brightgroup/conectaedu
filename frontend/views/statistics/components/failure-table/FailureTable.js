import { useState } from 'react'
import { firstLetterToUpperCase, toComparisonKey } from 'utils/Text'
import { Select } from 'components/select'
import { COURSES, SUBJECTS } from '../..'
import { TableHeader, PERIODS, TABLE_TITLE } from '.'

export const FailureTable = ({ data = {} }) => {
  const [period, setPeriod] = useState('Final')

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
      <h3 className="text-center font-bold text-2xl text-blue mb-2">Estadisticas {TABLE_TITLE[period]}</h3>

      <div className="flex justify-end mb-2">
        <Select options={PERIODS} value={period} handleChange={sortByPeriod} />
      </div>
      <div className="table-container overflow-y-auto">
        <table className="table m-auto lock-column">
          <TableHeader />
          <tbody>
            {SUBJECTS.map((subject, index) => (
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
    </div>
  )
}

// import { firstLetterToUpperCase } from 'utils/Text'
// import { Select } from 'components/select'
// import { COURSES, SUBJECTS } from '../..'
// import { TableHeader, PERIODS } from '.'

// export const FailureTable = ({ data = {} }) => {
//   const getFailedStudents = (course, subject) => {
//     const notes = data[`${subject.split(' ').join('_')}_${course}`] || []

//     const result = notes?.filter(item =>
//       item?.Notas?.some(item => item.Itemname === 'Final' && Number(item.Nota) && item.Nota < 3)
//     )

//     return result?.length || '-'
//   }

//   console.log('data', data)
//   return (
//     <div className="table-container overflow-y-auto">
//       <div className="flex justify-end mb-2">
//         <Select
//           options={PERIODS}
//           initialValue="Filtrar por período"
//           // handleChange={sortByPeriod}
//         />
//       </div>

//       <table className="table m-auto">
//         <TableHeader />
//         <tbody>
//           {SUBJECTS.map((subject, index) => (
//             <tr key={`${subject}${index}`}>
//               <td className="text-center">{firstLetterToUpperCase(subject)}</td>
//               {COURSES.map((course, index) => (
//                 <td className="text-center" key={`${course}${index}`}>
//                   {getFailedStudents(course, subject)}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }
