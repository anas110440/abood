import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./style.css"

const Mywork = () => {
  const [show,setShow]=useState(true);
  const [showText,setShowText]=useState("Show More");

const showProject = ()=>{
  if(show===true){
    setShow(false);
    setShowText("Show Less")
  }else{
    setShow(true);
    setShowText("Show More")
    
  }
}

  return (
    <div className='Mywork' id='Mywork'>
        <h3>Title Here</h3>
        <p>Some Text Here Some Text Here Some Text Here Some Text Here
Some Text Here Some Text Here Some Text Here Some Text Here
Some Text Here Some Text Here</p>


<div className="project">
  <div className="container">
    <div className="row">
<div className="col-12 col-sm-6 col-md-4">
  <Link to="/project">
<div className="box"></div>

  </Link>
</div>
<div className="col-12 col-sm-6 col-md-4">
<div className="box"></div>
</div>

<div className="col-12 col-sm-6 col-md-4">
<div className="box"></div>
</div>



<div className="col-12 col-sm-6 col-md-4">
<div className="box" hidden={show}></div>
</div>
<div className="col-12 col-sm-6 col-md-4">
<div className="box" hidden={show}></div>
</div>

<div className="col-12 col-sm-6 col-md-4">
<div className="box" hidden={show}></div>
</div>

<div className="col-12 col-sm-6 col-md-4">
<div className="box" hidden={show}></div>
</div>
<div className="col-12 col-sm-6 col-md-4">
<div className="box" hidden={show}></div>
</div>

<div className="col-12 col-sm-6 col-md-4">
<div className="box" hidden={show}></div>
</div>

<button className='btn  d-block ms-auto me-auto ' onClick={()=>showProject()}>{showText}</button>

    </div>
  </div>
</div>

    </div>
  )
}

export default Mywork