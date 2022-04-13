import {React,useRef }from 'react'
import './modal.scss'
export default function Modal({popup,hideModal}) {
const modal =useRef()
const handleOnClick=(e) => {     
        hideModal()
  }
  return (
    <div ref={modal} className="modal" onClick={handleOnClick}>
        {popup}
    </div>
  )
}
