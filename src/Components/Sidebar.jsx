import React from 'react'

import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { Home, Whatshot, History, Subscriptions, VideoLibrary, OndemandVideo, WatchLater, ThumbUpAltOutlined, ExpandMoreOutlined } from '@mui/icons-material'

function Sidebar() {


  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={Home}  title='דף הבית' id='Home' />
      <SidebarRow Icon={Whatshot} title='מה חדש'  id='Whatshot' />
      <SidebarRow Icon={OndemandVideo} id='OndemandVideo' title='הסרטונים שלך' />
      <hr />
      <div className='inactive'>
      <SidebarRow Icon={Subscriptions} title='מינויים'/>
      <SidebarRow Icon={VideoLibrary} title='ספרייה' />
      <SidebarRow Icon={History} title='היסטוריה' />
      
      <SidebarRow Icon={WatchLater} title='לצפייה בהמשך' />
      <SidebarRow Icon={ThumbUpAltOutlined} title='סרטונים שאהבתי' />
      {/* <SidebarRow Icon={ExpandMoreOutlined} title='תוצאות נוספות' /> */}
      </div>
    <hr />
    </div>
  )
}

export default Sidebar