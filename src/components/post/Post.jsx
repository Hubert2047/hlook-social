import React,{useState} from 'react'
import UserPost from '../user/UserPost'
import './post.scss'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsEmojiSmileFill } from "react-icons/bs";
import { AiFillLike,AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt ,FaRegShareSquare} from "react-icons/fa";
import Comments from '../comments/Comments';
import {user} from '../../data/api.js'
export default function Post({post}) {
    const [isActiveCommentBox,setIsActiveCommentBox]=useState(false)
    const [likeCount,setLikeCount]=useState(post.likeCount)
    const [postLikedIconStyle,setPostLikedIconStyle]=useState({})
    const [isLiked,setIsLiked] =useState(false)
    const handleActiveComment=()=>{
        setIsActiveCommentBox(prev=>{
            return !prev
        })
    }
    const handleLikeClick=()=>{
        if(isLiked){
            setLikeCount(prev=>prev-1)
            setIsLiked(prev=>!prev)
            setPostLikedIconStyle({})
        }else{
            setLikeCount(pre=>pre+1)
            setIsLiked(prev=>!prev)
            setPostLikedIconStyle({
                color:'#F5C33B'
        })
        }
    }
    const commentCount =user.posts.find(x=>x.id===post.id).comments?.length
  return (
    <div className="post">
        <div className="post__header">
            <UserPost 
                    createAt={new Date(post.createAt).toLocaleString()} 
                    userAvatar={post.userCreate.avatar}
                    firstName={post.userCreate.firstName}
                    lastName={post.userCreate.lastName}
                    className={'post__user-name'}
                    />
            <BiDotsHorizontalRounded className='post__icon-change'/>
        </div>
        <div className="post__body">
            <div className="post__content">              
                {post.content}
            </div>
            <img src={post.img} alt="" className="post__img" />
        </div>
        <div className="post__footer">
            <div className="post__like">
                <div className="post__like-right">
                    <BsEmojiSmileFill className='post__like-icon post__like-icon--1'/>
                    <AiFillLike className='post__like-icon post__like-icon--2'/>
                    <span className="post__like-count">{likeCount}</span>
                </div>

                <div className="post__like-left">
                   <span className="post__comment-count">{commentCount>1?`${commentCount} Comments`:`${commentCount} Comment`}</span>
                    <span className="post__share-count">{post.shareCount>1?`${post.shareCount} Shares`:`${post.shareCount} Share`}</span>
                </div>
            </div>

            {/* horizontal                 */}
            <div className="post__hr"></div>

            {/* btn action */}
            <div className="post__btn">
                    <div className="post__btn-box" onClick={handleLikeClick}>
                        <AiOutlineLike style={postLikedIconStyle} className='post__btn-icon'/>
                        <span>Like</span>
                    </div>
                    <div className="post__btn-box" onClick={handleActiveComment}>
                        <FaRegCommentAlt className='post__btn-icon'/>
                        <span>Comment</span>
                    </div>
                    <div className="post__btn-box">
                        <FaRegShareSquare className='post__btn-icon'/>
                        <span>Share</span>
                    </div>
            </div>
            {/* comments */}
         {isActiveCommentBox && <Comments commentsApi={post.comments} currentUserId='1'/>}
        </div>

    </div>
  )
}
