import React from 'react'
import Codecrafts from './codecrafts.png'
export default function NavbarNew() {
  return (
   <header>
    <nav>
        <div className='grid-card-1'>
        <div className='Toggle'>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
       
        <div>
            <a href="">Design</a>
            <a href="">Template</a>
        </div>
        </div>

        <div className='grid-card-2'>
        <div className='Logo'>
            <img src={Codecrafts} alt="" />
        </div>
        </div>

        <div className='grid-card-3'>
        <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
        </div>

    </nav>
   </header>
  )
}
