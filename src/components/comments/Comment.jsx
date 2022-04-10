import React,{useState} from 'react'
import './comments.scss'
import{calDate} from '../../functions/functions.js'
import CommentForm from './CommentForm'
import UserAvatar from '../User/UserAvatar'
import UserName from '../User/UserName';
import { AiFillLike } from "react-icons/ai";
import {user} from '../../data/api.js'
export default function Comment({
  comment,
  replies,
  DeleteComment,
  activeComment,
  setActiveComment,
  addComment,
  handleUpdateComment,
}) {
  const [isCommentLiked,setIsCommentLiked]=useState(comment.isLiked)
  const [commentLikedIconStyle,setCommentLikedIconStyle]=useState({})
  const canActionCommentTime=0
  const timePassed = new Date()- new Date(comment.createdAt)>canActionCommentTime
  const canReply =Boolean(user.userId)
  const canEdit = comment.user.userId === user.userId && timePassed
  const canDelete=comment.user.userId === user.userId && timePassed
  const isReply = activeComment && activeComment.style==='Reply' && activeComment.commentId=== comment.id
  const isEdit = activeComment && activeComment.style==='Edit' && activeComment.commentId=== comment.id
  const commentParentId= comment.parentId?comment.parentId:comment.id
  const handleLikeCommentClick=() => {
    if(isCommentLiked){
        setCommentLikedIconStyle({
        })

        setIsCommentLiked(prev=>!prev)
    }else{
        setCommentLikedIconStyle({
          color:'#F5C33B'
        })
          setIsCommentLiked(prev=>!prev)
    }
  }
  return (
    <div className='comment' >
      <div className="comment__user-avatar">
          <UserAvatar userAvatar={comment.user.avatar}/>
      </div>
      <div className="comment__text">
          {/* user comment name */}
         <div className="comment__header">
              <UserName firstName={comment.user.firstName} 
                        lastName={comment.user.lastName}
                        className='comment__user-name'
                        />
   
           <div className="comment__time">{ calDate(comment.createdAt)}</div>
         </div>

         {/* comment content */}
         <div className="comment__content">
           {comment.body}
         </div>

         {/* action buttom */}
        <div className="comment__actions">
          <div className="comment__action" onClick={handleLikeCommentClick}>
            <AiFillLike style={commentLikedIconStyle} className='comment__action-icon' />
          </div>
          {canReply && <div className="comment__action"
                            onClick={()=>{
                            setActiveComment({commentId:comment.id,style:'Reply'})
                            }}
                        >Reply</div>}

          {canEdit && <div className="comment__action"
                          onClick={()=>{
                            setActiveComment({commentId:comment.id,style:'Edit'})
                            }}>Edit</div>}

          {canDelete && <div className="comment__action" 
                          onClick={()=>{DeleteComment(comment.id)}}
                          >Delete</div>}
        </div>

        {/* form */}
        {isReply && <CommentForm 
                                 userAvatar={user.avatar}
                                 handleSubmit={addComment}
                                 parentId={commentParentId}
                                 initialValue={`@${comment.user.lastName} ${comment.user.firstName}  `}
                                 subMitType='create'
                                 />}
        {isEdit && <CommentForm 
                                userAvatar={user.avatar}
                                handleSubmit={(body)=>{handleUpdateComment(body,comment.id)}}
                                initialValue={`${comment.body} `}
                                subMitType = 'edit'
                                />}


         {/* reply                        */}

        <div className="comment__replies">
          {replies?.map(reply=>{
            return <Comment 
            key={reply.id} 
            comment={reply} 
            replies={[]} 
            DeleteComment={DeleteComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment} 
            />
          })}
        </div>
      </div>
     
    </div>
  )
}
