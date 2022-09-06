import { useContext, useState } from 'react'
import { StudentContext } from 'views/students/context/Provider'

export const TableHeader = () => {
  const { toggleSortStudent } = useContext(StudentContext)

  const [arrowStatus, setArrowStatus] = useState({ fullname: true, finalgrade: false })
  const [sortKey, setSortKey] = useState('fullname')

  const sortTable = key => {
    setArrowStatus({ ...arrowStatus, [key]: !arrowStatus[key] })
    toggleSortStudent(key, !arrowStatus[key])
    setSortKey(key)
  }

  const getArrowType = key => {
    arrowStatus[key] ? 'up opacity-100' : 'down opacity-50'
    const activeClass = sortKey === key ? 'opacity-100' : 'opacity-50'
    return arrowStatus[key] ? `up ${activeClass}` : `down ${activeClass}`
  }

  return (
    <thead>
      <tr className="bg-blue">
        <th className="text-center relative">
          Materia
          <button className="button-icon ml-1 mr-2" onClick={() => sortTable('fullname')}>
            <i className={`text-xs fa-solid mx-2 fa-arrow-${getArrowType('fullname')}`} />
          </button>
        </th>
        <th className="text-center">
          Nota
          <button className="button-icon ml-1 mr-2" onClick={() => sortTable('finalgrade')}>
            <i className={`text-xs fa-solid mx-2 fa-arrow-${getArrowType('finalgrade')}`} />
          </button>
        </th>
      </tr>
    </thead>
  )
}
