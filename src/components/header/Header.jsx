import React, { useState } from 'react'
import { FaSistrix,FaBell } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiMessengerFill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { MdOndemandVideo } from "react-icons/md";
import './header.scss'
import User from '../User/User';
import {user} from '../../data/api.js'
let navBtns =[
    {
        id:1,
       isActive:true
    },
    {
        id:2,
      isActive:false
    },
    {
        id:3,
      isActive:false
    },
    {
        id:4,
       isActive:false
    }

]
export default function Header() {
    const[NavBtnArray,setNavBtnArray]=useState(navBtns)
    const navIconActiveStyle={
        borderBottom: '2px solid #F2F3F5',
        borderBottomLeftRadius:'0',
        borderBottomRightRadius:'0',
    }
    const HandleNavClick=(id)=>{
        let newNavBtns=[]
        let newNavBtn={}
        navBtns.forEach(x=>{
            newNavBtn={...x}
            if(x.id!==id){
                newNavBtn.isActive=false
            }else{
                 newNavBtn.isActive=true
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
            <li className="header__nav-item"  onClick={()=>{
                    HandleNavClick(1)
            }} style={NavBtnArray[0].isActive?navIconActiveStyle:{}}>
              <AiOutlineHome  className="header__nav-icon"/>
            </li>

            <li className="header__nav-item"  onClick={()=>{
                    HandleNavClick(2)
            }} style={NavBtnArray[1].isActive?navIconActiveStyle:{}}>
                <CgProfile className="header__nav-icon"/>
            </li>

            <li className="header__nav-item"  onClick={()=>{
                    HandleNavClick(3)
            }} style={NavBtnArray[2].isActive?navIconActiveStyle:{}}>
                <IoIosPeople className="header__nav-icon"/>
            </li>

            <li className="header__nav-item"  onClick={()=>{
                    HandleNavClick(4)
            }} style={NavBtnArray[3].isActive?navIconActiveStyle:{}}>
                <MdOndemandVideo className="header__nav-icon"/>
            </li>     
        </ul>
{/* header icon */}
        <ul className="header__icons">
            <li className="header__icon-box">
                <BsFillPeopleFill  className="header__icon" />
                <span className="header__icon-text">{requestCount}</span>
            </li>
                <li className="header__icon-box">
                <RiMessengerFill className="header__icon" />
                <span className="header__icon-text">{mesengerCount}</span>
            </li>

            <li className="header__icon-box">
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
