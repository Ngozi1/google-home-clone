import React from 'react'
import NavItem from './NavItem'

function RightFooter() {
  return (
    <div style={{display:'flex', marginLeft:'18rem', gap:'1.5rem'}}>
          <NavItem title={'Privacy'} />
          <NavItem title={'Terms'} />
          <NavItem title={'Settings'} />

    </div>
  )
}

export default RightFooter