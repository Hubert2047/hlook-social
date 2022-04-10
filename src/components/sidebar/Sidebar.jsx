import './sidebar.scss'
import User from '../User/User';
import { FaUserFriends,FaGamepad } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsClockHistory,BsFillBookmarkStarFill ,BsFillQuestionCircleFill} from "react-icons/bs";
import { GiPodiumWinner } from "react-icons/gi";
import { MdOutlineEventAvailable,MdOutlineRssFeed } from "react-icons/md";
import SidebarBtn from '../button/SidebarBtn';
import {user} from '../../data/api.js'
import ShortCut from '../shortcut/ShortCut';
export default function Sidebar() {
  return (
    <div className="sidebar">
          <div className="sidebar__user">
              <User userAvatar={user.avatar} firstName={user.firstName} lastName={user.lastName}/>
          </div>
     
          <ul className="sidebar__tool" >
              <li className="sidebar__item">
                <MdOutlineRssFeed   className="sidebar__icon"/>
                <span className="sidebar__text">Feed</span>
              </li>

              <li className="sidebar__item">
                <FaUserFriends   className="sidebar__icon"/>
                <span className="sidebar__text">Friends</span>
              </li>

              <li className="sidebar__item">
                <GiPodiumWinner  className="sidebar__icon" />
                <span className="sidebar__text">Courses</span>
              </li>

              <li className="sidebar__item">
                <BsFillBookmarkStarFill  className="sidebar__icon" />
                <span className="sidebar__text">Bookmarks</span>
              </li>

              <li className="sidebar__item">
                <AiFillHome   className="sidebar__icon"/>
                <span className="sidebar__text">Marketplace</span>
              </li>

              <li className="sidebar__item">
                <BsClockHistory  className="sidebar__icon" />
                <span className="sidebar__text">Memories</span>
              </li>

               <li className="sidebar__item">
                <MdOutlineEventAvailable   className="sidebar__icon"/>
                <span className="sidebar__text">Event</span>
              </li>

               <li className="sidebar__item">
                <FaGamepad  className="sidebar__icon" />
                <span className="sidebar__text">Play Game</span>
              </li>

              <li className="sidebar__item">
                <BsFillQuestionCircleFill  className="sidebar__icon" />
                <span className="sidebar__text">Questions</span>
              </li>
          </ul>
          <SidebarBtn />
          <div className="shortcut">
            <h3>Your shortcut</h3>
            <div className="shortcut__list">
                {user.shortCuts?.map(shortcut=>{
                  return <ShortCut key={shortcut.id} 
                                   avatar={shortcut.avatar} 
                                   name={shortcut.name}/>
                })}
            </div>
          </div>
    </div>
  )
}
