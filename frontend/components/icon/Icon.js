export const SortByName = ({ sortData, isAscending, setShowFilter, showFilter, changeSortKey, sortKey, keys }) => {
  const [primaryKey, secondaryKey] = keys
  return (
    <>
      <button className="button-icon ml-1 mr-2" onClick={sortData}>
        <i className={`text-xs fa-solid mx-2 fa-arrow-${isAscending ? 'up' : 'down'}`} />
      </button>
      <div className="inline-block relative">
        <button className="button-icon" onClick={() => setShowFilter(!showFilter)}>
          <i className="fa-solid fa-ellipsis-vertical text-xs" />
        </button>
        {showFilter && (
          <div className="students__filter-modal">
            <small
              className={`students__filter-item ${
                sortKey === primaryKey ? 'bg-white text-blue' : 'bg-blue text-white'
              }`}
              onClick={() => changeSortKey(primaryKey)}
            >
              Ordenar por nombre
            </small>
            <small
              className={`students__filter-item ${
                sortKey === secondaryKey ? 'bg-white text-blue' : 'bg-blue text-white'
              }`}
              onClick={() => changeSortKey(secondaryKey)}
            >
              Ordenar por apellido
            </small>
          </div>
        )}
      </div>
    </>
  )
}
