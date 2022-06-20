import React from 'react'
import { NavLink } from "react-router-dom";
import "./style.css"
import LOGO from "../Logo/Logo Yellow.png"
const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg   navbar-dark" id="navbar">
  <div className="container">
<NavLink to="/abood">

      <img src={LOGO} alt=""  className='navbar-brand' />
</NavLink>

    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link " id='navLink1' aria-current="page" to='/abood'>About Me!</NavLink>
        </li>
 
        <li className="nav-item">
          <NavLink className="nav-link" to="/abood" id='navLink2'>My Work</NavLink>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar