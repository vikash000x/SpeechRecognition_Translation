import React from 'react'

const IconButtons = ({Icon,onClick}) => {
  return (
  <span className='curser pointer flex items-center space-x-2' onClick={onClick}>
    <Icon size={22}/>
  </span>
  )
}

export default IconButtons