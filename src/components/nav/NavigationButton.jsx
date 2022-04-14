import React from 'react'
import './navigation.scss'
export default function NavigationButton({navBtn,handleNavigation,btnId}) {       
    const navIconActiveStyle={
         borderBottom: '2px solid #F2F3F5',
         borderBottomLeftRadius:'0',
         borderBottomRightRadius:'0',
     }
  return (
    <div style={navBtn.id===btnId?navIconActiveStyle:{}} 
        className="navigation-buttom" 
        onClick={()=>{handleNavigation(navBtn.id)}} 
        name={navBtn.name} >
        {navBtn.icon}
    </div>
  )
}
