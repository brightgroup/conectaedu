
export const hasEmptyFields = (data, keys) => {
    const errors = []
    keys?.forEach(key => {
      if (Array.isArray(key)) {
        if (!key.some(item => data[item])) errors.push('error')
      } else if (Array.isArray(data[key])) {
        if (data[key].length === 0) errors.push('error')
      } else if (typeof data[key] === 'object') {
        if (!data[key].department || !data[key].city || data[key].location[0] === 0) errors.push('error')
      } else {
        if (!data[key]) errors.push(key)
      }
    })
  
    return !!errors.length
  }