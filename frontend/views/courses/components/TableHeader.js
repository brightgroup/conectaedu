export const TableHeader = ({ toggleSort = () => {}, isAscending = false }) => (
  <thead>
    <tr className="bg-blue">
      <th className="text-center select-none">
        Curso
        <button className="button-icon ml-1" onClick={toggleSort}>
          <i className={`text-xs fa-solid mx-2 fa-arrow-${isAscending ? 'up' : 'down'}`} />
        </button>
      </th>
      <th className="text-center">Estudiantes</th>
    </tr>
  </thead>
)
