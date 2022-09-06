import { useState } from 'react'
import { SortByName } from 'components/icon'
import useSortName from 'hooks/useSortName'

const SORT_KEYS = ['firstname', 'lastname']

export const TableHeader = ({ toggleSort = () => {} }) => {
  const { sortData, isAscending, setShowFilter, showFilter, sortKey, changeSortKey } = useSortName(
    'lastname',
    toggleSort
  )

  return (
    <thead>
      <tr className="bg-blue">
        <th className="cohorts__student-field text-center">
          Estudiante
          <SortByName
            sortData={sortData}
            isAscending={isAscending}
            setShowFilter={setShowFilter}
            showFilter={showFilter}
            sortKey={sortKey}
            changeSortKey={changeSortKey}
            keys={SORT_KEYS}
          />
        </th>
      </tr>
    </thead>
  )
}
