import React from 'react';

const Table = () => {
  return (
    <div className="w-52 m-auto my-2">
      <table>
        <thead>
          <tr>
            <td colSpan={3} />
            <td colSpan={4} className='p-1 px-2 border bg-black text-white text-center'>ASIGANTURA</td>
          </tr>
          <tr>
            <td className='p-1 px-2 border bg-red-800 text-white'>Nº</td>
            <td className='p-1 px-2 border bg-red-800 text-white w-56'>Estudiante</td>
            <td className='p-1 px-2 border bg-red-800 text-white'></td>
            <td className='p-1 px-2 border bg-red-500'>ESP</td>
            <td className='p-1 px-2 border bg-gray-300'>F</td>
            <td className='p-1 px-2 border bg-red-500'>ING</td>
            <td className='p-1 px-2 border bg-gray-300'>F</td>
            <td className='p-1 px-2 border bg-black text-white'>PR</td>
            <td className='p-1 px-2 border bg-black text-white'>P</td>
            <td className='p-1 px-2 border bg-black text-white'>AP</td>
            <td className='p-1 px-2 border bg-black text-white'>FA</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='p-1 px-2 border' rowSpan={3}>1 </td>
            <td className='p-1 px-2 border w-56' >Andrés Sánchez</td>
            <td className='p-1 px-2 border'>1P</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
          </tr>

          <tr>
            <td className='p-1 px-2 border w-56'>Andrés Sánchez</td>
            <td className='p-1 px-2 border'>2P</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
          </tr>

          <tr>
            <td className='p-1 px-2 border w-56'>Andrés Sánchez</td>
            <td className='p-1 px-2 border'>CN</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
            <td className='p-1 px-2 border'>3.3</td>
            <td className='p-1 px-2 border'>0</td>
          </tr>

          

        </tbody>

      </table>
    </div >
  );
}

export default Table;



// import React from 'react';

// const Table = () => {
//   return (
//     <div className="w-52 m-auto my-2">
//       <table>
//         <thead>
//           <tr>
//             <td colSpan={3} />
//             <td colSpan={4} className='p-1 px-2 border bg-black text-white text-center'>ASIGANTURA</td>
//           </tr>
//           <tr>
//             <td className='p-1 px-2 border bg-red-800 text-white'>Nº</td>
//             <td className='p-1 px-2 border bg-red-800 text-white w-56'>Estudiante</td>
//             <td className='p-1 px-2 border bg-red-800 text-white'></td>
//             <td className='p-1 px-2 border bg-red-500'>ESP</td>
//             <td className='p-1 px-2 border bg-gray-300'>F</td>
//             <td className='p-1 px-2 border bg-red-500'>ING</td>
//             <td className='p-1 px-2 border bg-gray-300'>F</td>
//             <td className='p-1 px-2 border bg-black text-white'>PR</td>
//             <td className='p-1 px-2 border bg-black text-white'>P</td>
//             <td className='p-1 px-2 border bg-black text-white'>AP</td>
//             <td className='p-1 px-2 border bg-black text-white'>FA</td>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td className='p-1 px-2 border' rowSpan={3}>1 </td>
//             <td className='p-1 px-2 border w-56' >Andrés Sánchez</td>
//             <td className='p-1 px-2 border'>1P</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//           </tr>

//           <tr>
//             <td className='p-1 px-2 border w-56'>Andrés Sánchez</td>
//             <td className='p-1 px-2 border'>2P</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//           </tr>

//           <tr>
//             <td className='p-1 px-2 border w-56'>Andrés Sánchez</td>
//             <td className='p-1 px-2 border'>CN</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//             <td className='p-1 px-2 border'>3.3</td>
//             <td className='p-1 px-2 border'>0</td>
//           </tr>

//         </tbody>

//       </table>
//     </div >
//   );
// }

// export default Table;