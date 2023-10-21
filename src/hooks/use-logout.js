import axios from "../apis/axios";
import { useAuthContext } from "./use-auth-context";

export const useLogin = () => {
  const { dispatch } = useAuthContext()
  const logout = () => {

    localStorage.removeItem('accessToken')

    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}