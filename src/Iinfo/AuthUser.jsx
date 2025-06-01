import React, { use } from 'react'
import { AuthContext } from '../Context/AuthContext'

function AuthUser() {
   const  AuthInfo =use(AuthContext)
  return AuthInfo;
}

export default AuthUser