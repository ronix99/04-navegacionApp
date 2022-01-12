import { AuthState } from "./AuthContext";

type AuthAction = {
    type: 'signIn' | 'signOut',
}


export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    
    switch ( action.type ) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'no-user-name-yet',
            }
        case 'signOut':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
            }
        default:
            return state;
    }
}