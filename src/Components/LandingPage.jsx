import React from 'react'
import VideosList from '../Components/VideosList';
import Sidebar from '../Components/Sidebar'
import '../App.css'
function LandingPage() {
    return (
        <> 
            <div className='app__page'>
                <Sidebar />
                <VideosList />
            </div>
        </>
    )
}

export default LandingPage