import { PAGES_LIMIT } from 'constants/Paginator'

export * from './Paginator'

export const getPaginatorGroup = pageList => {
  const [groupsNumber, paginatorGroup] = [Math.ceil(pageList.length / PAGES_LIMIT), {}]
  for (let i = 0; i < groupsNumber; i++) {
    const [start, lastPage] = [i * PAGES_LIMIT + 1, pageList.at(-1)]
    const finish = start + PAGES_LIMIT - 1
    paginatorGroup[i] = {
      start,
      finish: finish > lastPage ? lastPage : finish,
    }
  }

  return paginatorGroup
}

export const getGroupLimits = (paginatorGroup, currentPage) => {
  const limits = { start: 0, finish: 0 }
  for (const key in paginatorGroup) {
    const { start, finish } = paginatorGroup[key]
    if (currentPage >= start && currentPage <= finish) {
      limits.start = start
      limits.finish = finish
    }
  }
  return limits
}
