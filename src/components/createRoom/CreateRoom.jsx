import React from 'react'
import { RiVideoAddFill } from "react-icons/ri";
import {user} from '../../data/api.js'
import './createRoom.scss'
import UserState from '../user/UserState';
import UserFriend from '../user/UserFriend';
export default function CreateRoom({className}) {
  return (
    <div className={"create-room " + className}>
            <button className="btn create-room__btn">
                <RiVideoAddFill className="create-room__icon"/>
                <p className="create-room__btn-text">Creat Room</p>
            </button>
            <ul className="create-room__list-user">
                {user.friends?.map(friend =>{
                    return <UserState friend={friend}key={friend.userId} 
                                       userAvatar={friend.avatar}
                                       isOnline={friend.isOnline}
                        />
                })}
            </ul>
    </div>
  )
}
