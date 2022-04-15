import React from 'react'
import './marketPlace.scss'
import Header from '../../components/header/Header';
import {sidebarMarketplaceCategoriesBtn,sidebarMarketplaceNavBtn} from '../../data/api'
import MarketHeader from '../../components/marketHeader/MarketHeader';
import Products from '../../components/products/Products';
import SideBarItem from '../../components/sidebar/sidebarItem/SideBarItem';
import {motion} from 'framer-motion'

export default function MarketPlace() {
  return (
    <motion.div 
     intial={{width:'0'}}
      animate={{width:'100%'}}
      exit={{x:window.innerWidth,transition:{duration:'.1s'}}}
    className='marketplace'
    >
        <Header/>
       <div className="marketplace__main">
            <div className="marketplace__sidebar">
                <div className="sidebar__header">
                  <MarketHeader/>
                </div>
                <ul className="marketplace__nav-btn">
                  {sidebarMarketplaceNavBtn.map(sidebarItem =>{
                    return <SideBarItem key={sidebarItem.id} sidebarItem={sidebarItem}/>
                  })}
                </ul>
                <div className="marketplace__filters">
                    <h2 className="marketplace__filters-heading">Filters</h2>
                    <a href="#" className="marketplace__filters-address"> New Taipei City</a>
                </div>
                <ul className="sidebar__tool" >
                  <h2 className="marketplace__categories-heading">Categories</h2>
                  {sidebarMarketplaceCategoriesBtn.map(sidebarItem =>{
                    return <SideBarItem key={sidebarItem.id} sidebarItem={sidebarItem}/>
                  })}
                </ul>
            </div>

            <div className="marketplace__products">
              <Products/>
            </div>
       </div>
    </motion.div>
  )
}
