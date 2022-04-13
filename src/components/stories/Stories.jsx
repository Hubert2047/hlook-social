import {React,useState} from 'react'
import Story from './Story';
import './stories.scss'
import {user} from '../../data/api.js'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import { RiAddCircleFill } from "react-icons/ri";

export default function Stories() {
  let stories = user.stories
  // const [firstIndex,setFirstIndex]=useState(0)
  // const[lastIndex,setLastIndex]=useState(4)
   if(!Array.isArray(stories)|| stories.length<=0){
    return null;
  }
 
  // const handleRightClick=() => {
  //     if(lastIndex<stories.length){
  //       setLastIndex(prev=>prev+1)
  //       setFirstIndex(prev=>prev+1)
  //     }
  // }
  // const handleLeftClick=() => {
  //   if(firstIndex!==0){
  //       setLastIndex(prev=>prev-1)
  //       setFirstIndex(prev=>prev-1)
  //     }
  // }

  return (
    <div className="stories">
        {/* change slide buttom */}
       
        {/* {lastIndex<stories.length && <FaArrowAltCircleRight className='stories__right-arrow' onClick={handleRightClick}/>}
        {firstIndex>0 && <FaArrowAltCircleLeft className='stories__left-arrow' onClick={handleLeftClick}/>} */}
    
        {/* current user create story */}
        
            <div className="stories__user-create">
              <img src={user.avatar} alt="" className="stories__user-avatar" />
              <RiAddCircleFill className="stories__create-icon"/>
              <p className="stories__create-text">Create Story</p>
              <div className="stories__user-create-layout"></div>
            </div>
            {/* render others user story */}
            {stories?.map(story => {
              return <Story  key={story.id} img={story.img} avatar={story.createBy.avatar} firstName={story.createBy.firstName} lastName={story.createBy.lastName}/>
            })}
        
    </div>
  )
}
