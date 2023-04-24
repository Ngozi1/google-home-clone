import React from 'react'
import FooterText from './FooterText'
import NavItem from './NavItem'
import RightFooter from './RightFooter'


function LeftSideFooter() {
  return (
    <div style={{display:'flex', gap:'1.5rem', color:'gray', backgroundColor: 'rgb(236, 235, 235)',padding:'0 0 1rem 2.5rem'}}>
      <NavItem title={'About'} />
      <NavItem title={'Advertising'} />
      <NavItem title={'Business'} />
      <NavItem title={'How Search Works'} />

      <FooterText />
      <RightFooter />
    </div>
  )
}

export default LeftSideFooter