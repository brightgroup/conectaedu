import { useEffect, useMemo, useState } from 'react'
import { createArray } from 'utils/Array'
import { ITEMS_PER_PAGE } from 'constants/Paginator'
import { getPaginatorGroup, getGroupLimits } from '.'

export const Paginator = ({ data = [], setData = () => {} }) => {
  const [pages, setPages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (data?.length <= ITEMS_PER_PAGE) return setData(data)
    getPages()
    getData()
  }, [data, currentPage])

  const pageList = useMemo(() => createArray(Math.ceil(data.length / ITEMS_PER_PAGE)), [data])

  const paginatorGroup = useMemo(() => getPaginatorGroup(pageList), [pageList])

  const getPages = () => {
    const { start, finish } = getGroupLimits(paginatorGroup, currentPage)
    const pages = []
    for (let page = start; page <= finish; page++) pages.push(page)
    setPages(pages)
  }

  const getData = () => {
    const initialLimit = (currentPage - 1) * ITEMS_PER_PAGE
    const finishLimit = initialLimit + ITEMS_PER_PAGE
    setData(data.slice(initialLimit, finishLimit))
  }

  const [enabledLeftArrow, enabledRightArrow] = [currentPage > 1, currentPage < pageList.at(-1)]

  const increasePage = () => {
    if (enabledRightArrow) setCurrentPage(currentPage + 1)
  }

  const decreasePage = () => {
    if (enabledLeftArrow) setCurrentPage(currentPage - 1)
  }

  return data?.length > ITEMS_PER_PAGE ? (
    <div className="paginator">
      <div className={`paginator__arrow ${enabledLeftArrow ? 'enabled' : 'disabled'}`} onClick={decreasePage}>
        <i className="fa-solid fa-angle-left" />
      </div>
      {pages.map(page => (
        <div
          key={`page${page}`}
          className={`paginator__page ${currentPage === page ? 'bg-blue text-white' : 'bg-white text-gray-600'}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </div>
      ))}
      <div className={`paginator__arrow ${enabledRightArrow ? 'enabled' : 'disabled'}`} onClick={increasePage}>
        <i className="fa-solid fa-angle-right" />
      </div>
      {pageList.length > ITEMS_PER_PAGE && (
        <PagesSelect currentPage={currentPage} pageList={pageList} setCurrentPage={setCurrentPage} />
      )}
    </div>
  ) : null
}

const PagesSelect = ({ currentPage = 1, pageList = [], setCurrentPage = () => {} }) => (
  <div className="text-xs px-1 rounded-xl bg-blue text-white">
    <select
      className="w-full h-full bg-transparent"
      onChange={({ target }) => setCurrentPage(Number(target.value))}
      value={currentPage}
    >
      {pageList.map(option => (
        <option value={option} key={`option${option}`}>
          {option}
        </option>
      ))}
    </select>
  </div>
)

// import { useEffect, useMemo, useState } from 'react'
// import { createArray } from 'utils/Array'
// import { ITEMS_PER_PAGE } from 'constants/Paginator'
// import { getPaginatorGroup, getGroupLimits } from '.'

// export const Paginator = ({ data = [], setData = () => {} }) => {
//   const [pages, setPages] = useState([])
//   const [currentPage, setCurrentPage] = useState(1)

//   useEffect(() => {
//     if (data?.length <= ITEMS_PER_PAGE) return setData(data)
//     getPages()
//     getData()
//   }, [data, currentPage])

//   const pageList = useMemo(() => createArray(Math.ceil(data.length / ITEMS_PER_PAGE)), [data])

//   const paginatorGroup = useMemo(() => getPaginatorGroup(pageList), [pageList])

//   const getPages = () => {
//     const { start, finish } = getGroupLimits(paginatorGroup, currentPage)
//     const pages = []
//     for (let page = start; page <= finish; page++) pages.push(page)
//     setPages(pages)
//   }

//   const getData = () => {
//     const initialLimit = (currentPage - 1) * ITEMS_PER_PAGE
//     const finishLimit = initialLimit + ITEMS_PER_PAGE
//     setData(data.slice(initialLimit, finishLimit))
//   }

//   const [enabledLeftArrow, enabledRightArrow] = [currentPage > 1, currentPage < pageList.at(-1)]

//   const increasePage = () => {
//     if (enabledRightArrow) setCurrentPage(currentPage + 1)
//   }

//   const decreasePage = () => {
//     if (enabledLeftArrow) setCurrentPage(currentPage - 1)
//   }

//   return data?.length > ITEMS_PER_PAGE ? (
//     <div className="paginator">
//       <div className={`paginator__arrow ${enabledLeftArrow ? 'enabled' : 'disabled'}`} onClick={decreasePage}>
//         <i className="fa-solid fa-angle-left" />
//       </div>
//       {pages.map(page => (
//         <div
//           key={`page${page}`}
//           className={`paginator__page ${currentPage === page ? 'bg-blue text-white' : 'bg-white text-gray-600'}`}
//           onClick={() => setCurrentPage(page)}
//         >
//           {page}
//         </div>
//       ))}
//       <div className={`paginator__arrow ${enabledRightArrow ? 'enabled' : 'disabled'}`} onClick={increasePage}>
//         <i className="fa-solid fa-angle-right" />
//       </div>
//     </div>
//   ) : null
// }
