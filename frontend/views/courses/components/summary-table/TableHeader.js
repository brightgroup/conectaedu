import { Fragment } from 'react'
import { createArray } from 'utils/Array'

export const TableHeader = ({ subjects = [], periods = [], indicators = [] }) => {
  const getCurrentPeriod = period => (periods.length === 1 ? periods[0]?.acronym : period)

  return (
    <thead>
      <tr className="bg-blue">
        <th className="cohorts__course-field text-center" rowSpan={3}>
          Estudiante
        </th>
        <th className="cohorts__ranking-field text-center border border-r-0 border-b-0 border-t-0" rowSpan={3}>
          Puesto
        </th>
        <th className="cohorts__ranking-field text-center border border-r-0 border-b-0 border-t-0" rowSpan={3}>
          Promedio
        </th>
        <th className="cohorts__ranking-field text-center border border-r-0 border-b-0 border-t-0" rowSpan={3}>
          Asignaturas pérdidas
        </th>
        <th className="cohorts__ranking-field text-center border border-r-0 border-b-0 border-t-0" rowSpan={3}>
          Número de asignaturas pérdidas
        </th>
        {subjects.map(({ label }, index) => (
          <th
            key={`subject${index}`}
            className="cohorts__subject-field text-center border"
            colSpan={periods.length * 2 + indicators.length + 2}
          >
            {label}
          </th>
        ))}
      </tr>
      <tr className="bg-blue">
        {subjects.map(({ name }) => (
          <Fragment key={`subject${name}`}>
            <th className="text-center border border-t-0" colSpan={periods.length + 1}>
              Notas
            </th>
            <th className="text-center border border-t-0" colSpan={periods.length + 1}>
              Fallas
            </th>
            <th className="text-center border border-t-0" colSpan={indicators.length}>
              Indicadores
            </th>
          </Fragment>
        ))}
      </tr>
      <tr className="bg-blue">
        {subjects.map(({ label }) => (
          <Fragment key={label}>
            {createArray(periods.length).map((item, index) => (
              <th
                key={`period${item}`}
                className={`text-center ${!index ? 'border border-r-0 border-b-0 border-t-0' : ''}`}
              >
                {getCurrentPeriod(`P${item}`)}
              </th>
            ))}
            <th className="text-center border border-r border-b-0 border-l-0">Total</th>
            {createArray(periods.length).map(item => (
              <th key={`failure${item}`} className="text-center">
                {getCurrentPeriod(`P${item}`)}
              </th>
            ))}
            <th className="text-center border border-r border-b-0 border-l-0">Total</th>
            {indicators.map((indicator, index) => (
              <th
                key={indicator}
                className={`text-center ${
                  index + 1 === indicators.length ? ' border-l-0 border border-b-0 border-t-0' : ''
                }`}
              >
                {indicator}
              </th>
            ))}
          </Fragment>
        ))}
      </tr>
    </thead>
  )
}
