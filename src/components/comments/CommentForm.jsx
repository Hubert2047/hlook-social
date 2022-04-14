import React, { useState } from 'react'
import UserAvatar from '../user/UserAvatar'
import { BsEmojiSmile } from "react-icons/bs";
import { MdPhotoCamera } from "react-icons/md";
import { AiOutlineFileGif } from "react-icons/ai";
import { RiChatSmile3Fill } from "react-icons/ri";
import {user} from '../../data/api.js'

export default function CommentForm({
    userAvatar,
    handleSubmit,
    parentId,
    initialValue,
    subMitType,
    commentId
}) {

const[text,setText]=useState(()=>{
      return  initialValue?initialValue:''
    })

const onSubmit=(e)=>{
    e.preventDefault()
    if(subMitType==='create'){
        handleSubmit({
            id: Math.random().toString(36).substr(2, 9),
            user:user,
            body: text,
            parentId:parentId?parentId: null,
            createdAt: new Date().toLocaleString(),
        })
    }else if (subMitType==='edit'){
         handleSubmit(text)
    }

    setText('')
}
  return (
    <div>
        <form onSubmit={onSubmit} className="commentForm">
            <UserAvatar userAvatar={userAvatar} />
            <div className="commentForm__body">
                <div  className="commentForm__input-box">
                    <input
                        value={text}
                        placeholder={'Write an answer ...'}
                        onChange={(e)=>{
                            setText(e.target.value)
                        }}
                        className="commentForm__input"
                    />
                    <div className="commentForm__action-btn">
                        <BsEmojiSmile className="commentForm__action-icon"/>
                        <MdPhotoCamera className="commentForm__action-icon"/>
                        <AiOutlineFileGif className="commentForm__action-icon"/>
                        <RiChatSmile3Fill className="commentForm__action-icon"/>
                    </div>

                </div>
            </div>
        </form>
      
    </div>
  )
}
