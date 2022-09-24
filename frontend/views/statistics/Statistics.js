import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFullData } from 'redux/courses/actions'
import { FailureTable, PercentageFailureTable, LostAreasTable, PercentageLostAreasTable } from './components'
import { getFailedStatistics } from '.'

export const Statistics = () => {
  const dispatch = useDispatch()

  const {
    courses: { fullData },
    loader: { showLoader },
  } = useSelector(state => state)

  const [period, setPeriod] = useState('Final')
  const [data, setData] = useState({})
  const [statistics, setStatistics] = useState({ disapprovalByAreas: {}, failuresNumber: {} })

  useEffect(() => {
    dispatch(getFullData())
  }, [])

  useEffect(() => setData(fullData), [fullData])

  useEffect(() => setStatistics(getFailedStatistics(fullData, period)), [period, fullData])

  return (
    <div className="statistics">
      {showLoader ? null : (
        <div className="flex flex-col gap-8 items-center">
          <FailureTable data={data} period={period} setPeriod={setPeriod} statistics={statistics} />
          <PercentageFailureTable data={data} period={period} statistics={statistics} />
          <LostAreasTable period={period} data={data} statistics={statistics} />
          <PercentageLostAreasTable period={period} data={data} statistics={statistics} />
        </div>
      )}
    </div>
  )
}
