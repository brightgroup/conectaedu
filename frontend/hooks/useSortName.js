import { useState } from 'react'

const useSortName = (initalKey, toggleSort) => {
  const [isAscending, setIsAscending] = useState(true)
  const [showFilter, setShowFilter] = useState(false)
  const [sortKey, setSortKey] = useState(initalKey)

  const sortData = () => {
    setIsAscending(!isAscending)
    toggleSort(!isAscending, sortKey)
    setShowFilter(false)
  }

  const changeSortKey = key => {
    setShowFilter(!showFilter)
    setSortKey(key)
    toggleSort(isAscending, key)
  }

  return {
    sortData,
    isAscending,
    setShowFilter,
    showFilter,
    sortKey,
    changeSortKey,
  }
}

export default useSortName
