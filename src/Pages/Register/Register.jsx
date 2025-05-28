import Lottie from 'lottie-react'
import React, { use } from 'react'
import regitsterloop from '../../assets/register.json'
import { AuthContext } from '../../Context/AuthContext'

function Register() {
    const {creatuserRegister}=use(AuthContext)






    const handleregister=e=>{
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        creatuserRegister(email,password)
        .then(result=>{
            console.log('after regfister ', result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }




  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <Lottie animationData={regitsterloop} style={{width:'300px'}}></Lottie>
    </div>
    <form onSubmit={handleregister} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Register now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password' />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
    </form>
  </div>
</div>
  )
}

export default Register