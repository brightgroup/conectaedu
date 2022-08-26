import { SET_LOADER_STATUS } from './types'

export const setLoaderStatus = status => ({
  type: SET_LOADER_STATUS,
  payload: status,
})
