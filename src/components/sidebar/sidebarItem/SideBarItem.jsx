import React from 'react'

export default function SideBarItem({sidebarItem}) {
  return (
    <li className="sidebar__item">
                {sidebarItem.icon}
                <span className="sidebar__text">{sidebarItem.name}</span>
    </li>
  )
}
