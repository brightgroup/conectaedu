import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router from 'next/router'
import { getCourses } from 'redux/courses/actions'
import { Paginator } from 'components/paginator'
import { sortArray } from 'utils/Array'
import { TableHeader } from '.'

export const Courses = () => {
  const dispatch = useDispatch()
  const { courses } = useSelector(state => state.courses)
  const [data, setData] = useState([])
  const [isAscending, setIsAscending] = useState(true)
  const [tableData, setTableData] = useState()

  useEffect(() => {
    dispatch(getCourses())
  }, [])

  useEffect(() => setTableData(courses), [courses])

  const toggleSort = () => {
    setIsAscending(!isAscending)
    setTableData(sortArray(tableData, { key: 'name', isAscending: !isAscending }))
  }

  return (
    <div className="courses m-auto w-max mt-12">
      <h3 className="mb-4 text-3xl font-black text-center text-blue">Cursos</h3>
      {!!tableData?.length && (
        <div className="table-container overflow-y-auto">
          <table className="table overflow-hidden z-50">
            <TableHeader toggleSort={toggleSort} isAscending={isAscending} />
            <tbody>
              {data.map(({ name = '' }, index) => (
                <tr key={`course${index}`}>
                  <td className="courses__course-field text-center leading-4">{name}</td>
                  <td className="courses__view-field text-center">
                    <p
                      className="flex items-center justify-center w-max m-auto cursor-pointer"
                      onClick={() => Router.push('/estudiantes')}
                    >
                      <i className="fa-solid fa-eye mr-2" />
                      <small className="text-sm">Ver</small>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Paginator setData={setData} data={tableData} />
        </div>
      )}
    </div>
  )
}
