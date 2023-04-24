import React from 'react'
import Country from './Country'
import LeftSideFooter from './LeftSideFooter'

function Footer() {
  return (
    <div style={{paddingTop:'6rem', fontSize:'1.05rem'}}>

        <Country />
        <LeftSideFooter />
      
    </div>
  )
}

export default Footer