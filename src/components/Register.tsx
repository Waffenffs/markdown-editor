import React from 'react'
import { 
    createUserWithEmailAndPassword, 
     } from 'firebase/auth';
import { useState } from 'react'
import '../App.css'

function Register(props: any) {
  // after registration, redirect user to home page

  const [registerEmail, setRegisterEmail] = useState<string>('');
  const [registerPassword, setRegisterPassword] = useState<string>('');

  const handleClick = () => {
      props.changeStatus(false)
  }

  return (
    <article className="authentication">
      <h1 className='auth-title'>Afin's MD</h1>
      <p>Sign up now.  
          <span onClick={handleClick} className='inquiry'> Already have an account?</span>
      </p>
      <div className="part-container">
        <h5>EMAIL *</h5>
        <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value) } />
      </div>
      <div className="part-container">
        <h5>PASSWORD *</h5>
        <input type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
      </div>
      <div className="button-container">
        <button>REGISTER</button>
      </div>
    </article>
  )
}

export default Register