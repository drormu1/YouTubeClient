import React from 'react'
import Avatar from '@mui/material/Avatar';
import './VideoCard.css'
function VideoCard({ image, title, channel, views, timeStamp, channelImage }) {
    return (
        <div className='videoCard'>
            <img className='videoCard__thumbnail' src={image} alt="" />
            <div className="video__info">
                <Avatar className='videoCard__avatar' alt={channel} src={channelImage} />
                <div className="video__text">
                    <p>{title}</p>
                    <p>{channel}</p>
                    <p>{views} · {timeStamp}</p>
                </div>
            </div>


        </div>
    )
}

export default VideoCard