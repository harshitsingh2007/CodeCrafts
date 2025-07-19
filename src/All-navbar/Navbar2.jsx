import { FaCircle } from "react-icons/fa";
import {NavLink}  from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import { PiCloudSunLight } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { useTheme } from '../context/TheameContext';
export default function Navbar2() {
   const {darkTheme,setDarkTheame } = useTheme(); 
  return (
    <header>
      <div className={`flex justify-between px-[5%] pt-[20px] ${darkTheme?"bg-black":"bg-white"} shadow-md relative`}>
        <div className="flex items-center gap-2 bg-white text-black py-1 px-3 rounded-full font-bold">
          <FaCircle color="green" />
          aviablabe for project
        </div>

        <div className=' bg-white py-1 items-center px-1.5 rounded-full flex gap-4'>
          <div className="flex items-center gap-3 ">
          <FaLaptopCode size={40} color="white" className="bg-black py-1 px-3 rounded-full" />
          <NavLink to="/" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset-2" : "no-underline"}`}>Home</NavLink>
           <NavLink to="/about" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset" : "no-underline"}`}>About</NavLink>
           <NavLink to="/contact" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset-2" : "no-underline"}`}>Contact</NavLink>
           <NavLink to="/services" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset-2" : "no-underline"}`}>Services</NavLink>
          </div>
           <div className="ml-4 flex items-center gap-2">
            <NavLink to='/login' className='bg-[#1D1F22] text-white no-underline px-4 py-2 rounded-full'>Login</NavLink>
            <NavLink to='/signup' className='bg-[#414245] text-white px-4 py-2 no-underline rounded-full'>Get Started</NavLink>
           </div>
        </div>
         
         <div className="flex items-center gap-2 bg-slate-500 py-1 px-[2.5rem] rounded-full">
            <button onClick={() => {setDarkTheame() }}>
            {darkTheme? <MdDarkMode size={30} color="white" />:<PiCloudSunLight color="yellow" size={30}/>}
            </button>
         </div>
          
      </div>
    </header>
  )
}
