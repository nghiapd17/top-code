import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

export const GlobalState = createContext()
export const useGlobalContext = () => {
  return useContext(GlobalState)
}

export function DataProvider({ children }) {
  const [token, setToken] = useState('')

  useEffect(() => {
    const firstLogin = window.localStorage.getItem('auth-ALG')
    if (firstLogin) {
      const refreshToken = async () => {
        const response = await axios.get('')
        setToken(response?.data?.accessToken)
        setTimeout(() => refreshToken(), 120000)
      }
      refreshToken()
    }
  }, [])

  const state = {
    token: [token, setToken],
    // api
  }

  return (
    <GlobalState.Provider value={state}>
      {children}
    </GlobalState.Provider>
  )
}