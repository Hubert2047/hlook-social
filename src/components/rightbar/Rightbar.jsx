import React from 'react'
import UserFriend from '../user/UserFriend'
import { BiDotsHorizontalRounded,BiVideoPlus ,BiSearch} from "react-icons/bi";
import './rightbar.scss'
import '../../data/api.js'
import { user } from '../../data/api.js';
export default function Rightbar({className}) {
  return (
    <div className={"rightbar "+className}>
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
      {/* <UserFriend friend= {user.friends[0]}/> */}
      {user.friends.map(friend=>{
        return <UserFriend key={friend.userId} friend={friend}/>
      })}
    </div>
  )
}
