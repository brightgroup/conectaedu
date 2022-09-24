import { useState, useMemo } from 'react'
import { firstLetterToUpperCase, toComparisonKey } from 'utils/Text'
import { Paginator } from 'components/paginator'
import { TableHeader } from './TableHeader'
import { getChartLabel } from 'utils/Chart'
import { CHART_COLORS } from 'constants/Chart'
import { BarChart } from 'components/chart'
import { COURSES, SUBJECTS } from '../..'

export const PercentageFailureTable = ({ data = {}, period = '', statistics = {} }) => {
  const [subjects, setSubjects] = useState(SUBJECTS)

  const getFailRate = (course, subject) => {
    const notes = data[`${subject.split(' ').join('_')}_${course}`] || []

    const result = notes?.filter(item =>
      item?.Notas?.some(
        item => toComparisonKey(item.Itemname) === toComparisonKey(period) && Number(item.Nota) && item.Nota < 3
      )
    )

    return notes.length ? ((result?.length * 100) / notes.length).toFixed(1) : '-'
  }

  const getChartLabels = () => {
    return COURSES.filter(item => item.split(' ').length > 2).map(course => ({
      label: firstLetterToUpperCase(course),
      name: getChartLabel(course),
    }))
  }

  const chartLabels = useMemo(() => getChartLabels(), [COURSES])

  const getChartData = () => {
    return {
      labels: COURSES.map(item => getChartLabel(item)),
      datasets: subjects.map((subject, index) => ({
        label: subject,
        data: COURSES.map(item => statistics.disapprovalByAreas?.[item]?.[subject]?.failed),
        backgroundColor: CHART_COLORS[index],
      })),
    }
  }

  return (
    <>
      <section>
        <h2 className="text-blue text-center font-black text-xl mb-2">PORCENTAJE DE REPROBACIÓN POR ÁREAS</h2>
        <div className="table-container overflow-y-auto bg-transparent">
          <table className="table m-auto lock-column">
            <TableHeader />
            <tbody>
              {subjects.map((subject, index) => (
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
        <Paginator setData={setSubjects} data={SUBJECTS} />
      </section>
      <BarChart data={getChartData()} />
      <section className="text-center border">
        <h4 className="text-blue font-bold text-xs">Cursos</h4>
        <div className="flex items-center text-blue text-tiny gap-2">
          {chartLabels.map(({ label, name }) => (
            <div key={label} className="flex items-center text-blue text-tiny">
              <span className="font-bold">{name}:</span>
              <small className="text-tiny truncate w-10" title={label}>
                &nbsp;{label}
              </small>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
