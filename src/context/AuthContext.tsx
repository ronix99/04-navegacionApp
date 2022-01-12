import React, { createContext, useReducer } from "react"
import { authReducer } from './AuthReducer';


// Definir como luce, que informacion tendre aqui
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

// Estado inicial del contexto
export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decirle a react como luce y que expone el context 
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    signOut: () => void;
}

// Crear el contexto 
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado 
export const AuthProvider = ({ children }: { children: any}) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({
            type: 'signIn',
        });
    }

    const signOut = () => {
        dispatch({
            type: 'signOut',
        });
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                signOut,
            }}
        >
            {/* Aqui va el componente que queremos que se renderice */}
            { children }
        </AuthContext.Provider>
    )
}

