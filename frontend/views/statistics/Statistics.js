import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFullData } from 'redux/courses/actions'
import { FailureTable } from './components'

export const Statistics = () => {
  const dispatch = useDispatch()

  const {
    courses: { fullData },
    loader: { showLoader },
  } = useSelector(state => state)

  useEffect(() => {
    dispatch(getFullData())
  }, [])

  return (
    <div className="statistics">
      {showLoader ? null : (
        <div className="flex justify-center">
          <FailureTable data={fullData} />
        </div>
      )}
    </div>
  )
}
