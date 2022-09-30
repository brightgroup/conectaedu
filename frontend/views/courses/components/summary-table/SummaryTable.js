import { Fragment, useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import ReactHtmlTableToExcel from 'react-html-table-to-excel'
import { Select } from 'components/select'
import { sortArray } from 'utils/Array'
import { toInteger } from 'utils/Number'
import { firstLetterToUpperCase, removeAccents, toComparisonKey } from 'utils/Text'
import { ALL, DEFAULT_VALUE } from 'constants/Select'
import { IS_ADMIN } from 'constants/LocalStorage'
import {
  TableHeader,
  INDICATORS,
  PERIODS,
  SORTING_KEYS,
  indicatorsByPeriod,
  getAverageByPeriod,
  performanceColors,
  subjectAcronyms,
} from '.'

export const SummaryTable = ({ subjects: allSubjects = [], data = [], setData = [], initialData = [] }) => {
  const isAdmin = JSON.parse(localStorage[IS_ADMIN] || 'false')

  const [periods, setPeriods] = useState(PERIODS)
  const [indicators, setIndicators] = useState(isAdmin ? INDICATORS : [])
  const [sortKey, setSortKey] = useState('lastname')
  const [subjects, setSubjects] = useState([])
  const [subject, setSubject] = useState('')

  useEffect(() => setSubjects(allSubjects), [allSubjects])

  const sortByPeriod = ({ target }) => {
    const { value } = target
    if (value === ALL) {
      isAdmin && setIndicators(INDICATORS)
      setData(initialData)
      return setPeriods(PERIODS)
    }
    if (value !== DEFAULT_VALUE) {
      isAdmin && setIndicators(indicatorsByPeriod[value.toLowerCase()])
      setPeriods(PERIODS.filter(({ value: option }) => option === value))
      setData(getAverageByPeriod(data, value))
    }
  }

  const sortByOption = ({ target }) => {
    if (target.value === DEFAULT_VALUE) return
    setData(sortArray(data, { key: target.value }))
    setSortKey(target.value)
  }

  const sortBySubject = ({ target }) => {
    const { value } = target
    setSubjects(value === ALL ? allSubjects : allSubjects.filter(({ value: subject }) => subject === value))
    setSubject(value === ALL ? 'all' : target.value)
  }

  const getFailures = array => {
    return periods
      .map(({ label: fail }) => toInteger(getValue(array, `fallas acumuladas ${removeAccents(fail)}`), true))
      ?.reduce((total, item) => (total += item), 0)
  }

  const getValue = (array, key, isIndicator = false) => {
    const valueKey = isIndicator ? 'Description' : 'Nota'
    const value = array?.find(({ Itemname: name }) => toComparisonKey(name) === toComparisonKey(key))?.[valueKey]
    return isIndicator ? value || '-' : Number(value) ? Number(value).toFixed(1) : '-'
  }

  const getPerformance = (array, key) => {
    const performance = array?.find(({ Itemname: name }) => toComparisonKey(name) === toComparisonKey(key))?.Desempenio
    return performance ? performance.split(' ')[1] : '-'
  }

  const getSubjectName = subject => toComparisonKey(allSubjects?.find(({ name }) => name === subject)?.label || '')

  const getBehaviour = notes => {
    const Note = notes?.find(
      ({ Itemname = '' }) => toComparisonKey(Itemname) === 'calificacion comportamental tercer periodo'|| toComparisonKey(Itemname) === 'calificacion comportamental 3 periodo'
    )?.Nota
    return !isNaN(Note) ? (Number(Note) ? Number(Note).toFixed(1) : '-' || '-') : '-'
  }

  return (
    <div>
      <ReactHtmlTableToExcel
        id="excelButton"
        className="border p-2 bg-blue text-white rounded-md"
        table="table"
        filename="Sabana de notas"
        sheet="Página 1"
        buttonText="Exportar a excel"
      />
      {data.length ? (
        <>
          <div className="flex justify-end my-2 gap-2">
            <Select
              options={allSubjects}
              initialValue="Filtrar por asignatura"
              handleChange={sortBySubject}
              allOption="Todas las asignaturas"
              value={subject}
            />
            <Select
              options={PERIODS}
              initialValue="Filtrar por período"
              handleChange={sortByPeriod}
              allOption="Todos los periodos"
            />
            <Select options={SORTING_KEYS} handleChange={sortByOption} value={sortKey} />
          </div>
          <div className="table-container summary-table">
            <table className="table" id="table">
              <TableHeader subjects={subjects} periods={periods} indicators={indicators} isAdmin={isAdmin} />
              <tbody>
                {data.map(({ student, position, average, lostAverages, isRetired = false, ...item }, index) => {
                  return (
                    <tr key={`item${index}`}>
                      <td className={`text-center ${isRetired ? 'retired-field' : ''}`}>
                        {student}
                        {isRetired && <span className="text-tiny font-bold">&nbsp;(Retirado)</span>}
                      </td>
                      <td className="text-center">{position}</td>
                      <td className="text-center">{average}</td>
                      <td className="text-center">
                        <div className="flex gap-1 justify-center">
                          {lostAverages.length
                            ? lostAverages.map((subject, index) => (
                                <small key={`lostsubject${index}`} className="text-xs">
                                  {(subjectAcronyms[getSubjectName(subject)] || subject.slice(0, 3)).toUpperCase()}
                                </small>
                              ))
                            : '-'}
                        </div>
                      </td>
                      <td className={`text-center ${lostAverages.length ? 'field-error' : ''}`}>
                        {lostAverages.length}
                      </td>
                      {subjects?.map(({ label, name }) => {
                        const { notes, average } = item[name] || { notes: [], average: 0 }
                        const failures = getFailures(notes)
                        const finalPerformance = getPerformance(notes, 'final')
                        return (
                          <Fragment key={`subject${label}`}>
                            {/* These are the notes */}
                            {periods.map(({ value }) => {
                              const note = getValue(notes, value)
                              const performance = getPerformance(notes, value)
                              return (
                                <Fragment key={value}>
                                  <td className={`text-center ${note < 3 ? 'field-error' : ''}`}>{note}</td>
                                  {isAdmin && (
                                    <td
                                      className={`text-center text-white ${
                                        isNaN(note) ? 'text-black' : performanceColors[performance]
                                      }`}
                                    >
                                      {isNaN(note) ? '-' : firstLetterToUpperCase(performance)}
                                    </td>
                                  )}
                                </Fragment>
                              )
                            })}
                            <td
                              className={`text-center ${
                                (periods.length > 1
                                  ? Number(average)
                                    ? Number(average).toFixed(1)
                                    : '-'
                                  : getValue(notes, periods[0]?.value)) < 3
                                  ? 'field-error'
                                  : ''
                              }`}
                            >
                              {periods.length > 1
                                ? Number(average)
                                  ? Number(average).toFixed(1)
                                  : '-'
                                : getValue(notes, periods[0]?.value)}
                            </td>
                            {isAdmin && (
                              <td
                                className={`text-center text-${
                                  firstLetterToUpperCase(finalPerformance) === '-' ? 'blue' : 'white'
                                } ${performanceColors[finalPerformance]}`}
                              >
                                {firstLetterToUpperCase(finalPerformance) || '-'}
                              </td>
                            )}

                            {/* These are the failures */}
                            {periods.map(({ label: fail }, index) => (
                              <Fragment key={`failure${index}`}>
                                <td className="text-center">
                                  {toInteger(getValue(notes, `fallas acumuladas ${removeAccents(fail)}`))}
                                </td>
                              </Fragment>
                            ))}
                            <td className="text-center">{failures}</td>

                            {/* These are the indicators */}
                            {indicators.map(indicator => {
                              const value = ReactHtmlParser(getValue(notes, indicator, true))
                              return (
                                <Fragment key={indicator}>
                                  <td className="text-center text-xs cohorts__indicator-field relative" title={value}>
                                    {value}
                                  </td>
                                </Fragment>
                              )
                            })}
                            <td className="text-center">{getBehaviour(notes)}</td>
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
