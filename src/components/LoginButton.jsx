import React, { useState } from 'react'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from '../apis/axios';
import { useLogin } from '../hooks/use-login';
import { useAuthContext } from '../hooks/use-auth-context';

export const LoginButton = () => {
  const { provider } = useAuthContext()
  const { login } = useLogin()

  const getUser = async(data) => {
    await login(data)
  }

  return (
    <>
    {
      provider ?
      <div>Hello, {provider.user.name}!</div>
      :
      // <div style={{ color: "#FFFFFF", backgroundColor: "#7357FF", cursor: 'pointer' }} onClick={()=>googleLogin()}>
      //   Đăng nhập
      // </div>
      <GoogleLogin onSuccess={getUser} onError={(e)=>console.log(e)}/>
    }
    </>
  )
}
