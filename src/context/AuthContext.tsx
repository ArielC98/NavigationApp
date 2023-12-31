import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir como luce, que informacion tendre aqui
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Estado inicial
export const authInitalState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined
}

//Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUsername: (newUsername: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componente que es el proveedor del estado
export const AuthProvider = ({ children }: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitalState);

  const signIn = () => {
    dispatch({type:'signIn'});
  }
  const signOut = () => {
    dispatch({type:'signOut'});
  }

  const changeFavoriteIcon = (iconName:string) => {
    dispatch({type:'changeFavIcon', payload:iconName})
  }

  const changeUsername = (newUsername:string) => {
    dispatch({type:'changeUsername', payload:newUsername})
  }

  return (
    <AuthContext.Provider value={{
      authState, //Es igual a authState: authState pero EM6 evita la redundancia
      signIn,
      signOut,
      changeFavoriteIcon,
      changeUsername
    }}>
      {children}
    </AuthContext.Provider>
  )
}