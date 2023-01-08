import React from "react"
import trailSignOutLineSvg from '../assets/trail-sign-outline.svg'


export const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 
                    flex flex-col
                    text-white shadow-lg bg-white">
        <SideBarIcon icon={<img src={trailSignOutLineSvg} />} />
    </div>
  )
}

const Avatar = () => {
  return (
    <div>
      <img src="./assets/"/>
    </div>
  )
}

const SideBarIcon = ({ icon }) => (
  <button className="sidebar-icon group">
    {icon}
  </button>
);