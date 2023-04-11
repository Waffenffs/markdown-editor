import React from 'react'
import { 
    createUserWithEmailAndPassword, 
     } from 'firebase/auth';
import { useState } from 'react'
import { auth } from '../routes/Home';
import { useNavigate } from 'react-router';
import '../App.css'

function Register(props: any) {

  const [registerEmail, setRegisterEmail] = useState<string>('');
  const [registerPassword, setRegisterPassword] = useState<string>('');
  const [errorExists, setErrorExists] = useState<boolean>(false);

  // navigator
  const navigate = useNavigate();

  const handleClick = () => {
      props.changeStatus(false)
  }

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((user) => {
        // navigate user back to home page
        setTimeout(() => {
          navigate('/')
        }, 2000);
      })
      .catch((err) => {
        console.error(err);

        setErrorExists(true);

        setTimeout(() => {
            setErrorExists(false);
        }, 1000);
      })
  }

  return (
    <article className="authentication">
      <p className='create-account-inquiry'>Let's create your account!</p>
      <div className="part-container">
        <h5>EMAIL *</h5>
        <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value) } />
      </div>
      <div className="part-container">
        <h5>PASSWORD *</h5>
        <input type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
      </div>
      <div className={`button-container ${errorExists && 'shake'}`} >
        <button onClick={registerUser}>REGISTER</button>
      </div>

      <p onClick={handleClick} className='account-inquiry'>Already have an account?</p>
    </article>
  )
}

export default Register