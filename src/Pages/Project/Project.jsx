import React from 'react'
import './style.css'
import Navbar from './../../Component/NavProject/Navbar';
import Footer from './../../Component/Footer/Footer';
import ProjectImg from "../Home/back.png"

const Project = () => {
  return (
    <>
    <div className='Project'>
        <Navbar />

        <div className="imgProject">
            <img src={ProjectImg} alt="" />
        </div>
        <hr />

        <div className="content">
            <h3>Between Lines: Teaser </h3>

            <p>Out of trauma, blooms a sense of healing and connection. “Between Lines” is an upcoming short film that speaks to the scarring experience of schoolgirl bullying - and the recovery that follows. The narrative follows a young womans journey as she navigates isolation, exclusion and anxiety.</p>


            <a href="www.betweenlinesfilm.com" >betweenlinesfilm.com</a>

        </div>
        <div className="info"></div>



    </div>
        <Footer/>
    </>
  )
}

export default Project