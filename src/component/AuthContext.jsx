import React from 'react'
import { useEffect, useState, useContext, createContext } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const unSubscribed = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => unSubscribed();
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext