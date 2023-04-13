import React from "react";
import { FaBars } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "../routes/Home";
import { signOut } from "firebase/auth";
import { auth } from "../routes/Home";
import '../App.css'

function Navigation() {
    const [showBar, setShowBar] = useState<boolean>(false);
    const { authenticated, username } = useContext(UserContext);

    const handleSignOut = () => {
        signOut(auth)

        console.log('Successfully signed out.')

        setTimeout(() => {
            // refresh page after 1 sec
            window.location.reload();
        }, 1000);
    }

    return(
        <React.Fragment>
            <nav>
                <div className="nav-bar" onClick={() => setShowBar(prevState => !prevState)}>
                    <FaBars />
                    {showBar && 
                    <ul>
                        <li>
                            <Link to={'/auth'} style={{ color: 'inherit'}}>
                                <AiOutlineUser className="user-icon" />
                            </Link>
                        </li>
                        {authenticated &&
                        <li>
                            <p className="logout-button" onClick={handleSignOut}>Logout</p>    
                        </li>}
                    </ul>}
                </div>
                <h1>MARKDOWN</h1>
            </nav>
        </React.Fragment>
    )
}

export default Navigation;