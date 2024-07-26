import React, { useEffect,useState } from 'react'
import {YOU_TUBE_LIST_API} from '../utils/constants';
import VideoCarts from './VideoCarts';
import { Link } from 'react-router-dom';



const VedioContainer = () => {
const [videos,setVideos] = useState([])

  useEffect(()=>{
    getVideos();

  },[])

  const getVideos = async() =>{
    const data = await fetch(YOU_TUBE_LIST_API);
    const json = await data.json();
  // console.log(",,,",json.items);
   setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
      {videos.map(video=><Link to={"/watch?v="+video.id}><VideoCarts key={video.id} info={video} /></Link>)}
    </div>
  )
}

export default VedioContainer
