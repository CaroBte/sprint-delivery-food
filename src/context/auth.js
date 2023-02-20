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
                displayName: _user.displayName,
                email: _user.email,
                photoURL: _user.photoURL,
                uid: _user.uid
            }
            const uid = _user.uid
            crudUser.sendUser(newUser, uid)
        } else {
            setUser(null)
        }
    })

    /* const getUserDetails = async (_id) => {
        let userInfo = await crudUser.getUserDetails(_id)
        setUser(userInfo)
    } */

    const editUser = async (_user, _uid) => {
        await crudUser.sendUser(_user, _uid)
        /*  await getUserDetails(_uid) */
    }

    return (
        <authContext.Provider value={{ user, setUser, editUser }}>
            {children}
        </authContext.Provider>
    )
}