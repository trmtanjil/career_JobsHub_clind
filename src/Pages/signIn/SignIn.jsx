import Lottie from 'lottie-react'
import React, { use } from 'react'
import signinloop from '../../assets/login.json'
import { AuthContext } from '../../Context/AuthContext'
import { useLocation, useNavigate } from 'react-router'

function SignIn() {
    const {signIn}= use(AuthContext)
    const location =useLocation();
    const navigat = useNavigate()
    const from =  location.state || '/';


    const handleSignin =e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(res=>{
            console.log('user succesflly login', res)
            navigat(from)
        })
        .catch(erro=>{
            console.log('user signin error', erro)
        })

    }


  return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <Lottie animationData={signinloop} style={{width:'300px'}}></Lottie>
    </div>
    <form onSubmit={handleSignin} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password' />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </form>
  </div>
</div>
  )
}

export default SignIn