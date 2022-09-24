import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFullData } from 'redux/courses/actions'
import { FailureTable, PercentageFailureTable, LostAreasTable } from './components'

export const Statistics = () => {
  const dispatch = useDispatch()

  const {
    courses: { fullData },
    loader: { showLoader },
  } = useSelector(state => state)

  const [period, setPeriod] = useState('Final')

  const [data, setData] = useState([])

  useEffect(() => {
    // dispatch(getFullData())
  }, [])

  return (
    <div className="statistics">
      {showLoader ? null : (
        <div className="flex flex-col gap-8 items-center">
          {/* <FailureTable data={fullData} period={period} setPeriod={setPeriod} />
          <PercentageFailureTable data={fullData} period={period} />
          <LostAreasTable period={period} data={fullData} /> */}
        </div>
      )}
    </div>
  )
}
