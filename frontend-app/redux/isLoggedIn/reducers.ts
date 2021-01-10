// src/store/chat/reducers.ts

import { LoggedInState, LoginActionTypes, LOGIN, LOGOUT } from './types'

const initialState: LoggedInState = {
  loggedIn: false,
  token: '',
}

export function loginReducer(
  state = initialState,
  action: LoginActionTypes
): LoggedInState {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      }
    case LOGOUT:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
