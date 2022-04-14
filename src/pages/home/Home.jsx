import React from 'react'
import Feed from '../../components/feed/Feed'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'
import Rightbar from './../../components/rightbar/Rightbar';
import {user} from '../../data/api.js'
import User from '../../components/user/User'
import {sidebarItems} from '../../data/api.js'
export default function Home() {
  return (
    <div className="home">
        <Header/>
        <div className="home__main">
            <Sidebar sidebarItems={sidebarItems} 
                     className='home__sidebar'
                     header={ <User userAvatar={user.avatar} firstName={user.firstName} lastName={user.lastName}/>}
                     />
            <Feed className='home__feed'/>
            <Rightbar className='home__rightbar'/>
        </div>
    </div>
  )
}
