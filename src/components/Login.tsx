import React, { useEffect } from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import '../App.css'
import { auth } from '../routes/Home'
import { useNavigate } from 'react-router'

function Login(props: any) {

    const [loginEmail, setLoginEmail] = useState<string>('');
    const [loginPassword, setLoginPassword] = useState<string>('');
    const [errorExists, setErrorExists] = useState<boolean>(false);

    // navigator
    const navigate = useNavigate();

    // handle page display
    const handleClick = () => {
        props.changeStatus(true);
    }
    
    // handle logging in user
    const loginUser = () => {
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((user) => {
                // after 2 seconds; navigate back to home
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            })
            .catch((err) => {
                console.error(err)

                setErrorExists(true);

                setTimeout(() => {
                    setErrorExists(false);
                }, 1000);
            })
    }

    return (
        <article className="authentication">
            <p className="create-account-inquiry">Let's login to your account!</p>
            <div className="part-container">
                <h5>EMAIL *</h5>
                <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value) } />
            </div>
            <div className="part-container">
                <h5>PASSWORD *</h5>
                <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            </div>
            <div className={`button-container ${errorExists && 'shake'}`}>
                <button onClick={loginUser}>LOGIN</button>
            </div>

            <p className="account-inquiry" onClick={handleClick}>Don't have an account yet?</p>
        </article>  
  )
}

export default Login