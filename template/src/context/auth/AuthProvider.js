import { useEffect, useState } from 'react';
import * as Keychain from "react-native-keychain";
import AuthContext from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState("")
    const [shouldForceUpdateApp, setShouldForceUpdateApp] = useState(false)

    useEffect(() => {
        async function isUserLogged() {
            try {
                const credentials = await Keychain.getGenericPassword();
                setIsUserLoggedIn(credentials === false ? false : true)
            } catch {
                setIsUserLoggedIn(false)
            }
        }
        isUserLogged()
    }, []);

    const getUser = async () => {
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials === false) {
                return {}
            } else {
                return JSON.parse(credentials.password)
            }
        } catch {
            return {}
        }
    }

    return (
        <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, getUser, shouldForceUpdateApp, setShouldForceUpdateApp }}>{children}</AuthContext.Provider>
    );
};