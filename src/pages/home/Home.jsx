import React from 'react'
import Feed from '../../components/feed/Feed'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'
import Rightbar from './../../components/rightbar/Rightbar';
import {user} from '../../data/api.js'
import User from '../../components/user/User'
import {sidebarHomeItems} from '../../data/api.js'
import {motion} from 'framer-motion'
export default function Home() {
  return (
    <motion.div 
      intial={{width:'0'}}
      animate={{width:'100%'}}
      exit={{x:window.innerWidth,transition:{duration:'.1s'}}}
      className="home">
        <Header/>
        <div className="home__main">
            <Sidebar sidebarItems={sidebarHomeItems} 
                     className='home__sidebar'
                     header={ <User userAvatar={user.avatar} firstName={user.firstName} lastName={user.lastName}/>}
                     />
            <Feed className='home__feed'/>
            <Rightbar className='home__rightbar'/>
        </div>
    </motion.div>
  )
}
