import React from 'react';
import { auth } from './Home';
import '../App.css'
import { useState } from 'react'
import Register from '../components/Register';
import Login from '../components/Login';
import { AiOutlineRollback } from 'react-icons/ai'
import { useNavigate } from 'react-router';

function Auth() {
  const [register, setRegister] = useState<boolean>(true);

  // navigator
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-back-container" onClick={() => navigate('/')}>
        <AiOutlineRollback />
        <button className='navigate-home'>Back</button>
      </div>

      {register && <Register changeStatus={(value: boolean) => setRegister(value)} /> }
      {!register && <Login changeStatus={(value: boolean) => setRegister(value)} /> }
    </div>
  )
}

export default Auth