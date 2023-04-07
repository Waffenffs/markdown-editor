import React from 'react'
import { 
    createUserWithEmailAndPassword, 
     } from 'firebase/auth';

function Register(props: any) {
    const handleClick = () => {
        props.changeStatus(false)
    }

  return (
    <article className="authentication">
        <h1>Afin's MD</h1>
        <p>Sign up now. 
            <span onClick={handleClick} className='inquiry'>Already have an account?</span>
        </p>
        <div className="part-container"></div>
    </article>
  )
}

export default Register