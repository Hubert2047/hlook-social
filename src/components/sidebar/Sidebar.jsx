import './sidebar.scss'
import SidebarBtn from '../button/SidebarBtn';
import {user} from '../../data/api.js'
import ShortCut from '../shortcut/ShortCut';
import SidebarItem from'../sidebar/sidebarItem/SideBarItem'
import {sidebarHomeItems} from '../../data/api.js'
export default function Sidebar({className,header,sidebarItems}) {
  return (
    <div className={"sidebar " +className}>
          <div className="sidebar__header">
             {header}
          </div>
     
          <ul className="sidebar__tool" >
              {sidebarHomeItems.map(sidebarItem =>{
                return <SidebarItem key={sidebarItem.id} sidebarItem={sidebarItem}/>
              })}
          </ul>
          <SidebarBtn />
          <div className="shortcut">
            <h3>Your shortcut</h3>
            <div className="shortcut__list">
                {user.shortCuts?.map(shortcut=>{
                  return <ShortCut key={shortcut.id} 
                                   avatar={shortcut.avatar} 
                                   name={shortcut.name}/>
                })}
            </div>
          </div>
    </div>
  )
}
