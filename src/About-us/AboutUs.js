import React from 'react'
import { Link } from 'react-router-dom'
export default function AboutUs() {
  return (
    <>
      <div>
        <div className='w-[1350px] mx-auto pt-[50px]'>
          <div className='bg-black text-white py-10 px-5 rounded-3xl'>
            <h1 className='text-[4.8em] font-bold text-center mt-10'>Building Digital Success</h1>
            <p className='text-center text-[20px] mt-3'>We transform business visions into high-performing websites that drive results.</p>
          </div>
          
          <div>
            <h3 className='text-[35px] font-bold  mt-10'>Our Story</h3>
            <p className='text-[20px] leading-2 mt-3'>Founded in 2025, Began by a single Developer <strong> Harshit Singh</strong> of passionate developer who believed every business deserves an exceptional online presence. Today, we've grown into a full-service web development agency serving clients across multiple industries.</p>
          </div>

          <div className='flex justify-between pl-[100px] pr-[100px] pt-[80px]'>
            <div className='shadow-xl py-[50px] px-[50px] text-center hover:animate-zoom hover:scale-110 duration-500 delay-100'>
               <h2 className='font-bold text-[#3498DB] text-[45px]'>150+</h2>
               <p className='text-[20px] '>Websites Delivered</p>
            </div>
            <div className='shadow-xl  py-[50px] px-[50px] text-center hover:animate-zoom hover:scale-110 duration-500 delay-100'>
               <h2 className='font-bold text-[#3498DB] text-[45px]'>98%</h2>
              <p className='text-[20px]'>Client Satisfaction</p>
            </div>
            <div className='shadow-xl  py-[50px] px-[50px] text-center hover:animate-zoom hover:scale-110 duration-500 delay-100'>
               <h2 className='font-bold text-[#3498DB] text-[45px]'>1</h2>
              <p className='text-[20px] '>Year Experience</p>
            </div>
          </div>

            <div className='pt-[6.5em]'>
            <h1 className='text-[35px] font-bold'>Our Development Process</h1>
            <div className='flex justify-between pt-[50px] pl-[100px] pr-[100px] '>

            <div className='w-[250px] h-[250px] p-3 rounded shadow-2xl'>
              <p className='w-10 h-10 bg-[#7173C6] rounded-[50%] flex justify-center items-center  shadow-[10px_10px_80px_#4E87D1]'>1</p>
                <h3>Discovery</h3>
                <p className='pt-[10px]'>We analyze your business needs and target audience to create the perfect strategy.</p>
            </div>
              <div className='w-[250px] h-[250px]  p-3 rounded shadow-2xl '>
              <p className='w-10 h-10 bg-[#7173C6] rounded-[50%]  flex justify-center items-center shadow-[10px_10px_80px_#4E87D1]'>2</p>
                <h3>Design</h3>
                <p className='pt-[10px]'>Custom designs that reflect your brand identity and engage your customers.</p>
            </div>
            <div className='w-[250px] h-[250px]  p-3 rounded shadow-2xl '>
              <p className='w-10 h-10 bg-[#7173C6] rounded-[50%] flex justify-center items-center shadow-[10px_10px_80px_#4E87D1]'>3</p>
              <h3>Development</h3>
              <p className='pt-[10px]'>Clean, efficient code built with modern technologies for optimal performance.</p>
            </div>
              <div className='w-[250px] h-[250px]  p-3 rounded shadow-2xl '>
              <p className='w-10 h-10 bg-[#7173C6] rounded-[50%] flex justify-center items-center shadow-[10px_10px_80px_#4E87D1]'>4</p>
                <h3>Launch & Support</h3>
                <p className='pt-[10px]'>We handle deployment and provide ongoing maintenance and updates.</p>
            </div>

            </div>
            </div>
           

      <div className='bg-[#202F3B] text-white text-center py-[80px] pb-[90px] mt-[80px] mb-[100px] rounded-3xl'>
        <h1 className='text-[4em] font-bold'>Ready to Build Your Website?</h1>
        <p className='pt-[20px] mb-[50px]'>We're currently accepting new projects for 2025. Let's discuss how we can help grow your business online.</p>
        <Link className='bg-black no-underline text-white p-[12px_18px] hover:shadow-[0px_4px_100px_10px_white] rounded'>Get a Cosultation</Link>
      </div>
        </div>
      </div>
    </>
  )
}
