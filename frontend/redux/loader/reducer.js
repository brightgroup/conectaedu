import { SET_LOADER_STATUS } from './types'

const initialState = {
  showLoader: false,
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER_STATUS:
      return {
        ...state,
        showLoader: action.payload,
      }
    default:
      return state
  }
}
