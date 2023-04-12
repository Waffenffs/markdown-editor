import React from "react";
import { FaBars } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

function Navigation() {
    const [showBar, setShowBar] = useState<boolean>(false);

    // add features of logging out;
        // if user is logged in, the markdown data will be kept intact
            // for the user to access on later accesses

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
                    </ul>}
                </div>
                <h1>MARKDOWN</h1>
            </nav>
        </React.Fragment>
    )
}

export default Navigation;