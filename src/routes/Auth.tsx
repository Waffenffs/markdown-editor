import React from 'react';
import { auth } from './Home';
import '../App.css'
import { useState } from 'react'
import Register from '../components/Register';
import Login from '../components/Login';

function Auth() {
    // TO DO:
    // create a login/register page
        // hook up to firebase authentication
    // email
    // password

  const [register, setRegister] = useState<boolean>(true);

  return (
    <div className="auth-container">
      {register && <Register changeStatus={(value: boolean) => setRegister(value)} /> }
      {!register && <Login changeStatus={(value: boolean) => setRegister(value)} /> }
    </div>
  )
}

export default Auth