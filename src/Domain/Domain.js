import React from 'react'
import NewNabar from '../All-navbar/NavbarNew'
import Footer from '../Fotter/Footer'
export default function Domain() {
  return (
    <>
    <NewNabar/>
    <div className='mt-6'>

<div className='text-center'>
    <h1 className='text-[2.5em] '>Your Domain here</h1>
    <input type="search" name="" id=""  className='border-2 border-black p-[10px] w-[650px] rounded-3xl text-start'/>
</div>


    </div>
   <Footer/>
    </>
  )
}
