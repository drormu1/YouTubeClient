import { TuneOutlined } from '@mui/icons-material'
import React from 'react'
import ChannelRow from './ChannelRow'
import './Search.css'
function Search() {
  return (
    <div className='searchPage'>
        <div className="searchPage__filter">
            <TuneOutlined />
            <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow
        image = "https://yt3.ggpht.com/pe57RF1GZibOWeZ9GwRWbjnLDCK2EEAeQ3u4iMAFNeaz-PN9uSsg1p2p32TZUedNnrUhKfoOuMM=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="PedroTech"
        verified
        subs="49.9k"
        noOfVideos={203}
        description = "Videos about Web Development! ReactJS, NodeJS, MySQL, Express, MongoDB, GraphQL and much more!" />
    </div>
  )
}

export default Search