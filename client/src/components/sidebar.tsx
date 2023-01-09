import React from "react"
import { SquareSvgProps, TrailSignOutlineSvg, StarOutlineSvg, 
  CanlendarClearOutlineSvg, AlbumsOutlineSvg, SearchOutlineSvg, SettingsOutlineSvg
} from "./sidebar-icons"

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
          <SideBarIcon Icon={TrailSignOutlineSvg} size="32" />
          <SideBarIcon Icon={StarOutlineSvg} size="32" />
          <SideBarIcon Icon={CanlendarClearOutlineSvg} size="32" />
          <SideBarIcon Icon={AlbumsOutlineSvg} size="32" />
          <SideBarIcon Icon={SearchOutlineSvg} size="32" />
        </div>
        <div className="flex flex-col">
          <SideBarIcon Icon={SettingsOutlineSvg} size="32" />
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