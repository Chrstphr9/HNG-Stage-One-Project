import React from 'react'
import { useNavigate } from 'react-router-dom'

const FIrst = () => {
  let navigate = useNavigate();
  return (
     <section className="first">
    <div className="firstContainer">
      <label>FIrst Page</label>
     
    
      <p className="errorMsg"></p>
      <div className="btnContainer"> 
            <button onClick={() => {
              navigate("/second");
            }}>
              {" "}
              Go To Next Page</button>
      </div>
    </div>
  </section>
  )
}

export default FIrst