import React from 'react'
import hero_logo from "../photocartoon/hero-img.png";
import { NavLink } from 'react-router-dom';

const MyName = () => {
  return (
   <div className='MyName_style'>
   <div className='my_name'>
   <div className='hero_logo'>
   <img src={hero_logo} alt="logo"/>
   </div>
   
   <div className='welcome_user'>
   <p>welcome user your nice day , happy journey</p>
   <NavLink to={'/'} className='btn_link_myname'>go back home</NavLink>
   </div>

   </div> 
   </div>
  )
}

export default MyName
