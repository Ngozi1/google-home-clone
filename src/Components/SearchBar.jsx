import React, { useState } from 'react'
import search from '../images/search.svg'
import speaker from '../images/speaker.svg'
import camera from '../images/camera.svg'

function SearchBar() {
  // const [searchInput, setSearchInput] = useState("");
  // const [updated, setUpdated] = useState("");

  // const handleChange = (event) => {
  //   searchInput(event.target.value)
  // };
  
  // const handleKeyDown= (event) => {
  //   if(event.key === "Enter"){
  //     setUpdated(searchInput);
  //   }

    // if (event.key === 'Backspace'){
    //   setUpdated(event.target.value)
    // }
  // };


  return (
   
   <div style={{display:'flex', justifyContent:'space-around', padding:'0.5rem', border:'1px solid rgb(189, 188, 188)', width:'40%', margin:'0 auto',  borderRadius: '2rem', marginTop: '2rem'}}>
       
        <div style={{display:'flex'}}>
             <img src={search} alt="search image"  style={{width:'7%', gap:'1rem'}}  />
        </div>
      
        <div style={{display:'flex', justifyContent:'flex-end'}}>
            <img src={speaker} alt="speaker image" style={{width:'7%', marginRight:'1rem'}} />
            <img src={camera} alt="camera image"  style={{width:'7%'}}/>
        </div>
        


      
    </div>
  )
}

export default SearchBar