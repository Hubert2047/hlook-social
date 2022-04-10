import React from 'react'
import Story from './Story';
import './stories.scss'
import {user} from '../../data/api.js'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

export default function Stories() {
  return (
    <div className="stories">
        <FaArrowAltCircleRight className='stories__right-arrow'/>
        <FaArrowAltCircleLeft className='stories__left-arrow'/>
        {user.stories?.map(story => {
          return <Story key={story.id} img={story.img} avatar={story.createBy.avatar} firstName={story.createBy.firstName} lastName={story.createBy.lastName}/>
        })}
    </div>
  )
}
