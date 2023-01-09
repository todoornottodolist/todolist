import { SideBar } from './components/sidebar'
import React from 'react'

export interface AuthenticatedAppProps {

}

export const AuthenticatedApp: React.FC<AuthenticatedAppProps>  = (props: AuthenticatedAppProps) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-1/2 h-screen bg-gray-600"></div>
      <div className="w-1/2 h-screen"></div>
    </div>
  )
}

