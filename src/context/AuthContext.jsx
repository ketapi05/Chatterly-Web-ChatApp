import { onAuthStateChanged } from "firebase/auth";
import { createContext , useEffect, useState} from "react";
import { auth } from "../firebase";

export const AuthContext = createContext()

/** we are gonna create authentication provider and 
 *  and we gonnna create our user there and use it everywhere
*/

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            //console.log(user)
        });

        return () => {
            unsub();
        }
    }, []);
    

    return (
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>

    )
       
}