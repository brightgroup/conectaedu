import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getCohorts } from 'redux/cohorts/actions'
import { TableTitle } from 'components/table-title'
import { CohortsTable, StudentsTable, CoursesTable } from '.'

export const Cohorts = () => {
  const dispatch = useDispatch()

  const {
    query: { tabla: table },
  } = useRouter()

  const { cohorts, students, courses } = useSelector(state => state.cohorts)

  const [cohortsTable, setCohortsTable] = useState([])

  useEffect(() => {
    dispatch(getCohorts())
  }, [])

  return (
    <div className="cohorts m-auto w-max mt-12">
      <TableTitle
        title={table ? table[0].toUpperCase() + table.slice(1) : 'Cohortes'}
        includesArrow={!!table}
        backRoute="/cohortes"
      />
      {table ? (
        <>{table === 'cursos' ? <CoursesTable initialData={courses} /> : <StudentsTable initialData={students} />}</>
      ) : (
        <CohortsTable data={cohortsTable} setData={setCohortsTable} initialData={cohorts} />
      )}
    </div>
  )
}
