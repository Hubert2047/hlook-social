import {React,useState} from 'react'
import UserAvatar from '../user/UserAvatar'
import './share.scss'
import { TiVideo } from "react-icons/ti";
import { BsFillImageFill ,   BsFillEmojiSmileFill} from "react-icons/bs";
import {user} from '../../data/api.js'
import Modal from '../modal/Modal';
import CreatePost from '../popup/CreatePost';
export default function Share() {
  const [isShow,setIsShow] = useState(false)
  const handleOnclick =() => {
    setIsShow(pre=>!pre)
  }
  return (
    <div className="share">
        <div className="share__top">
            <UserAvatar userAvatar={user.avatar} className="share__user"/>
            <input type="text" 
                  className='share__input' 
                  placeholder ={`What's on your mind ${user.lastName} ?`}
                  onClick ={handleOnclick}
                  />
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
      { isShow && <Modal hideModal={handleOnclick} popup={<CreatePost hideCreatePost={handleOnclick}/>}/>}
    </div>
  )
}
