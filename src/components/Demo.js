
import React, { useMemo, useState } from 'react'
import {findPrime} from "../utils/helper"
const Demo = () => {

  const[text, setText] = useState(0)
  const [isDarkTheme, setIsDarkTheme] = useState(false);
const prime = useMemo(()=>findPrime(text),[text]) ;

  return (
    <div
    className={
      "m-4 p-2 w-96 h-96 border border-black " +
      (isDarkTheme && "bg-gray-900 text-white")
    }
  >
    <div>
      <button className='m-10 p-2 bg-green-400' onClick={()=>{setIsDarkTheme(!isDarkTheme)}}>Toggle</button>
    </div>
     <div>
      <input className='w-70 p-2 border border-black' type="number" value={text} 
      onChange={(e)=>{
        setText(e.target.value)
      }}
       />
     
     </div>

     <div>
      <h1>Prime number for given input:{prime}</h1>
     </div>
    </div>
  )
}

export default Demo
