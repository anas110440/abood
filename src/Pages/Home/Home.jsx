import React from 'react'
import About from '../../Component/About-Section/About'
import Footer from '../../Component/Footer/Footer'
import Mywork from '../../Component/myWork/Mywork'
import Navbar from '../../Component/Navbar/Navbar'
import './style.css'
const Home = () => {
   const nav = ()=>{
    
   window.addEventListener('scroll', function() {
      let scroll = window.scrollY;
      if (scroll >=602) {
         document.getElementById("navLink1").style.color = "#2c327e";
         document.getElementById("navLink2").style.color = "#2c327e";
  
      } else {
             document.getElementById("navLink1").style.color = "#fff";
             document.getElementById("navLink2").style.color = "#fff";
       }
  });
  }

  nav();
  return (
    <>
    <div className='home' id='home'>
        <Navbar /> 
    <div className="arrow">
      
        <p>be <br />
        Cre<span>A.R.T.</span>ive </p>
        <div className="sequer"></div>
        <a href="#about" className="arr"></a>
    </div>
    </div>
    <About />
    <Mywork />
    <Footer />
    </>
  )
}

export default Home