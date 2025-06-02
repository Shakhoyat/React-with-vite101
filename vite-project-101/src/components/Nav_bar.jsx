import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './nav_bar.css'
const Nav_bar = () => {
    const [isLoggedin, setisLoggedin] = useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
        setisLoggedin(true);
        navigate('/dashboard');
    }
    const handleLogout = () => {
        setisLoggedin(false);
        navigate('/');
    }

    return (
        <div className='nav_bar'>
            <Link to={"/"} className="left">React101Me</Link>
            <div className="right">
                {
                    isLoggedin && (
                        <>
                            <Link className="items" to={"/courses"}>Courses</Link>
                            <Link className="items" to={"/team"}>Team</Link>
                            <Link className="items" to={"/dashboard"}>Dashboard</Link>
                            <Link className="items" to={"/profile"}>Profile</Link>
                            <button className='items' onClick={handleLogout} style={{ fontWeight: 'bold', backgroundColor: "-moz-initial" }}>LogOut</button>
                        </>
                    )
                }
                {
                    !isLoggedin && (
                        <>
                            <Link className="items" to={"/about"}>About</Link>
                            <Link className="items" to={"/contact"}>Contact</Link>
                            <button className='items' onClick={handleLogin} style={{ fontWeight: 'bold', backgroundColor: "-moz-initial" }}>Login</button>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Nav_bar