import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
    <Link to='/'>Home</Link>
    <Link to='/product'>Product</Link>
    <Link to='/aboutus'>About us</Link>
    <Link to='/contactus'>Contact us</Link>
    </div>
  )
}

export default Menu