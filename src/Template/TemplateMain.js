import React from 'react'
import NavbarNew from '../MainPage/NavbarNew'
import TemplateData from '../data/TemplateData'
import Footer from '../MainPage/Footer.js'
import './Template.css'
export default function TemplateMain() {
  return (
    <>
      <NavbarNew />
      <div className='template-main'>
        <div className='template-main-content container'>
          <h2>Pick the Website Template You Love</h2>
          <input type="text" placeholder='Search your template...' />
        </div>
      </div>

      <div className='template-main-content2'>
        <div className='template-main-grid row'>
          <h1>All Website Templates</h1>
          {TemplateData.map((v, i) => (
            <div key={i} className='template-main-grid-item col-md-4'>
              <img src={v.Image} alt="" />
              <a href=''>{v.title}</a>
            </div>
          ))}
        </div>
      </div>

      <div className='template-main-content3'>
        <h1>Want Help Picking a Template?</h1>
        <p>Get tips for finding the template that’s right for you. </p>
        <a href="">Help Me to Choose</a>
      </div>
      <Footer/>
    </>
  )
}
