import React from 'react'
import './VideosList.css'
import VideoCard from './VideoCard'
import {activeMenuItemState } from  "./../features/operations/operationsSlice";
import { useSelector} from "react-redux";

function VideosList() {

  const activeMenuItem = useSelector(activeMenuItemState);

  return (



    <div className='VideosList'>
      
      {/* <span className='VideosList__subTitle'>1{activeMenuItem ?? ''}2</span> */}

     
      <div className="VideosList__video">
        <VideoCard
          title=' Lets Build a YouTube Clone with REACT JS for Beginners'
          views='2.3M'
          timeStamp='3 Days ago'
          channelImage='https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg'
          channel="Taha Imran"
          image='https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
        />
        <VideoCard
          title=' Lets Build a YouTube Clone with REACT JS for Beginners'
          views='2.3M'
          timeStamp='3 Days ago'
          channelImage='https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg'
          channel="Taha Imran"
          image='https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
        /> <VideoCard
          title=' Lets Build a YouTube Clone with REACT JS for Beginners'
          views='2.3M'
          timeStamp='3 Days ago'
          channelImage='https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg'
          channel="Taha Imran"
          image='https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
        /> <VideoCard
          title=' Lets Build a YouTube Clone with REACT JS for Beginners'
          views='2.3M'
          timeStamp='3 Days ago'
          channelImage='https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg'
          channel="Taha Imran"
          image='https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
        /> <VideoCard
          title=' Lets Build a YouTube Clone with REACT JS for Beginners'
          views='2.3M'
          timeStamp='3 Days ago'
          channelImage='https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg'
          channel="Taha Imran"
          image='https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
        /> <VideoCard
          title=' Lets Build a YouTube Clone with REACT JS for Beginners'
          views='2.3M'
          timeStamp='3 Days ago'
          channelImage='https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg'
          channel="Taha Imran"
          image='https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
        />
        <VideoCard
          title=' Lets Build a YouTube Clone with REACT JS for Beginners'
          views='2.3M'
          timeStamp='3 Days ago'
          channelImage='https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg'
          channel="Taha Imran"
          image='https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
        />
        <VideoCard
          title=' Lets Build a YouTube Clone with REACT JS for Beginners'
          views='2.3M'
          timeStamp='3 Days ago'
          channelImage='https://pbs.twimg.com/profile_images/1483047460788482048/uTXnzXeS_400x400.jpg'
          channel="Taha Imran"
          image='https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
        />
      </div>
    </div>
  )
}

export default VideosList