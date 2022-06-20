import React from 'react'
import "./style.css"
import IMG from "./img/1.PNG"
import IMG2 from "./img/Pattern 02.png"
const About = () => {
  return (
    <div className="about" id='about'>
      <div className="img">
        
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-5">
            <div className="left">
              <img src={IMG2} className="image" alt="" />
              <h3><span>

                Wanna grap
              </span>
              a cup of coffee?</h3>
              <p>
                Please contact newbiz@hellohornet.com for new business / project opportunities.
                <br />
                Feel free to say hello at hey@sarahbethmorgan.com.
              </p>

            </div>
          </div>

          <div className="col-lg-7 col-12 col-sm-12">
            <div className="right">
              <div className="fst">
              <img src={IMG} alt="" />
              </div>
              <div className="sec">
                    <h3>Hi There! <span>I am Abdullah Taha</span></h3>

                    <p>I’m an animation director, illustrator and (most importantly!) a dog mom based
                    in Cleveland, OH. I grew up in the magical, far-away Kingdom of Saudi Arabia,
                    where I was deprived of bacon and cable television - but granted a unique and
                    broad perspective.

                    </p>
                    
                    <p>
                    After attending SCAD and an early career at Scholar and Oddfellows in LA + Portland,
                    I now work from my own little Cleveland studio with my adorable, fluffy
                    assistant, Bandit. I collaborate closely with motion studios and clients like Chipotle,
                    Ecobee and Google on commercial animation + illustration. As a full-time freelancer
                    and online educator, I enjoy diving headfirst into passion projects, advocating
                    for women in the industry and listening to bad music.</p>
              </div>
        
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default About