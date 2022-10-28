import React from 'react'
import { useRouter } from 'next/router'
import { TableTitle } from 'components/table-title'
import Provider from './context/Provider'
import { StudentsTable, StudentTable } from '.'

const Component = () => {
  const {
    query: { nombre: student, id },
  } = useRouter()

  return (
    <div className="students m-auto w-max mt-12 h-auto">
      <TableTitle title={student || 'Estudiantes'} includesArrow={!!student} backRoute="/estudiantes" />
      {student ? <StudentTable /> : <StudentsTable />}
    </div>
  )
}

export const Students = () => (
  <Provider>
    <Component />
  </Provider>
)
