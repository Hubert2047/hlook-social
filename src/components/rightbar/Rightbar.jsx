import React from 'react'
import UserOnline from '../User/UserOnline'
import { BiDotsHorizontalRounded,BiVideoPlus ,BiSearch} from "react-icons/bi";
import './rightbar.scss'
import '../../data/api.js'
import { user } from '../../data/api.js';
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar__header">
          <h3 className="rightbar__title">Contacts</h3>
          <div className="rightbar__header-icons">
              <div className="rightbar__option">
                  <BiVideoPlus className='rightbar__option-icon'/>
              </div>
              <div className="rightbar__option">
                  <BiSearch className='rightbar__option-icon'/>
              </div>
              <div className="rightbar__option">
                    <BiDotsHorizontalRounded className='rightbar__option-icon'/>
              </div>
          </div>
      </div>
      {user.friends?.map(friend=>{
        return <UserOnline key={friend.userId} userAvatar={friend.avatar} firstName={friend.firstName} isOnline={friend.isOnline} lastName={friend.lastName}/>
      })}
    </div>
  )
}
