import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { provider: action.payload }
    case 'LOGOUT':
      return { provider: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    provider: null
  })

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('data'))

    if(data) {
      dispatch({ type: 'LOGIN', payload: data })
    }
  },[])

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}