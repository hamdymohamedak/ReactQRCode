import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <ul>
        <li> <Link id='nav_home' to="/" >home</Link></li>
        <li> <Link id='nav_style' to="/QrcodeStyle" >Style</Link></li>
    </ul>
  )
}

export default NavBar