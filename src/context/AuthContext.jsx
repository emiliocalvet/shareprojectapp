import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'

const Context = createContext()

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const accesToken = localStorage.getItem('token')
    if (accesToken) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(accesToken)}`
      setAuthenticated(true)
    }
    setLoading(false)
  }, [setLoading])

  async function signIn({ username, password }) {
    const response = await api.post('auth/signin', { username, password })
    const { accessToken } = response.data
    localStorage.setItem('token', JSON.stringify(accessToken))
    api.defaults.headers.Authorization = `Bearer ${accessToken}`
    setAuthenticated(true)
  }

  function signOut() {
    localStorage.removeItem('token')
    setAuthenticated(false)
  }

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <Context.Provider value={{ signIn, signOut, authenticated }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }
