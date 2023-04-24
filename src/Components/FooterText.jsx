import React from 'react'
import Leaf from '../images/leaf.png'

function FooterText() {
  return (
    <div>
        <div style={{marginLeft:'10rem' }}>
            <img src={Leaf} alt="Leaf Image"  style={{width:'7%'}}/>
            Carbon neutral since 2007
        </div>
    </div>
  )
}

export default FooterText