import React from 'react'
import "./style.css"
import LOGO from "../Logo/Logo Yellow.png"
const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg fixed-top bg-transparent navbar-dark" id="navbar">
  <div className="container">
<a href="#home">

      <img src={LOGO} alt=""  className='navbar-brand' />
</a>

    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " id='navLink1' aria-current="page" href='#about'>About Me!</a>
        </li>
 
        <li className="nav-item">
          <a className="nav-link" href="#Mywork" id='navLink2'>My Work</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar