import React from 'react'
import { IoMdPeople } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";
import './typeShare.scss'
export default function TypeShare() {
  return (
    <div className="type-share">
        <IoMdPeople/>
        <p>friends</p>
        <RiArrowDownSFill/>
    </div>
  )
}
