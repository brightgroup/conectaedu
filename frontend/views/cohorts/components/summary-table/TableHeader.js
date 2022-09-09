import { Fragment, useState } from 'react'

export const TableHeader = ({ toggleSort = () => {}, subjects = [] }) => {
  const [isAscending, setIsAscending] = useState(true)

  const sortData = () => {
    setIsAscending(!isAscending)
    toggleSort(!isAscending)
  }

  const getSubject = subject => {
    const words = subject.split(' ')
    return words.slice(0, words.length - 2).join(' ')
  }

  return (
    <thead>
      <tr className="bg-blue">
        <th className="cohorts__course-field text-center" rowSpan={3}>
          Estudiante
          <button className="button-icon ml-1 mr-2" onClick={sortData}>
            <i className={`text-xs fa-solid mx-2 fa-arrow-${isAscending ? 'up' : 'down'}`} />
          </button>
        </th>
        {subjects.map((subject, index) => (
          <th key={`subject${index}`} className="cohorts__subject-field text-center border" colSpan={12}>
            {getSubject(subject)}
          </th>
        ))}
      </tr>
      <tr className="bg-blue">
        {subjects.map(subject => (
          <Fragment key={`subject${subject}`}>
            <th className="text-center border border-t-0" colSpan={5}>
              Notas
            </th>
            <th className="text-center border border-t-0" colSpan={5}>
              Fallas
            </th>
            <th className="text-center border border-t-0" colSpan={2}>
              Indicadores
            </th>
          </Fragment>
        ))}
      </tr>
      <tr className="bg-blue">
        {subjects.map(item => (
          <Fragment key={item}>
            <th className="text-center border border-r-0 border-b-0 border-t-0">P1</th>
            <th className="text-center">P2</th>
            <th className="text-center">P3</th>
            <th className="text-center">P4</th>
            <th className="text-center border border-r border-b-0 border-l-0">Total</th>
            <th className="text-center">P1</th>
            <th className="text-center">P2</th>
            <th className="text-center">P3</th>
            <th className="text-center">P4</th>
            <th className="text-center border border-r border-b-0 border-l-0">Total</th>
            <th className="text-center">JD11P</th>
            <th className="text-center border-l-0 border border-b-0 border-t-0">JD21P</th>
          </Fragment>
        ))}
      </tr>
    </thead>
  )
}

// import { Fragment, useState } from 'react'

// export const TableHeader = ({ toggleSort = () => {}, subjects = [] }) => {
//   const [isAscending, setIsAscending] = useState(true)

//   const sortData = () => {
//     setIsAscending(!isAscending)
//     toggleSort(!isAscending)
//   }

//   const getSubject = subject => {
//     const words = subject.split(' ')
//     return words.slice(0, words.length - 2).join(' ')
//   }

//   return (
//     <thead>
//       <tr className="bg-blue">
//         <th className="cohorts__course-field text-center" rowSpan={3}>
//           Estudiante
//           <button className="button-icon ml-1 mr-2" onClick={sortData}>
//             <i className={`text-xs fa-solid mx-2 fa-arrow-${isAscending ? 'up' : 'down'}`} />
//           </button>
//         </th>
//         {subjects.map((subject, index) => (
//           <th key={`subject${index}`} className="cohorts__subject-field text-center border" colSpan={12}>
//             {getSubject(subject)}
//           </th>
//         ))}
//       </tr>
//       <tr className="bg-blue">
//         {subjects.map((subject, index) => (
//           <Fragment key={`title${index}`}>
//             <th className="text-center border border-t-0" colSpan={5}>
//               Notas
//             </th>
//             <th className="text-center border border-t-0" colSpan={5}>
//               Fallas
//             </th>
//             <th className="text-center border border-t-0" colSpan={2}>
//               Indicadores
//             </th>
//           </Fragment>
//         ))}
//       </tr>
//       <tr className="bg-blue">
//         {subjects.map(item => (
//           <Fragment key={item}>
//             <th className="text-center border border-r-0 border-b-0 border-t-0">P1</th>
//             <th className="text-center">P2</th>
//             <th className="text-center">P3</th>
//             <th className="text-center">P4</th>
//             <th className="text-center border border-r border-b-0 border-l-0">Total</th>
//             <th className="text-center">P1</th>
//             <th className="text-center">P2</th>
//             <th className="text-center">P3</th>
//             <th className="text-center">P4</th>
//             <th className="text-center border border-r border-b-0 border-l-0">Total</th>
//             <th className="text-center">JD11P</th>
//             <th className="text-center border-l-0 border border-b-0 border-t-0">JD21P</th>
//           </Fragment>
//         ))}
//       </tr>
//     </thead>
//   )
// }
