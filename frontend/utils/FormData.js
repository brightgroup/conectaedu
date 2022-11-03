export const createFormData = (keys, data) => {
  const request = new FormData()
  keys.forEach(key => request.set(key, data[key]))
  return request
}
