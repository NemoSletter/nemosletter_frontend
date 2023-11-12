import { useAuthContext } from "./use-auth-context";

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const logout = () => {

    localStorage.removeItem('accessToken')

    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}