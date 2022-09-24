import { useMemo } from 'react'
import { firstLetterToUpperCase } from 'utils/Text'
import { TableHeader } from './TableHeader'
import { BarChart } from 'components/chart'
import { getChartLabel } from 'utils/Chart'
import { CHART_COLORS } from 'constants/Chart'
import { COURSES } from '../..'
import { TABLE_ROWS } from '.'

export const PercentageLostAreasTable = ({ data = {}, period = '', statistics }) => {
  const getFailCount = (failedStudents, areas) => {
    let count = 0

    for (const key in failedStudents) {
      if (failedStudents[key] === areas) count += 1
    }
    return count
  }

  const getFailRate = (course, areas) => {
    const failedStudents = statistics.failuresNumber[course]

    if (failedStudents) {
      const students = getFailCount(failedStudents, areas)
      return ((students * 100) / Object.keys(failedStudents).length).toFixed(1)
    }

    return 0
  }

  const getChartData = () => {
    return {
      labels: COURSES.map(course => getChartLabel(course)),
      datasets: TABLE_ROWS.map(({ value }, index) => ({
        label: !index ? 'Ninguna' : index === TABLE_ROWS.length - 1 ? '10 o más' : value,
        data: COURSES.map(course => getFailRate(course, value)),
        backgroundColor: CHART_COLORS[index],
      })),
    }
  }

  const getChartLabels = () => {
    return COURSES.filter(item => item.split(' ').length > 2).map(course => ({
      label: firstLetterToUpperCase(course),
      name: getChartLabel(course),
    }))
  }

  const chartLabels = useMemo(() => getChartLabels(), [COURSES])

  return (
    <>
      <section>
        <h2 className="text-blue text-center font-black text-xl mb-2">PORCENTAJE DE REPROBACIÓN POR Nº DE ÁREAS</h2>
        <div className="table-container overflow-y-auto bg-transparent">
          <table className="table m-auto lock-column">
            <TableHeader />
            <tbody>
              {TABLE_ROWS.map(({ label, value }, index) => (
                <tr key={`${label}${index}`}>
                  <td className="text-center">{label}</td>
                  {COURSES.map((course, index) => (
                    <td className="text-center" key={`${course}${index}`}>
                      {getFailRate(course, value)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="text-center">TOTAL</td>
                {COURSES.map((course, index) => (
                  <td className="text-center" key={`${index}${course}`}>
                    100
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
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
