import React from 'react'
import VideoPlayer from 'react-video-js-player'

export default function Video() {
    const videoSrc='https://www.youtube.com/watch?v=lVJLNsLNnWs'
    const poster='https://img.freepik.com/free-vector/cute-girl-thailand-traditional-standing-cartoon-character-hand-draw-art-illustration_56104-1324.jpg?size=626&ext=jpg&ga=GA1.1.1756276514.1650036172'
  return (
    <div>
        <VideoPlayer
            src={videoSrc}
            poster={poster}
            width='720'
            height='420'/>
    </div>
  )
}
