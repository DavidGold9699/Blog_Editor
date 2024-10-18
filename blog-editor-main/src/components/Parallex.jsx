import React from 'react'

const Parallex = ({ pos }) => {
  return (
    <div className={`absolute ${pos} left-0 h-[100%] bottom-0 overflow-hidden w-full z-[-100]`}>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </div>
  )
}

export default Parallex