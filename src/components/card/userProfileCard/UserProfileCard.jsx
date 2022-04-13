import React from 'react'
import UserName from '../../user/UserName';
import UserState from '../../user/UserState';
import { BsPeopleFill,BsHandbagFill } from "react-icons/bs";
import './userProfileCard.scss'
export default function UserProfileCard({friend}) {

  return (
    <div className="user-profile-card">
        <div className="user-profile-card__avatar">
            <UserState userAvatar={friend.avatar} 
                      isOnline={friend.isOnline}
                      stateClassName="user-profile-card__state"
                      avatarClassName='user-profile-card__avatar'
            />
        </div>
        <div className="user-profile-card__content">
            <UserName className="user-profile-card__user-name" firstName={friend.firstName} lastName={friend.lastName}/>
            <div className="user-profile-card__infor">
              <BsPeopleFill className="user-profile-card__icon"/>
              <p className="user-profile-card__text">41 mutual friends including Nguyễn Yến and La Thái Mẫn</p>
            </div>
            <div className="user-profile-card__infor">
              <BsHandbagFill className="user-profile-card__icon"/>
              <p className="user-profile-card__text">Worked at FT Island Vietnamese Fanclub</p>
            </div>
        </div>
    </div>
  )
}
