import { useContext, useState } from 'react'
import { StudentContext } from 'views/students/context/Provider'

export const TableHeader = ({ admin }) => {
  const { toggleSortStudents: toggleSort } = useContext(StudentContext)

  const [showFilter, setShowFilter] = useState(false)
  const [isAscendingSort, setIsAscendingSort] = useState(true)
  const [sortKey, setSortKey] = useState('DisplayName')

  const changeSortKey = key => {
    setShowFilter(!showFilter)
    setSortKey(key)
    toggleSort(key, isAscendingSort)
  }

  const sortData = () => {
    setIsAscendingSort(!isAscendingSort)
    toggleSort(sortKey, !isAscendingSort)
    setShowFilter(false)
  }

  return (
    <thead>
      <tr className="bg-blue">
        <th className="text-center relative">
          Nombre
          <button className="button-icon ml-1 mr-2" onClick={sortData}>
            <i className={`text-xs fa-solid mx-2 fa-arrow-${isAscendingSort ? 'up' : 'down'}`} />
          </button>
        </th>
        <th className="text-center">Estudiante</th>
        <th className="text-center">Boletin</th>
      </tr>
    </thead>
  )
}
