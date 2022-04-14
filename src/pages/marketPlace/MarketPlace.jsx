import React from 'react'
import './marketPlace.scss'
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import {sidebarItems} from '../../data/api'
import MarketHeader from '../../components/marketHeader/MarketHeader';
import Products from '../../components/products/Products';
export default function MarketPlace() {
  return (
    <div className='marketplace'>
        <Header/>
       <div className="marketplace__main">
           <Sidebar sidebarItems={sidebarItems}
                         className='marketplace__sidebar'
                         header={<MarketHeader/>}
                         />

            <div className="marketplace__products">
              <Products/>
            </div>
       </div>
    </div>
  )
}
