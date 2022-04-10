import React from 'react'
import UserAvatar from '../User/UserAvatar'
import './share.scss'
import { TiVideo } from "react-icons/ti";
import { BsFillImageFill ,   BsFillEmojiSmileFill} from "react-icons/bs";
import {user} from '../../data/api.js'
export default function Share() {
  return (
    <div className="share">
        <div className="share__top">
            <UserAvatar userAvatar={user.avatar} className="share__user"/>
            <input type="text" className='share__input' placeholder ={`What's on your mind ${user.lastName} ?`}/>
        </div>
        <div className="share__hr"/>
        <ul className="share__options">
            <li className="share__option ">
                <TiVideo className='share__option--1'/>
                <span>Live Video</span>
            </li>
         
             <li className="share__option ">
                <BsFillImageFill className='share__option--2'/>
                <span>Photo/Video</span>
            </li>

              <li className="share__option ">
                <   BsFillEmojiSmileFill className='share__option--3'/>
                <span>Feeling/activity</span>
            </li>
        </ul>
    </div>
  )
}
