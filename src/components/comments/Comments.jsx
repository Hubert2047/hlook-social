import React, {useState } from 'react'
import './comments.scss'
import Comment from './Comment'
import CommentForm from './CommentForm'
import {user} from '../../data/api.js'

export default function Comments({commentsApi}) {
  const[comments,setComments]=useState(commentsApi)
  const[activeComment,setActiveComment]=useState({})
  let rootComments = comments
                        .filter(comment => comment.parentId === null)
                        .sort(
                                 (a,b)=> {return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                                 })                             
 const getReplies =(commentId)=>{
   return comments
          .filter(comment => comment.parentId === commentId)
          .sort(
              (a,b) =>  new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
   )
 }
 const handleAddComment =(comment) => {
    setComments([...comments,comment])
    // close comment form
    setActiveComment({})
 }

 const handleUpdateComment =(body,commentId)=>{
      let updateComments = comments.map(comment=>{
        if(comment.id === commentId){
          return {...comment,body:body}
        }
        return comment
      })
      setComments(updateComments)
      setActiveComment({})

 }

 const DeleteComment=(commentId) => {
       let updateComments =comments.filter(comment => comment.id !== commentId)
       setComments(updateComments)
   
 }

  return (
    <div>
      <CommentForm
       userAvatar ={user.avatar}
       handleSubmit={handleAddComment} 
       initialValue={''}
       subMitType='create'
      />
      <div className="comment__container">
          {rootComments.map(rootComment=>{
           return <Comment 
           key ={rootComment.id} 
           comment={rootComment}  
           replies={getReplies(rootComment.id)} 
           getReplies={getReplies} 
           DeleteComment={DeleteComment}
           activeComment={activeComment}
           setActiveComment={setActiveComment}
           addComment={handleAddComment}
           handleUpdateComment={handleUpdateComment}
           commentParentId={null}
           />
          })}
      </div>
    </div>
  )
}
