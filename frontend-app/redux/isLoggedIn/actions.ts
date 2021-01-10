import { LoggedInState, LOGIN, LOGOUT, LoginActionTypes } from './types'

// TypeScript infers that this function is returning LoginAction
export function login(login: LoggedInState): LoginActionTypes {
  return {
    type: LOGIN,
    payload: login,
  }
}

// TypeScript infers that this function is returning LogoutAction
export function logout(logout: LoggedInState): LoginActionTypes {
  return {
    type: LOGOUT,
    payload: logout,
  }
}
