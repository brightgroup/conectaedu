import { Fragment, useState } from 'react'
import { Select } from 'components/select'
import { getAverage, sortArray } from 'utils/Array'
import { toInteger } from 'utils/Number'
import { removeAccents } from 'utils/Text'
import { ALL, DEFAULT_VALUE } from 'constants/Select'
import { TableHeader, INDICATORS, PERIODS, SORTING_KEYS } from '.'

export const SummaryTable = ({ subjects = [], data = [], setData = [] }) => {
  const [periods, setPeriods] = useState(PERIODS)

  const getValue = (array, key) => array?.find(({ item }) => item.toLowerCase() === key.toLowerCase())?.grade || '-'

  const getTotalFailures = array => {
    return periods
      .map(({ label: fail }) => toInteger(getValue(array, `fallas acumuladas ${removeAccents(fail)}`), true))
      ?.reduce((total, item) => (total += item), 0)
  }

  const getNoteAverage = notes => {
    const data = notes.filter(note => !isNaN(note))
    return data.length ? getAverage(data).toFixed(2) : '-'
  }

  const sortByPeriod = ({ target }) => {
    const { value } = target
    if (value === ALL) return setPeriods(PERIODS)
    if (value !== DEFAULT_VALUE) setPeriods(PERIODS.filter(({ value: option }) => option === value))
  }

  // const toggleSort = isAscending => setData(sortArray(data, { key: 'student', isAscending }))

  const sortByPosition = ({ target }) => setData(sortArray(data, { key: target.value }))

  return (
    <div>
      <div className="flex justify-end my-2 gap-2">
        <Select options={PERIODS} initialValue="Filtrar por período" handleChange={sortByPeriod} lastOption />
        <Select options={SORTING_KEYS} initialValue="Ordenar por..." handleChange={sortByPosition} />
      </div>
      <div className="table-container overflow-y-auto">
        <table className="table overflow-hidden z-50">
          <TableHeader subjects={subjects} periods={periods} />
          <tbody>
            {data.map(({ student, position, ...item }, index) => {
              return (
                <tr key={`item${index}`}>
                  <td className="text-center">{student}</td>
                  <td className="text-center">{position}</td>
                  {subjects.map(subject => {
                    const subjectResults = item[subject]
                    const failures = getTotalFailures(subjectResults)
                    const notes = periods.map(({ value: period }) => getValue(subjectResults, period))
                    return (
                      <Fragment key={`subject${subject}`}>
                        {periods.map(({ value }) => (
                          <Fragment key={value}>
                            <td className="text-center">{getValue(subjectResults, value)}</td>
                          </Fragment>
                        ))}
                        <td className="text-center">{getNoteAverage(notes)}</td>
                        {periods.map(({ label: fail }, index) => (
                          <Fragment key={`failure${index}`}>
                            <td className="text-center">
                              {toInteger(getValue(subjectResults, `fallas acumuladas ${removeAccents(fail)}`))}
                            </td>
                          </Fragment>
                        ))}
                        <td className={`text-center ${failures ? 'bg-red-600 text-white' : ''}`}>{failures}</td>
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
    </div>
  )
}

// import { Fragment, useState } from 'react'
// import { Select } from 'components/select'
// import { getAverage, sortArray } from 'utils/Array'
// import { toInteger } from 'utils/Number'
// import { removeAccents } from 'utils/Text'
// import { ALL, DEFAULT_VALUE } from 'constants/Select'
// import { TableHeader, INDICATORS, PERIODS } from '.'

// export const SummaryTable = ({ subjects = [], data = [], setData = [] }) => {
//   const [periods, setPeriods] = useState(PERIODS)

//   const getValue = (array, key) => array?.find(({ item }) => item.toLowerCase() === key.toLowerCase())?.grade || '-'

//   const getTotalFailures = array => {
//     return periods
//       .map(({ label: fail }) => toInteger(getValue(array, `fallas acumuladas ${removeAccents(fail)}`), true))
//       ?.reduce((total, item) => (total += item), 0)
//   }

//   const getNoteAverage = notes => {
//     const data = notes.filter(note => !isNaN(note))
//     return data.length ? getAverage(data).toFixed(2) : '-'
//   }

//   const handleChangeOption = ({ target }) => {
//     const { value } = target
//     if (value === ALL) return setPeriods(PERIODS)
//     if (value !== DEFAULT_VALUE) setPeriods(PERIODS.filter(({ value: option }) => option === value))
//   }

//   const toggleSort = isAscending => setData(sortArray(data, { key: 'student', isAscending }))

//   return (
//     <div>
//       <div className="flex justify-end my-2">
//         <Select options={PERIODS} initialValue="Filtrar por período" handleChange={handleChangeOption} />
//       </div>
//       <div className="table-container overflow-y-auto">
//         <table className="table overflow-hidden z-50">
//           <TableHeader subjects={subjects} periods={periods} toggleSort={toggleSort} />
//           <tbody>
//             {data.map(({ student, ...item }, index) => {
//               return (
//                 <tr key={`item${index}`}>
//                   <td className="text-center">{student}</td>
//                   {subjects.map(subject => {
//                     const subjectResults = item[subject]
//                     const failures = getTotalFailures(subjectResults)
//                     const notes = periods.map(({ value: period }) => getValue(subjectResults, period))

//                     return (
//                       <Fragment key={`subject${subject}`}>
//                         {periods.map(({ value }) => (
//                           <Fragment key={value}>
//                             <td className="text-center">{getValue(subjectResults, value)}</td>
//                           </Fragment>
//                         ))}
//                         <td className="text-center">{getNoteAverage(notes)}</td>
//                         {periods.map(({ label: fail }, index) => (
//                           <Fragment key={`failure${index}`}>
//                             <td className="text-center">
//                               {toInteger(getValue(subjectResults, `fallas acumuladas ${removeAccents(fail)}`))}
//                             </td>
//                           </Fragment>
//                         ))}
//                         <td className={`text-center ${failures ? 'bg-red-600 text-white' : ''}`}>{failures}</td>
//                         {INDICATORS.map(indicator => (
//                           <Fragment key={indicator}>
//                             <td className="text-center">{getValue(subjectResults, indicator)}</td>
//                           </Fragment>
//                         ))}
//                       </Fragment>
//                     )
//                   })}
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }
