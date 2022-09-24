import { COURSES } from '../..'

export const TableHeader = () => {
  return (
    <thead>
      <tr className="bg-blue z-50">
        <th className="statistics__area-field note-title text-center border border-b-0 z-50 border-t-0" rowSpan={2}>
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
