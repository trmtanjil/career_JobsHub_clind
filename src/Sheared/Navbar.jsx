import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../Context/AuthContext'

function Navbar() {
    const {user,signOutUser}= use(AuthContext)

const links =<>
<NavLink  className='px-6' to='/'>Home</NavLink>
{
  user && <>
  <NavLink  className='px-6'   to='myApplications'>My Applications</NavLink>
  </>
}
{
  user && <>
    <NavLink  className='px-6'   to='addjoob'>Add Job</NavLink>
        <NavLink  className='px-6'   to='mypostedjob'>My Posted Job</NavLink>


  </>
}
</> 


 
 const handlesignOut =()=>{
    signOutUser()
    .then(res=>{
        console.log('sign out succesfully', res)
    })
    .catch(error=>{
        console.log('sign out error', error)
    })
 }


  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <div>
         {links}
      </div>
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ?<button onClick={handlesignOut}>singOut</button>:<>
        <button className='btn mx-3'> <Link to='register'>SignUp</Link></button>
     <button className='btn '> <Link to='signin'>SignIn</Link></button>
        </>
    }
  </div>
</div>
  )
}

export default Navbar