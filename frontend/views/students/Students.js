import React from 'react'
import Router, { useRouter } from 'next/router'
import Provider from './context/Provider'
import { StudentsTable, StudentTable } from '.'

const Component = () => {
  const { query } = useRouter()

  const { nombre: studentName } = query

  return (
    <div className="students m-auto w-max mt-12">
      {studentName ? (
        <div className="flex justify-between">
          <button
            className="flex gap-2 items-center text-blue cursor-pointer"
            onClick={() => Router.push('/estudiantes')}
          >
            <i className="fa-solid fa-arrow-left" />
            Volver
          </button>
          <h3 className="mb-4 text-xl font-black text-center text-blue">{studentName || 'Estudiantes'}</h3>
        </div>
      ) : (
        <h3 className="mb-4 text-3xl font-black text-center text-blue">{studentName || 'Estudiantes'}</h3>
      )}
      {studentName ? <StudentTable /> : <StudentsTable />}
    </div>
  )
}

export const Students = () => (
  <Provider>
    <Component />
  </Provider>
)
