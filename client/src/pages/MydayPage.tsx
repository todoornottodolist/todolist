import React from "react";

interface MyDayTitleDateProps {
  day: string
  month: string
  date: string
}

export const MyDayPage = () => {

  return (
    <div>
      <MyDayTitle />
      <MyDayTitleDate day="Mon" month="January" date="1" />
    </div>
  )
}

const MyDayTitle = () => {
  return (
    <h1 className="main-title">My Day</h1>
  )
}

const MyDayTitleDate = ({ day, month, date }: MyDayTitleDateProps) => {
  
  const dateString = `${day}, ${month} ${date}`

  return (
    <div className="ml-4 mt-3">{dateString}</div>
  )
}