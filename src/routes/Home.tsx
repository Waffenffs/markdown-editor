import React from 'react'
import '../App.css'
import Navigation from '../components/Nav'
import Editor from '../components/Editor'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebaseconfig'
import { getAuth } from 'firebase/auth'

// initialize firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);


function Home() {

  return (
    <div className="App">
        <Navigation />
        <Editor />
    </div>
  )
}

export default Home