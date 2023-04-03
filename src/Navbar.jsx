import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <p>NAVBAR</p>
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/contact'> Contact </Link>
        </div>
    )
}
