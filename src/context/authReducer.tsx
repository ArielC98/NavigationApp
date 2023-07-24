import { AuthState } from "./AuthContext";

type AuthAction = { type: 'signIn' } //definimos las propiedades de un objeto tipo accion

export const authReducer = (state: AuthState, action: AuthAction): AuthState => { //un Reducer siempre debe retornar un estado
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'not registered yet'
      }
    default:
      return state;
  }
}