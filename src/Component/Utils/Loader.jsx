import React from 'react'
import { RiLoader2Line } from "react-icons/ri";

export default function Loader() {
  return (
    <div className='flex flex-col items-center pt-[200px] w-[100vw] h-[100vh] bg-black'>
<RiLoader2Line className='animate-spin' size={100} color='white'/>
      <p className='text-center text-white text-[30px] pt-2'>Loading...</p>
    </div>
  )
}
