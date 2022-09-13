import { Fragment, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Select } from 'components/select'
import { sortArray } from 'utils/Array'
import { toInteger } from 'utils/Number'
import { removeAccents, toComparisonKey } from 'utils/Text'
import { ALL, DEFAULT_VALUE } from 'constants/Select'
import { TableHeader, INDICATORS, PERIODS, SORTING_KEYS, indicatorsByPeriod, getAverageByPeriod } from '.'

export const SummaryTable = ({ subjects = [], data = [], setData = [], initialData = [] }) => {
  const [periods, setPeriods] = useState(PERIODS)
  const [indicators, setIndicators] = useState(INDICATORS)

  const sortByPeriod = ({ target }) => {
    const { value } = target
    if (value === ALL) {
      setIndicators(INDICATORS)
      setData(initialData)
      return setPeriods(PERIODS)
    }
    if (value !== DEFAULT_VALUE) {
      setIndicators(indicatorsByPeriod[value.toLowerCase()])
      setPeriods(PERIODS.filter(({ value: option }) => option === value))
      setData(getAverageByPeriod(data, value))
    }
  }

  const sortByOption = ({ target }) => {
    if (target.value === DEFAULT_VALUE) return
    setData(sortArray(data, { key: target.value }))
  }

  const getFailures = array => {
    return periods
      .map(({ label: fail }) => toInteger(getValue(array, `fallas acumuladas ${removeAccents(fail)}`), true))
      ?.reduce((total, item) => (total += item), 0)
  }

  const getValue = (array, key, isIndicator = false) => {
    const valueKey = isIndicator ? 'Description' : 'Nota'
    const value = array?.find(({ Itemname: name }) => toComparisonKey(name) === toComparisonKey(key))?.[valueKey]
    return isIndicator ? value || '-' : Number(value) ? Number(value).toFixed(2) : '-'
  }

  return (
    <div>
      {data.length ? (
        <>
          <div className="flex justify-end my-2 gap-2">
            <Select options={PERIODS} initialValue="Filtrar por período" handleChange={sortByPeriod} lastOption />
            <Select options={SORTING_KEYS} initialValue="Ordenar por..." handleChange={sortByOption} />
          </div>
          <div className="table-container overflow-y-auto">
            <table className="table overflow-hidden z-50">
              <TableHeader subjects={subjects} periods={periods} indicators={indicators} />
              <tbody>
                {data.map(({ student, position, average, lostAverages, ...item }, index) => {
                  return (
                    <tr key={`item${index}`}>
                      <td className="text-center">{student}</td>
                      <td className="text-center">{position}</td>
                      <td className="text-center">{average}</td>
                      <td className="text-center">
                        <div className="flex gap-1 justify-center">
                          {lostAverages.length
                            ? lostAverages.map((subject, index) => (
                                <small key={`lostsubject${index}`} className="text-xs">
                                  {subject.slice(0, 3)}
                                </small>
                              ))
                            : '-'}
                        </div>
                      </td>
                      <td className={`text-center ${lostAverages.length ? 'field-error' : ''}`}>
                        {lostAverages.length}
                      </td>
                      {subjects.map(({ label, name }) => {
                        const { notes, average } = item[name]
                        const failures = getFailures(notes)
                        return (
                          <Fragment key={`subject${label}`}>
                            {/* These are the notes */}
                            {periods.map(({ value }) => {
                              const note = getValue(notes, value)
                              return (
                                <Fragment key={value}>
                                  <td className={`text-center ${note < 3 ? 'field-error' : ''}`}>{note}</td>
                                </Fragment>
                              )
                            })}
                            {/* <td className={`text-center ${average < 3 ? 'field-error' : ''}`}>{average}</td> */}
                            <td
                              className={`text-center ${
                                periods.length > 1
                                  ? average
                                  : getValue(notes, periods[0]?.value) < 3
                                  ? 'field-error'
                                  : ''
                              }`}
                            >
                              {periods.length > 1 ? average : getValue(notes, periods[0]?.value)}
                            </td>

                            {/* These are the failures */}
                            {periods.map(({ label: fail }, index) => (
                              <Fragment key={`failure${index}`}>
                                <td className="text-center">
                                  {toInteger(getValue(notes, `fallas acumuladas ${removeAccents(fail)}`))}
                                </td>
                              </Fragment>
                            ))}
                            <td className={`text-center ${failures ? 'field-error' : ''}`}>{failures}</td>

                            {/* These are the indicators */}
                            {indicators.map(indicator => (
                              <Fragment key={indicator}>
                                <td className="text-center text-xs cohorts__indicator-field">
                                  {/* {getValue(notes, indicator, true)} */}
                                  {ReactHtmlParser(getValue(notes, indicator, true))}
                                </td>
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
        </>
      ) : (
        <div className="flex justify-end my-2 gap-2">No hay una sabana de notas para este curso</div>
      )}
    </div>
  )
}