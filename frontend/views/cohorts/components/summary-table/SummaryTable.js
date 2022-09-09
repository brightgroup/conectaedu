import { Fragment } from 'react'
import { toInteger } from 'utils/Number'
import { TableHeader, INDICATORS, FAILURE_KEYS, PERIOD_KEYS } from '.'

export const SummaryTable = ({ subjects = [], data = [] }) => {
  const getValue = (array, key) => array?.find(item => item.item.toLowerCase() === key.toLowerCase())?.grade || '-'

  const getTotalFailures = array => {
    return FAILURE_KEYS.map(fail => toInteger(getValue(array, fail), true))?.reduce((total, item) => (total += item), 0)
  }

  return (
    <div className="table-container overflow-y-auto">
      <table className="table overflow-hidden z-50">
        <TableHeader subjects={subjects} />
        <tbody>
          {data.map(({ student, ...item }, index) => {
            return (
              <tr key={`item${index}`}>
                <td className="text-center">{student}</td>
                {subjects.map(subject => {
                  const subjectResults = item[subject]
                  const failure = getTotalFailures(subjectResults)
                  return (
                    <Fragment key={`subject${subject}`}>
                      {PERIOD_KEYS.map(period => (
                        <Fragment key={period}>
                          <td className="text-center">{getValue(subjectResults, period)}</td>
                        </Fragment>
                      ))}
                      {FAILURE_KEYS.map(fail => (
                        <Fragment key={fail}>
                          <td className="text-center">{toInteger(getValue(subjectResults, fail))}</td>
                        </Fragment>
                      ))}
                      <td className={`text-center ${failure ? 'bg-red-600 text-white' : ''}`}>{failure}</td>
                      {INDICATORS.map(indicator => (
                        <Fragment key={indicator}>
                          <td className="text-center">{getValue(subjectResults, indicator)}</td>
                        </Fragment>
                      ))}
                    </Fragment>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

// import { Fragment } from 'react'
// import { toInteger } from 'utils/Number'
// import { TableHeader, INDICATORS, FAILURE_KEYS, PERIOD_KEYS } from '.'

// export const SummaryTable = ({ subjects = [], data = [] }) => {
//   const getValue = (array, key) => array?.find(item => item.item.toLowerCase() === key.toLowerCase())?.grade || '-'

//   const getTotalFailures = array => {
//     return FAILURE_KEYS.map(fail => toInteger(getValue(array, fail), true))?.reduce((total, item) => (total += item), 0)
//   }

//   return (
//     <div className="table-container overflow-y-auto">
//       <table className="table overflow-hidden z-50">
//         <TableHeader subjects={subjects} />
//         <tbody>
//           {data.map(({ student, ...item }, index) => {
//             return (
//               <tr key={`item${index}`}>
//                 <td className="text-center">{student}</td>
//                 {subjects.map(subject => {
//                   const subjectResults = item[subject]
//                   const failure = getTotalFailures(subjectResults)
//                   return (
//                     <Fragment key={`subject${subject}`}>
//                       {PERIOD_KEYS.map(period => (
//                         <Fragment key={period}>
//                           <td className="text-center">{getValue(subjectResults, period)}</td>
//                         </Fragment>
//                       ))}
//                       {FAILURE_KEYS.map(fail => (
//                         <Fragment key={fail}>
//                           <td className="text-center">{toInteger(getValue(subjectResults, fail))}</td>
//                         </Fragment>
//                       ))}
//                       <td className={`text-center ${failure ? 'bg-red-600 text-white' : ''}`}>{failure}</td>
//                       {INDICATORS.map(indicator => (
//                         <Fragment key={indicator}>
//                           <td className="text-center">{getValue(subjectResults, indicator)}</td>
//                         </Fragment>
//                       ))}
//                     </Fragment>
//                   )
//                 })}
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   )
// }
