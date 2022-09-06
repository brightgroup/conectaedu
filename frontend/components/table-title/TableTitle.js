import Router from 'next/router'

export const TableTitle = ({ includesArrow = false, title = '', backRoute = '' }) =>
  includesArrow ? (
    <div className="flex justify-between px-2">
      <button className="flex gap-2 items-center text-blue cursor-pointer" onClick={() => Router.push(backRoute)}>
        <i className="fa-solid fa-arrow-left" />
        Volver
      </button>
      <h3 className="mb-4 text-xl font-black text-center text-blue">{title}</h3>
    </div>
  ) : (
    <h3 className="mb-4 text-3xl font-black text-center text-blue">{title}</h3>
  )
