import React from 'react'
import UserAvatar from './UserAvatar'
import UserName from './UserName'

export default function UserOnline({userAvatar,firstName,lastName,isOnline}) {
  let isOnlineStyle={}
  if(isOnline) {
    isOnlineStyle={
        backgroundColor: '#00A400'
    }
  }else{
     isOnlineStyle={
        backgroundColor: '#8D949E'
    }
  }
  return (
    <div className="userOnline">
        <div className="userOnline__icon-box">
          <UserAvatar userAvatar={userAvatar}/>
          <div style={isOnlineStyle} className="userOnline__icon-state"></div>
        </div>
        <UserName firstName={firstName} lastName={lastName}/>
    </div>
  )
}
