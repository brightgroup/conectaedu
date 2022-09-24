import { Fragment } from 'react'
import { createArray } from 'utils/Array'
import { SINGLE_SUBJECT_FIELDS } from '.'

export const TableHeader = ({ subjects = [], periods = [], indicators = [], isAdmin = false }) => {
  const getCurrentPeriod = period => (periods.length === 1 ? periods[0]?.acronym : period)

  return (
    <thead>
      <tr className="bg-blue">
        <th className="cohorts__course-field text-center student-title border border-b-0" rowSpan={3}>
          Estudiante
        </th>
        <th className="text-center" rowSpan={3}>
          Retirado
        </th>
        <th className="cohorts__ranking-field text-center border border-r-0 border-b-0 border-t-0" rowSpan={3}>
          Puesto
        </th>
        <th className="cohorts__ranking-field text-center border border-r-0 border-b-0 border-t-0" rowSpan={3}>
          Promedio
        </th>
        <th className="cohorts__lost-subjects text-center border border-r-0 border-b-0 border-t-0" rowSpan={3}>
          Asignaturas pérdidas
        </th>
        <th className="cohorts__ranking-field text-center border border-r-0 border-b-0 border-t-0" rowSpan={3}>
          Número de asignaturas pérdidas
        </th>
        {subjects.map(({ label }, index) => (
          <th
            key={`subject${index}`}
            className="cohorts__subject-field text-center border"
            // (notes + failures + performance) + indicators + single fields + behaviour field
            colSpan={periods.length * (isAdmin ? 3 : 2) + indicators.length + (isAdmin ? SINGLE_SUBJECT_FIELDS : 2) + 1}
          >
            {label}
          </th>
        ))}
      </tr>
      <tr className="bg-blue">
        {subjects.map(({ name }) => (
          <Fragment key={`subject${name}`}>
            <th className="text-center border border-t-0" colSpan={(periods.length + 1) * (isAdmin ? 2 : 1)}>
              Notas
            </th>
            <th className="text-center border border-t-0" colSpan={periods.length + 1}>
              Fallas
            </th>
            {!!indicators.length && (
              <th className="text-center border border-t-0" colSpan={indicators.length}>
                Indicadores
              </th>
            )}
            <th className="text-center border border-b-0" rowSpan={2}>
              Comportamiento
            </th>
          </Fragment>
        ))}
      </tr>
      <tr className="bg-blue">
        {subjects.map(({ label }) => (
          <Fragment key={label}>
            {createArray(periods.length).map((item, index) => (
              <Fragment key={`period${item}`}>
                <th className={`text-center ${!index ? 'border border-r-0 border-b-0 border-t-0' : ''}`}>
                  {getCurrentPeriod(`P${item}`)}
                </th>
                {isAdmin && <th className="text-center">Desempeño</th>}
              </Fragment>
            ))}
            <th className={`text-center ${isAdmin ? '' : 'border border-r border-b-0 border-l-0'}`}>Total</th>
            {isAdmin && <th className="text-center border border-r border-b-0 border-l-0">Desempeño</th>}

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
            {/* <th className="text-center border ">Comportamiento</th> */}
          </Fragment>
        ))}
      </tr>
    </thead>
  )
}
