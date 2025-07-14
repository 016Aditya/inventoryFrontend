import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';
import { useState } from 'react';
import {User} from 'firebase/auth';
type AuthContextType = {
    user: User | null;
    setUser: Dispatch<SetStateAction <User | null>>;
}

export const AuthContext = createContext<AuthContextType>({user: null, setUser: () => {}});
export const Authprovider = ({children}:{children:ReactNode}) => {
    const [user, setUser] = useState<User | null>(null); 
    return (
        <AuthContext.Provider value={{user,setUser}}>{children}</AuthContext.Provider>
    )
}