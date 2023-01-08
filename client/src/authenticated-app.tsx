import { SideBar } from './components/sidebar'
import React from 'react'

export const AuthenticatedApp = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-1/2 h-screen bg-gray-600"></div>
      <div className="w-1/2 h-screen"></div>
    </div>
  )
}

