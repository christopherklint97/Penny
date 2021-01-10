export interface LoggedInState {
  loggedIn: boolean
  token: string
}

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

interface LoginAction {
  type: typeof LOGIN
  payload: LoggedInState
}

interface LogoutAction {
  type: typeof LOGOUT
  payload: LoggedInState
}

export type LoginActionTypes = LoginAction | LogoutAction
