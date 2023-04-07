import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import '../App.css'

function Login(props: any) {
    const handleClick = () => {
        props.changeStatus(true);
    }
    
    return (
        <article className="authentication">
            <h1>Afin's MD</h1>
            <p>Welcome back. 
                <span onClick={handleClick} className='inquiry'>Don't own an account?</span>
            </p>
            <div className="part-container">
                {/* add some stuff here e.g. password & email stuffs */}
            </div>
        </article>  
  )
}

export default Login