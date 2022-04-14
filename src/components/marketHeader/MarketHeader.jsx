import React from 'react'
import SearchPrimary from '../search/SearchPrimary'
import './marketHeader.scss'
import { AiFillSetting } from "react-icons/ai";
export default function MarketHeader() {
  return (
    <div className="market-header">
            <div className="market-header__top">
                <h2 className="market-header__title">MarketPlace</h2>
                <AiFillSetting className="market-header__icon"/>
            </div>
            <SearchPrimary placeholder={'Search MarketPlace'}/>
    </div>
  )
}
