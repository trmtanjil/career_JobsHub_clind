import React, { use } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router'

function PrivetRouts({children}) {
   const  {user}= use(AuthContext)
   
    if(!user){
        <Navigate to='/signIn' ></Navigate>
    }

  return children
}

export default PrivetRouts