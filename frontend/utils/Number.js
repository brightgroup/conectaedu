export const toInteger = (value, returnZero) => (isNaN(value) ? (returnZero ? 0 : value) : parseInt(Number(value)))

const getFailedStatistics = () => {
  // const item = {}
  const disapprovalByAreas = {}
  const item2 = {}

  COURSES.forEach((course, index) =>
    SUBJECTS.forEach(subject => {
      const notes = data[`${toSnakeCase(removeAccents(subject))}_${toSnakeCase(removeAccents(course))}`] || []

      if (notes.length) {
        notes.forEach(({ Student, Notas: items }, index) => {
          const lostSubject = !!items?.find(
            item => toComparisonKey(item.Itemname) === toComparisonKey(period) && Number(item.Nota) && item.Nota < 3
          )
            ? 1
            : 0

          item2[course] = item2[course]
            ? { ...item2[course], [Student]: (item2[course][Student] || 0) + lostSubject }
            : { [Student]: lostSubject }
        })
      }

      const result =
        notes?.filter(item =>
          item?.Notas?.some(
            item => toComparisonKey(item.Itemname) === toComparisonKey(period) && Number(item.Nota) && item.Nota < 3
          )
        ) || []

      if (result.length) {
        const currentItem = disapprovalByAreas[course]
        const newItem = {
          failed: result.length,
          failedPercentage: notes.length ? ((result?.length * 100) / notes.length).toFixed(1) : '-',
        }
        disapprovalByAreas[course] = currentItem ? { ...currentItem, [subject]: newItem } : { [subject]: newItem }
      }
    })
  )
  console.log('el item', disapprovalByAreas)
  console.log('el item2', item2)
}
