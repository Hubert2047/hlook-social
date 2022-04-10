import React from 'react'
import Share from '../share/Share';
import Stories from './../stories/Stories';
import Post from '../post/Post';
import './feed.scss'
import {user} from '../../data/api.js'


export default function Feed() {
  return (
    <div className="feed">
       <Stories />
       <div className="feed__main">
         <Share/>
         {user.posts?.map(post =>{
           return (
             <Post key={post.id} post={post}/>
           )
         })}
       </div>
    </div>
  )
}
