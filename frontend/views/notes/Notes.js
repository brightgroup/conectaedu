import React from 'react'

export const subjects = ['ESP', 'ING', 'SOC']

export const Notes = () => {
  return (
    <div className="m-auto my-2 w-max notes">
      <table className="styled-table table overflow-hidden">
        <TableHeader />
        <tbody>
          <tr>
            <td className="text-center" rowSpan={3}>
              1
            </td>
            <td className="text-left">Andrés</td>
            <td className="text-center">1P</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
          </tr>
          <tr className="active-row">
            <td className="text-left">Andrés</td>
            <td className="text-center">2P</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
          </tr>
          <tr className="active-row">
            <td className="text-left">Andrés</td>
            <td className="text-center">3P</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
            <td className="text-center">3.0</td>
            <td className="text-center">2.4</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const TableHeader = () => (
  <thead>
    <tr className="bg-blue">
      <th className="text-center">No</th>
      <th className="text-left w-52">
        Estudiante <i className="fa-solid fa-arrow-down ml-1 cursor-pointer" />
      </th>
      <th />
      <th className="text-center">ESP</th>
      <th className="text-center">F</th>
      <th className="text-center">ING</th>
      <th className="text-center">F</th>
      <th className="text-center">PR</th>
      <th className="text-center">P</th>
      <th className="text-center">AP</th>
      <th className="text-center">FA</th>
    </tr>
  </thead>
)
