import React from 'react'
import Share from '../share/Share';
import Stories from './../stories/Stories';
import Post from '../post/Post';
import './feed.scss'
import {user} from '../../data/api.js'
import CreateRoom from '../createRoom/CreateRoom';


export default function Feed({className}) {
  const posts=user.posts.sort((a,b)=> new Date(a.createAt) - new Date(b.createAt))

  return (
    <div className={"feed "+className}>
       <Stories />
       <div className="feed__main">
         <Share/>
         <CreateRoom className='feed__create-room'/>
         {posts?.map(post =>{
           return (
             <Post key={post.id} post={post}/>
           )
         })}
       </div>
    </div>
  )
}
