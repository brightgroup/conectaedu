import { useContext, useState } from 'react'
import { StudentContext } from 'views/students/context/Provider'

export const TableHeader = () => {
  const { toggleSortStudents: toggleSort } = useContext(StudentContext)

  const [showFilter, setShowFilter] = useState(false)
  const [isAscendingSort, setIsAscendingSort] = useState(true)
  const [sortKey, setSortKey] = useState('DisplayName')

  const changeSortKey = key => {
    setShowFilter(!showFilter)
    setSortKey(key)
    toggleSort(key, isAscendingSort)
  }

  const sortData = () => {
    setIsAscendingSort(!isAscendingSort)
    toggleSort(sortKey, !isAscendingSort)
    setShowFilter(false)
  }

  return (
    <thead>
      <tr className="bg-blue">
        <th className="text-center relative">
          Nombre
          <button className="button-icon ml-1 mr-2" onClick={sortData}>
            <i className={`text-xs fa-solid mx-2 fa-arrow-${isAscendingSort ? 'up' : 'down'}`} />
          </button>
        </th>
        <th className="text-center">Estudiante</th>
      </tr>
    </thead>
  )
}

// import { useContext, useState } from 'react'
// import { StudentContext } from 'views/students/context/Provider'

// export const TableHeader = () => {
//   const { toggleSortStudents: toggleSort, sortKey, setSortKey, isAscendingSort } = useContext(StudentContext)

//   const [showFilter, setShowFilter] = useState(false)

//   const sortData = key => {
//     setSortKey({ ...sortKey, students: key })
//     setShowFilter(!showFilter)
//   }

//   const sortDataByOrder = () => {
//     toggleSort()
//     setShowFilter(false)
//   }

//   return (
//     <thead>
//       <tr className="bg-blue">
//         <th className="text-center relative">
//           Nombre
//           <button className="button-icon ml-1 mr-2" onClick={sortDataByOrder}>
//             <i className={`text-xs fa-solid mx-2 fa-arrow-${isAscendingSort.students ? 'up' : 'down'}`} />
//           </button>
//           <div className="inline-block relative">
//             <button className="button-icon" onClick={() => setShowFilter(!showFilter)}>
//               <i className="fa-solid fa-ellipsis-vertical text-xs" />
//             </button>
//             {showFilter && (
//               <div className="students__filter-modal">
//                 <small
//                   className={`students__filter-item ${
//                     sortKey.students === 'name' ? 'bg-white text-blue' : 'bg-blue text-white'
//                   }`}
//                   onClick={() => sortData('name')}
//                 >
//                   Ordenar por nombre
//                 </small>
//                 <small
//                   className={`students__filter-item ${
//                     sortKey.students === 'lastName' ? 'bg-white text-blue' : 'bg-blue text-white'
//                   }`}
//                   onClick={() => sortData('lastName')}
//                 >
//                   Ordenar por apellido
//                 </small>
//               </div>
//             )}
//           </div>
//         </th>
//         <th className="text-center">Estudiante</th>
//       </tr>
//     </thead>
//   )
// }
