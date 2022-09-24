import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router from 'next/router'
import { getSubjects } from 'redux/subjects/actions'
import { Paginator } from 'components/paginator'
import { sortArray } from 'utils/Array'
import { TableHeader } from '.'

export const Subjects = () => {
  const dispatch = useDispatch()
  const { subjects } = useSelector(state => state.subjects)
  const [data, setData] = useState([])
  const [isAscending, setIsAscending] = useState(true)
  const [tableData, setTableData] = useState()

  useEffect(() => {
    dispatch(getSubjects())
  }, [])

  useEffect(() => setTableData(subjects), [subjects])

  const toggleSort = () => {
    setIsAscending(!isAscending)
    setTableData(sortArray(tableData, { key: 'name', isAscending: !isAscending }))
  }

  return (
    <div className="subjects m-auto w-max mt-12">
      <h3 className="mb-4 text-3xl font-black text-center text-blue">Materias</h3>
      {!!tableData?.length && (
        <div className="overflow-hidden">
          <table className="table overflow-hidden z-50 ">
            <TableHeader toggleSort={toggleSort} isAscending={isAscending} />
            <tbody>
              {data.map(({ name = '' }, index) => (
                <tr key={`matter${index}`}>
                  <td className="subjects__table-field text-center leading-4">{name}</td>
                  <td className="subjects__view-field text-center">
                    <i className="fa-solid fa-eye" onClick={() => Router.push('/estudiantes')} />
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
