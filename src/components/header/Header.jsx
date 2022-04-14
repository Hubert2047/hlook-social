import React, { useState } from 'react'
import { FaBell } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiMessengerFill } from "react-icons/ri";
import './header.scss'
import User from '../user/User';
import {user} from '../../data/api.js'
import NavigationButton from '../../components/nav/NavigationButton'
import {navBtns} from '../../data/api'
import SearchPrimary from '../search/SearchPrimary';
export default function Header() {
    const[activeNavBtn,setActiveNavBtn]=useState(1)
    const handleNavigation=(id)=>{
        setActiveNavBtn(id)     
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
          <SearchPrimary placeholder={'Search Hlook'}/>
{/* header nav */}
        <ul className="header__nav">
             {navBtns.map(navBtn=>{
                 return <NavigationButton 
                        key={navBtn.id} 
                        navBtn={navBtn}
                        handleNavigation={handleNavigation}
                        btnId={activeNavBtn}
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
