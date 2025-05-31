import React, { use } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate, useLocation } from 'react-router'

function PrivetRouts({children}) {
   const  {user,loading}= use(AuthContext)
   const location = useLocation();
   if(loading){
    return <h1>loagidng .................</h1> 
   }
   
    if(!user){
    return    <Navigate to='/signIn' state={location.pathname} ></Navigate>
    }

  return children
}

export default PrivetRouts