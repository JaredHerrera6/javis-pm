import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to = "/" className='navbar-link'>Home</Link>
        <Link to = "/concrete" className='navbar-link'>Concrete</Link>
        <Link to = "/Drainage" className='navbar-link'>Drainage System</Link>
        <Link to = "/Masonry" className='navbar-link'>Masonry</Link>
        <Link to = "/AboutUs" className='navbar-link'>About Us</Link>
    </div>
  )
}

export default Navbar