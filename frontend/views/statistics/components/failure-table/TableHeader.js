import { COURSES } from '../..'
export const TableHeader = () => {
  return (
    <thead>
      <tr className="bg-blue">
        <th className="text-center border" colSpan={COURSES.length + 1}>
          REPROBACIÓN POR ÁREAS
        </th>
      </tr>
      <tr className="bg-blue">
        <th className="statistics__area-field note-title text-center border border-b-0" rowSpan={2}>
          Área
        </th>
        <th className="text-center" colSpan={COURSES.length + 1}>
          Curso
        </th>
      </tr>
      <tr className="bg-blue">
        {COURSES.map(item => (
          <th key={item} className="statistics__course-field text-center border border-b-0">
            {item}
          </th>
        ))}
      </tr>
    </thead>
  )
}
