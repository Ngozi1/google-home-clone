import React from 'react'
import GoogleIcon from './GoogleIcon'
import SearchBar from './SearchBar'
import Button from './Button'
import Language from './Language'

function MainSection() {
  return (
    <div>
        <GoogleIcon />
        <SearchBar />
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'3rem', marginTop: '2rem' }}>
          <div style={{ backgroundColor: 'rgb(238, 235, 235)', padding:'0.5rem 1rem', cursor:'pointer'}}><Button button={'Google Search'} /></div>
          <div style={{ backgroundColor: 'rgb(238, 235, 235)', padding:'0.5rem 1rem', cursor:'pointer'}}><Button button={'I am Feeling Lucky'} /></div>
        </div>
        <div style={{display:'flex', justifyContent:'center', gap:'1rem', marginTop:'3rem'}}>
          Google offered in:
          <div style={{color:'blue', display:'flex', gap:'1rem'}}>
            <Language name={'Hausa'} />
            <Language name={'Igbo'} />
            <Language name={'Èdè Yorùbá'} />
            <Language name={'Nigeria Pidgin'} />
          </div>
        </div>
    </div>
  )
}

export default MainSection