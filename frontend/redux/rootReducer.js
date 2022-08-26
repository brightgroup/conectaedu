import { combineReducers } from 'redux'

import { reducer as authReducer } from './auth/reducer'
import { reducer as loaderReducer } from './loader/reducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
})
