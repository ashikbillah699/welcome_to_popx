/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log(user)

    const createSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (displayName, photoURL) =>{
        return updateProfile(auth.currentUser, {displayName, photoURL})
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)
        })
        return () =>{
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        createSignUp,
        user,
        updateUserProfile,
        createLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;