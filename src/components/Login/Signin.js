import React, { useState } from 'react' 
import './Signin.css' 
import { Link } from 'react-router-dom' 
function Signin() { 
  const [email,setEmail]=useState(null) ;
  const [password,setPassword]=useState(null) ;

  const signin = async()=>{
    let resp = await fetch('/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,password
      })
    })
    if(!resp.error){
      window.location='/';
    }
    
  }

 
  return ( 
    <div className='signin-container'> 
        <div className='heading-paragraph'> 
            <h1>TechIt</h1> 
        </div> 
            <div className='sign-in-container'> 
                <h1>Sign In</h1> 
                <input type='text' placeholder='Email' onChange={e=>setEmail(e.target.value)}/> 
                <input type='password' placeholder='Password' onChange={e=>setPassword(e.target.value)}/> 
                <button  className='signin-btn' onClick={signin}>Sign In</button> 
                <div className='remember'> 
                <p>Don't have an account?&nbsp;<span><Link to='/signup' className='link-text'>Sign Up</Link></span></p> 
                <p>Forgot Password?&nbsp;<span ><Link to='/reset' className='link-text'>Reset here</Link></span></p> 
                </div>   
            </div> 
    </div> 
 
  ) 
} 
 
export default Signin