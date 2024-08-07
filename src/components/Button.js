import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='rounded-lg px-5 py-2 bg-gray-200 m-2'>{name}</button>
    </div>
  )
}

export default Button
