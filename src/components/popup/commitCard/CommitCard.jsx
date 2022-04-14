import React from 'react'
import './commitCard.scss'
import { AiOutlineCloseCircle } from "react-icons/ai";
export default function CommitCard({handleDeleteComment,hideModal,title,messenger}) {
  return (
    <div onClick={(e)=>{e.stopPropagation()}} className="commit-card">
            <div className="commit-card__title">
                    {title}
                    <AiOutlineCloseCircle onClick={hideModal} className='commit-card__icon'/>
            </div>
            <div className="commit-card__messenger">
                    {messenger}
            </div>
            <div className="commit-card__action-btns">
                <button onClick={hideModal} className="btn commit-card__action-btn commit-card__action-btn--1">No</button>
                <button onClick={handleDeleteComment} className="btn commit-card__action-btn commit-card__action-btn--2">Delete</button>
            </div>
    </div>
  )
}
