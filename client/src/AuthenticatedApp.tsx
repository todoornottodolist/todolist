import { SideBar } from './components/sidebar'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MyDayPage } from './pages/MydayPage'
import { ImportantPage } from './pages/ImportantPage'
import { CalendarPage } from './pages/CalendarPage'
import { ScheduledPage } from './pages/ScheduledPage'
import { SearchPage } from './pages/SearchPage'
import { SettingsPage } from './pages/SettingPage'

export interface AuthenticatedAppProps {

}

export const AuthenticatedApp: React.FC<AuthenticatedAppProps>  = (props: AuthenticatedAppProps) => {
  return (
    <div className="flex">

      <SideBar />
      <div className="w-1/2 pl-16 h-screen bg-[#EBEBEB]">
        <Routes>
          <Route path="/myday" element={<MyDayPage />} />
          <Route path="/important" element={<ImportantPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/scheduled" element={<ScheduledPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
      <div className="w-1/2 h-screen items-center flex justify-center">
        <p>
          Welcome to Todo List!
          Select a task to see more. 
        </p>
      </div>
    </div>
  )
}

