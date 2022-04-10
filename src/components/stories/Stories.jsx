import React from 'react'
import Story from './Story';
import './stories.scss'
import {user} from '../../data/api.js'

export default function Stories() {
  return (
    <div className="stories">
        {user.stories?.map(story => {
          return <Story key={story.id} img={story.img} avatar={story.createBy.avatar} firstName={story.createBy.firstName} lastName={story.createBy.lastName}/>
        })}
    </div>
  )
}
