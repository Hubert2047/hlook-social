import React from 'react'
import UserAvatar from '../User/UserAvatar'
import './stories.scss'
export default function Story({img,avatar,lastName,firstName}) {
  return (
    <div className='story'>
        <img src={img} alt="storyImage" className="story__img" />
        <UserAvatar userAvatar={avatar} className="story__user-avatar" />
        <div className="story__user-box">
            <div className="story__user-name">
                    <span className="story__last-name">{lastName}</span>
                    <span className="story__first-name">{firstName}</span>
            </div>       
        </div>
    </div>
  )
}
