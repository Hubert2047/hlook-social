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
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
    </div>
  )
}
