import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Toggle from "../images/Toggle.png"
import Cart from "../images/Cart.png"
const Header = () => {
  return (
   <>
   <header className="header">
    <div className="container">
      <nav className="nav-icons">
        <img src={Toggle} alt="" />
        <img src={Cart} alt="" />
      </nav>
      <nav className="navbar">
   
        <div className="nav-left">
         <li > <Link to="/">Home</Link> </li>
         <li className='left-brdr2'> <Link to="/contact">Contact</Link> </li>
         <li className='large-grid'></li>
         <li  className='left-brdr2'> <Link to="/signin">Sign in</Link> </li>
         <li > <Link to="/cart">Cart</Link> </li>
        </div>
      </nav>
      <Outlet/> 
    </div>
   </header>
   </>
  )
}

export default Header