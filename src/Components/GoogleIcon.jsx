import React from 'react'
import Google from '../images/google.png'

function GoogleIcon() {
  return (
    <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <img src={Google} alt="Google Icon"  style={{width:'20%'}} />
    </div>
  )
}

export default GoogleIcon