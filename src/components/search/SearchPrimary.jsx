import React from 'react'
import { FaSistrix } from "react-icons/fa";
import './searchPrimary.scss'
export default function SearchPrimary({placeholder}) {
  return (
    <div className="search-primary">
        <FaSistrix className='search-primary__icon'/>
        <input className="search-primary__input" type="text" placeholder={placeholder}/>
    </div>
  )
}
