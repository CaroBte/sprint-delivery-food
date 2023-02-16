import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { crudUser, authApi } from "../api"

export const authContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()

    onAuthStateChanged(authApi.auth, (_user) => {
        if (_user) {
            setUser(_user)
            const newUser = {
                name: _user.displayName,
                email: _user.email,
                photo: _user.photoURL
            }
            const id = _user.uid
            crudUser.sendUser(newUser, id)
        } else {
            setUser(null)
        }
    })

    return (
        <authContext.Provider value={{ user }}>
            {children}
        </authContext.Provider>
    )
}