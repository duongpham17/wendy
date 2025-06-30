import React, { useEffect, useState, createContext } from 'react';
import { IUsers } from '@database/models/users';
import { authentication } from '@localstorage';
import { api } from '@database/api';

interface Props {
    children: React.ReactNode,
};

export interface PropsContextTypes {
    user: IUsers | null | undefined,
    protect: (userAllowed: string[]) => void
};

// for consuming in children components, initial return state
export const Context = createContext<PropsContextTypes>({
    user: null,
    protect: (userAllowed) => null
});

export const useAuthentication = ({children}: Props) => {
    const [user, setUser] = useState<IUsers | null | undefined>(null);

    useEffect(() => {
        const storage = typeof window === "undefined" ? "" :  localStorage.getItem(authentication.name);
        const user = storage ? JSON.parse(storage) : undefined;
        if(!user) return setUser(user);
        
        (async () => {
            try{
                const response = await api.get("/authentication/persist");
                return setUser(response.data.data);
            } catch(err: any){
                console.log(err.response)
            }
        })();
    }, []);

    const protect = (userAllowed: string[]) => {
        useEffect(() => {
            if(user === null) return;
            if(user === undefined) return window.location.replace("/404")
            if(user){
                if(userAllowed.includes(user.role)) {
                    return;
                } else {
                    window.location.replace("/404")
                }
            } else {
                window.location.replace("/404")
            }
        }, [user])
    };

    const value = {
        user,
        protect
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default useAuthentication