import { useState } from 'react'

export const TableHeader = ({ toggleSort = () => {} }) => {
  const [isAscending, setIsAscending] = useState(true)

  const sortData = () => {
    setIsAscending(!isAscending)
    toggleSort(!isAscending)
  }

  return (
    <thead>
      <tr className="bg-blue">
        <th className="cohorts__cohort-field text-center">
          Cohorte
          <button className="button-icon ml-1 mr-2" onClick={sortData}>
            <i className={`text-xs fa-solid mx-2 fa-arrow-${isAscending ? 'up' : 'down'}`} />
          </button>
        </th>
        <th className="cohorts__standard-field text-center">Detalle</th>
      </tr>
    </thead>
  )
}
