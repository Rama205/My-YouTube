import { useDispatch, useSelector } from "react-redux";
import ChatMsg from "./ChatMsg";
import React, { useEffect, useState } from 'react';
import { addMsg } from "../utils/chatSlice";
import {generateRandomName,makeRandomMessage} from "../utils/helper"

const LiveChat = () => {
 const dispatch = useDispatch();
 const [liveMsg, setLiveMsg ] =useState("")
 
 const chatMessage = useSelector((store)=>store.chat.messages)

useEffect(()=>{
  const time =setInterval(()=>{
    //API polling
dispatch(
  addMsg(
 {
   name:generateRandomName(),
  msg:makeRandomMessage(30)
 }
))


  },5000);

  return ()=>clearInterval(time)

},[])

  return (
  <>
    <div className='border border-black m-2 p-2 ml-2 w-full  h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>

<div>
{chatMessage.map((c,i)=><ChatMsg key={i} name={c.name} msg={c.msg}/>)}
</div>   
</div>
<form className="w-full p-2 ml-2" onSubmit={(e)=>{
  e.preventDefault();
dispatch(
  addMsg({
    name:"Ramya",
    msg:liveMsg
  })
)
setLiveMsg("");
}}>
  <input className="border border-black w-95 px-2" type="text"  value={liveMsg} onChange={(e)=>{
    setLiveMsg(e.target.value)
  }}/>
  <button className="px-2 mx-2 bg-green-100 font-bold">Send</button>
</form>
  </>
    
  )
}

export default LiveChat
