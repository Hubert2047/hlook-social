import React from 'react'
import './shortcut.scss'

export default function ShortCut({avatar,name}) {
  return (
        <div className="shortcut-card">
                    <img src={avatar} alt="shortcut Avatar" className='shortcut-card__img'/>
                    <p className="shortcut-card__name">{name}</p>
        </div>
  )
}
