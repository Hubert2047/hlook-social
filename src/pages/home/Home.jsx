import React from 'react'
import Feed from '../../components/feed/Feed'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'
import Rightbar from './../../components/rightbar/Rightbar';
export default function Home() {
  return (
    <div className="home">
        <Header/>
        <div className="home__main">
            <Sidebar className='home__sidebar'/>
            <Feed className='home__feed'/>
            <Rightbar className='home__rightbar'/>
        </div>
    </div>
  )
}
