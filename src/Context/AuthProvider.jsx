import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.init'

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading , setLoading]= useState(true)
 

    const creatuserRegister =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth ,email,password)
    }
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
      const signOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }



    const userInfo ={
        loading,
        user,
        creatuserRegister,
        signIn,
        signOutUser

    }
  

    //user spy 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        setLoading(false)
        console.log('user observer ', currentUser)
        });
        return () =>{
            unSubscribe()
        }
        
    },[])

  return (
    <div>
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider