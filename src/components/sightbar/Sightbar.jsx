import './sightbar.scss'
import User from './../User/User';
import { FaUserFriends,FaGamepad } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsClockHistory,BsFillBookmarkStarFill ,BsFillQuestionCircleFill} from "react-icons/bs";
import { GiPodiumWinner } from "react-icons/gi";
import { MdOutlineEventAvailable,MdOutlineRssFeed } from "react-icons/md";
import SightbarBtn from '../button/SightbarBtn';
export default function Sightbar() {
  return (
    <div className="sightbar">
          <div className="sightbar__user">
              <User/>
          </div>
     
          <ul className="sightbar__tool" >
              <li className="sightbar__item">
                <MdOutlineRssFeed   className="sightbar__icon"/>
                <span className="sightbar__text">Feed</span>
              </li>

              <li className="sightbar__item">
                <FaUserFriends   className="sightbar__icon"/>
                <span className="sightbar__text">Friends</span>
              </li>

              <li className="sightbar__item">
                <GiPodiumWinner  className="sightbar__icon" />
                <span className="sightbar__text">Courses</span>
              </li>

              <li className="sightbar__item">
                <BsFillBookmarkStarFill  className="sightbar__icon" />
                <span className="sightbar__text">Bookmarks</span>
              </li>

              <li className="sightbar__item">
                <AiFillHome   className="sightbar__icon"/>
                <span className="sightbar__text">Marketplace</span>
              </li>

              <li className="sightbar__item">
                <BsClockHistory  className="sightbar__icon" />
                <span className="sightbar__text">Memories</span>
              </li>

               <li className="sightbar__item">
                <MdOutlineEventAvailable   className="sightbar__icon"/>
                <span className="sightbar__text">Event</span>
              </li>

               <li className="sightbar__item">
                <FaGamepad  className="sightbar__icon" />
                <span className="sightbar__text">Play Game</span>
              </li>

              <li className="sightbar__item">
                <BsFillQuestionCircleFill  className="sightbar__icon" />
                <span className="sightbar__text">Questions</span>
              </li>
          </ul>
          <SightbarBtn />
          <div className="shortcut">
            <h3>Your shortcut</h3>
            <div className="shortcut__list">
                <div className="shortcut__card">
                    <img src="assets/person/1.jpeg" alt="" className='shortcut__img'/>
                    <p className="shortcut__name">8 Ball Pool</p>
                </div>

                <div className="shortcut__card">
                    <img src="assets/person/1.jpeg" alt="" className='shortcut__img'/>
                    <p className="shortcut__name">8 Ball Pool</p>
                </div>

                <div className="shortcut__card">
                    <img src="assets/person/1.jpeg" alt="" className='shortcut__img'/>
                    <p className="shortcut__name">8 Ball Pool</p>
                </div>

            </div>
          </div>
    </div>
  )
}
