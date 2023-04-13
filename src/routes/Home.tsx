import React, { useEffect, useState } from 'react'
import '../App.css'
import Navigation from '../components/Nav'
import Editor from '../components/Editor'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebaseconfig'
import { getAuth } from 'firebase/auth'
import { createContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

// initialize firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);

// context
interface User {
  authenticated: boolean,
  username: string | null,
}

export const UserContext = createContext<User>({
  authenticated: false,
  username: 'null'
})


function Home() {
  const [user, setUser] = useState<User>({
    authenticated: false,
    username: 'null'
  })

  useEffect(() => {
    onAuthStateChanged(auth, (thisUser) => {
      if(thisUser){
        // logged in
        setUser({
          authenticated: true,
          username: thisUser.email
        })
      } else {
        // signed out
        setUser({
          authenticated: false,
          username: 'null'
        })
      }
    })
  }, [])


  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Navigation />
        <Editor />
      </div>
    </UserContext.Provider>
  )
}

export default Home