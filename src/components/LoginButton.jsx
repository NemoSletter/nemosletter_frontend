import React, { useState } from 'react'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from '../apis/axios';

export const LoginButton = () => {
  const [user, setUser] = useState(null)
  const [success, setSuccess] = useState(false)

  const getUser = async(data) => {
    const gIdToken = data.credential
    const user = await axios.get('/auth/login', {
        params: {
          gIdToken
        }
    });

    if(user) {
      console.log(user)
      setSuccess(true)
      setUser(user)
    }
  }

  return (
    <>
    {
      success ?
      <div>Hello, {user.name}!</div>
      :
      // <div style={{ color: "#FFFFFF", backgroundColor: "#7357FF", cursor: 'pointer' }} onClick={()=>googleLogin()}>
      //   Đăng nhập
      // </div>
      <GoogleLogin onSuccess={getUser} onError={(e)=>console.log(e)}/>
    }
    </>
  )
}
