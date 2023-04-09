import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import '../App.css'

function Login(props: any) {
    const [loginEmail, setLoginEmail] = useState<string>('');
    const [loginPasword, setLoginPassword] = useState<string>('');

    const handleClick = () => {
        props.changeStatus(true);
    }
    
    return (
        <article className="authentication">
            <h1 className='auth-title'>Afin's MD</h1>
            <p>Welcome back!
                <span onClick={handleClick} className='inquiry'> Don't have an account already?</span>
            </p>
            <div className="part-container">
                <h5>EMAIL *</h5>
                <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value) } />
            </div>
            <div className="part-container">
                <h5>PASSWORD *</h5>
                <input type="password" value={loginPasword} onChange={(e) => setLoginPassword(e.target.value)} />
            </div>
            <div className="button-container">
                <button>REGISTER</button>
            </div>
        </article>  
  )
}

export default Login