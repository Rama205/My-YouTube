

import React from 'react'

const VideoCarts = ({ info }) => {
   

    const {snippet,statistics} = info;
    const {channelTitle,thumbnails,title} = snippet;
  return (
    <div className='m-2 p-2 w-60 shadow-lg'>
       <img className='rounded-lg' alt="vdo" src ={thumbnails.high.url} />
        <ul>
            <li className='font-bold'>{channelTitle}</li>
            <li>{title}</li>
            <li className='font-bold'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCarts
