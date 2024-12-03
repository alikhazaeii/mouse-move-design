
'use client'
import React, { useState } from 'react'
import Cursor from './Cursor'

export default function Sence1() {
  const [hover , setHover] = useState(false)
  return (
    <div className="h-full flex items-center justify-center">
      <h1 onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className="text-6xl max-w-[90vw] text-center text-white p-20">Hello world</h1>
      <Cursor hover={hover}/>
    </div>
    
  )
}
