import React, { useState, useEffect } from "react"
import app from "../firebase"

export const AuthContext = React.createContext<any | null>(null)

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<any | null>(null)

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
