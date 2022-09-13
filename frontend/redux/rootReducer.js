import { combineReducers } from 'redux'

import { reducer as authReducer } from './auth/reducer'
import { reducer as loaderReducer } from './loader/reducer'
import { reducer as subjectsReducer } from './subjects/reducer'
import { reducer as studentsReducer } from './students/reducer'
import { reducer as coursesReducer } from './courses/reducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  subjects: subjectsReducer,
  students: studentsReducer,
  courses: coursesReducer,
})
