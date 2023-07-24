import { AuthState } from "./AuthContext";

type AuthAction =
  | { type: 'signIn' }
  | { type: 'changeFavIcon', payload: string }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => { //un Reducer siempre debe retornar un estado
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'not registered yet'
      }
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }
    default:
      return state;
  }
}