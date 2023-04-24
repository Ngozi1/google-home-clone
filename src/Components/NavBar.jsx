import React from 'react'
import DropdownApps from './DropdownApps'
import NavItem from './NavItem'
import ProfileIcon from './ProfileIcon'

const NavBar = () => {
  return (
    <div style={{display:'flex', justifyContent:'flex-end', padding:'2rem'}}>

      <div style={{display:'flex', gap:'1rem'}}>
        <NavItem title={'Gmail'} />
        <NavItem title={'Images'}  />
        <DropdownApps />
        <ProfileIcon />

      </div>
        
        
    </div>
  )
}

export default NavBar