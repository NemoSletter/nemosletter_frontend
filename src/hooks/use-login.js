import axios from "../apis/axios";
import { useAuthContext } from "./use-auth-context";

export const useLogin = () => {
  const { dispatch } = useAuthContext()
  const login = async(data) => {
    const gIdToken = data.credential
    const user = await axios.get('/auth/login', {
      params: {
        gIdToken
      }
    });

    localStorage.setItem('accessToken', JSON.stringify(user.data.accessToken))

    dispatch({ type: 'LOGIN', payload: user.data })
  }

  return { login }
}