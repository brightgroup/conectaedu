import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { TableTitle } from 'components/table-title'
import { getCourses } from 'redux/courses/actions'
import { firstLetterToUpperCase } from 'utils/Text'
import { CoursesTable, SummaryTable, getSubjects, getStudents } from '.'

export const Cohorts = () => {
  const dispatch = useDispatch()

  const {
    query: { tabla: table = '' },
  } = useRouter()

  const {
    courses: { courses, sheet },
  } = useSelector(state => state)

  const [cohortsTable, setCohortsTable] = useState([])
  const [subjects, setSubjects] = useState([])
  const [averagesTable, setAveragesTable] = useState([])

  useEffect(() => formatData(), [sheet, table])

  useEffect(() => {
    // if (!table) dispatch(getCourses())
  }, [])

  const formatData = () => {
    setSubjects(getSubjects(sheet, table))
    setAveragesTable(getStudents(sheet))
  }

  const getTitle = table => (table ? `Sabana de notas - ${firstLetterToUpperCase(table.split('-')[1])}` : 'Cursos')

  return (
    <div className="cohorts m-auto w-max mt-12">
      <TableTitle title={getTitle(table)} includesArrow={!!table} backRoute="/cursos" />
      {table ? (
        <SummaryTable
          subjects={subjects?.map(({ label, name }) => ({ label, value: name, name }))}
          data={averagesTable}
          initialData={getStudents(sheet)}
          setData={setAveragesTable}
        />
      ) : (
        <CoursesTable data={cohortsTable} setData={setCohortsTable} initialData={courses} />
      )}
    </div>
  )
}
