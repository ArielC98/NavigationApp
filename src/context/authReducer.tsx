import { AuthState } from "./AuthContext";

type AuthAction =
  | { type: 'signIn' }
  | { type: 'signOut' }
  | { type: 'changeFavIcon', payload: string }
  | { type: 'changeUsername', payload: string }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => { //un Reducer siempre debe retornar un estado
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'not registered yet'
      }
    case 'signOut':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon:undefined
      }
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }
    case 'changeUsername':
      return {
        ...state,
        username: action.payload
      }
    default:
      return state;
  }
}