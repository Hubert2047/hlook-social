import React, { useState } from 'react'
import { FaSistrix,FaBell } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiMessengerFill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import './header.scss'
import User from '../user/User';
import {user} from '../../data/api.js'
import NavigationButton from '../../components/nav/NavigationButton'
const navBtns =[
    {
        id:1,
        icon:<AiOutlineHome  className="nav-icon"/>,
        name:'Home',
        isActive:true
    },
    {
        id:2,
        icon: <CgProfile className="nav-icon"/>,
        name:'Profile',
        isActive:false
    },
    {
        id:3,
        icon: <IoIosPeople className="nav-icon"/>,
         name:'Group',
        isActive:false
    },
    {
        id:4,
        icon: <MdOndemandVideo className="nav-icon"/>,
        name:'Videos',
        isActive:false
    },
     {
        
        id:5,
        icon: <SiHomeassistantcommunitystore className="nav-icon"/>,
        name:'Marketplace',
        isActive:false
    }

]
export default function Header() {
    const[navBtnArray,setNavBtnArray]=useState(navBtns)
    const handleNavigation=(id)=>{
        let newNavBtns=[]
        let newNavBtn={}
        navBtnArray.forEach(navBtn=>{
            newNavBtn={...navBtn}
            if(navBtn.id===id){
                newNavBtn.isActive=true
            }else{
                 newNavBtn.isActive=false
            }
            newNavBtns.push(newNavBtn)
        
        })
        setNavBtnArray(newNavBtns)
        
    }
    const mesengerCount= user.mesengers.filter(mesenger=>mesenger.isRead===false).length
    const requestCount =user.requests.length
    const notificationCount =user.notifications.length
  return (
    <div className='header'>
{/* logo */}
        <div className="header__logo">Hlook
        </div>
{/* heaader search */}
        <div className="header__search">
          <FaSistrix className='header__search-icon'/>
          <input className="header__search-input" type="text" placeholder="Search Hlook"/>
        </div>
{/* header nav */}
        <ul className="header__nav">
             {navBtnArray.map(navBtn=>{
                 return <NavigationButton 
                        key={navBtn.id} 
                        navBtn={navBtn}
                        handleNavigation={handleNavigation}
                        />
                                        
             })}          
        </ul>
{/* header icon */}
        <ul className="header__icons">
            <li className="header__icon-box" name="Request">
                <BsFillPeopleFill  className="header__icon" />
                <span className="header__icon-text">{requestCount}</span>
            </li>
                <li className="header__icon-box" name='Messenger'>
                <RiMessengerFill className="header__icon" />
                <span className="header__icon-text">{mesengerCount}</span>
            </li>

            <li className="header__icon-box" name='Notifications'>
                <FaBell className="header__icon" />
                <span className="header__icon-text">{notificationCount}</span>
            </li>         
        </ul>
{/* user */}
        <User userAvatar={user.avatar} 
              firstName={user.firstName} 
              lastName={user.lastName}
              className='header__user'
        />
    </div>
  )
}
