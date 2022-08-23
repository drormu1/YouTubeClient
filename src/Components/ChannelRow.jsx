import React from 'react'
import {Avatar} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './ChannelRow.css'
function ChannelRow(
    {image,channel,verified,subs,noOfVideos,description}
) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow__logo' 
        alt={channel} src={image} />
        <div className="channelRow__text">
        <h4>{channel} {verified && <CheckCircleIcon/> }</h4>
        <p>{subs} Subscribers · {noOfVideos} Videos</p>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow




