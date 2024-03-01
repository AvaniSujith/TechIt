import React from 'react' 
import './Signup.css' 
import { Link } from 'react-router-dom' 
import { useState } from 'react'

function Signup() { 
  const [email,setEmail]=useState(null) ;
  const [password,setPassword]=useState(null) ;
  const signup = async()=>{
    let resp = await fetch('/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,password
      })
    })
    if(!resp.error){
      window.location='/signin';
    }
  }

  return ( 
    <div> 
        <div className='signup-container'> 
        <div className='heading-paragraph'> 
            <h1>TechIt</h1> 
        </div> 
            <div className='sign-up-container'> 
                <h1>Sign Up</h1> 
                <input type='text' placeholder='Email' onChange={e=>setEmail(e.target.value)}/> 
                <input type='password' placeholder='Password' onChange={e=>setPassword(e.target.value)}/> 
                <button  className='signup-btn' onClick={signup}>Sign Up</button> 
                <div className='remember'> 
                <p>Already have an account?&nbsp;<span ><Link to='/signin' className='link-text'>Sign In</Link></span></p> 
                </div> 
 
                 
            </div> 
             
       
    </div> 
       
    </div> 
  ) 
} 
 
export default Signup