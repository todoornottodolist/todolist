import React from "react"
import { SquareSvgProps, TrailSignOutlineSvg, StarOutlineSvg, 
  CanlendarClearOutlineSvg, AlbumsOutlineSvg, SearchOutlineSvg, SettingsOutlineSvg
} from "./SidebarIcons"
import { Link } from "react-router-dom"

interface SideBarIconProps {
  Icon: React.FunctionComponent<SquareSvgProps>
  size: string
}

export const SideBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 
                    flex flex-col justify-between
                    text-white shadow-lg bg-white">
        <div className="flex flex-col">
          <Avatar />
          <Link to='/myday'>
            <SideBarIcon Icon={TrailSignOutlineSvg} size="32" />
          </Link>
          <Link to='/important'>
            <SideBarIcon Icon={StarOutlineSvg} size="32" />
          </Link>
          <Link to='/calendar'>
            <SideBarIcon Icon={CanlendarClearOutlineSvg} size="32" />
          </Link>
          <Link to='/scheduled'>
            <SideBarIcon Icon={AlbumsOutlineSvg} size="32" />
          </Link>
          <Link to='/search'>
            <SideBarIcon Icon={SearchOutlineSvg} size="32" />
          </Link>
        </div>
        <div className="flex flex-col">
          <Link to='/settings'>
            <SideBarIcon Icon={SettingsOutlineSvg} size="32" />
          </Link>
        </div>

    </div>
  )
}

const Avatar: React.FC = () => (
  <button className="sidebar-icon group">
    <img src={require('../assets/dummy-user-avatar.png')} alt="avatar" />
  </button>
)

const SideBarIcon: React.FC<SideBarIconProps> = (props: SideBarIconProps) => (
  <button className="sidebar-icon group">
    <props.Icon size={props.size} />
  </button>
);