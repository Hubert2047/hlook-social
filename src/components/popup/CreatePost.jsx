import {React,useState} from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import TypeShare from '../typeShare/TypeShare';
import UserAvatar from '../user/UserAvatar';
import UserName from '../user/UserName';
import { MdColorLens } from "react-icons/md";
import { BsEmojiSmile,BsFillFileEarmarkImageFill } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa";
import { GoSmiley    } from "react-icons/go";
import { ImLocation } from "react-icons/im";
import { GiMicrophone } from "react-icons/gi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import './createPost.scss'
import {user} from '../../data/api.js'

export default function CreatePost({hideCreatePost}) {
    const [text,setText]=useState('')
    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
  return (
    <div className="create-post" onClick={(e)=>{ e.stopPropagation()}}>
        <div className="create-post__header">
            <div className="create-post__header-title">Create post</div>
            <div className="create-post__header-close-btn" onClick={()=>{
                hideCreatePost()}}>
                <AiOutlineCloseCircle className='create-post__header-icon'/>
            </div>
        </div>
        <div className="create-post__content">
            <div className="create-post__top">
                    <UserAvatar userAvatar={user.avatar} />
                    <div className="create-post__top-box">
                        <UserName firstName={user.firstName} lastName={user.lastName}/>
                        <TypeShare/>
                    </div>
            </div>
            <div className="create-post__main">
                    <textarea onChange={handleOnChange} className="create-post__text" value={text} placeholder={`What's on your mind, ${user.lastName}?`} ></textarea>
                    <div className="create-post__options">
                        <MdColorLens className="create-post__options--1"/>
                        <BsEmojiSmile className="create-post__options--2"/>
                    </div>
            </div>
            <div className="create-post__bottom">
                    <div className="create-post__action-btn">    
                        <button className="btn create-post__add-feature">Add to your post</button> 
                        <div className="create-post__bottom-left">
                                <BsFillFileEarmarkImageFill className="icon create-post__bottom-left--1"/>
                                <FaUserTag className="icon create-post__bottom-left--2"/>
                                <GoSmiley className="icon create-post__bottom-left--3"/>
                                <ImLocation className="icon create-post__bottom-left--4"/>
                                <GiMicrophone className="icon create-post__bottom-left--5"/>
                                <BiDotsHorizontalRounded className="icon create-post__bottom-left--6"/>
                        </div>
                    </div>
                    <button type='button' disabled={text.length===0} className="btn create-post__submit">Post</button>
            </div>
        </div>
    </div>
  )
}
