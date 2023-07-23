import { createContext, useReducer } from "react";

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
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componente que es el proveedor del estado
export const AuthProvider = ({ children }: any) => {

  return (
    <AuthContext.Provider value={{
      authState: authInitalState,
      signIn: () => { }
    }}>
      {children}
    </AuthContext.Provider>
  )
}