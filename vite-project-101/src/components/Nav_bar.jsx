import React from 'react'
import { Link } from 'react-router-dom'
import './nav_bar.css'
const Nav_bar = () => {
    return (
        <div className='nav_bar'>
            <Link to={"/"} className="left">React101Me</Link>
            <div className="right">
                <Link className="items" to={"/courses"}>Courses</Link>
                <Link className="items" to={"/team"}>Team</Link>
                <Link className="items" to={"/contact"}>Contact</Link>
                <Link className="items" to={"/about"}>About</Link>
            </div>
        </div>
    )
}

export default Nav_bar