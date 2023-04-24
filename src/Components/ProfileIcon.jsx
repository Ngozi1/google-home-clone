import React from 'react'
import Profile from '../images/profileIcon.png'

function ProfileIcon() {
  return (
    <div>
      <img src={Profile} alt="Profile icon" style={{height:'1.5rem', borderRadius:'1rem'}} />
    </div>
  )
}

export default ProfileIcon