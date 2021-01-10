import { loginReducer } from './isLoggedIn/reducers'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  login: loginReducer,
})

export type RootState = ReturnType<typeof rootReducer>
