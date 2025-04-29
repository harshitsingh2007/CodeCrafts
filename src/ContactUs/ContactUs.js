import React, { useState } from 'react'
import './Contact.css'
import Footer from '../MainPage/Footer'
export default function ContactUs() {
let [show, showhide] = useState(false)
  return (
    <>
<>
<header className={`header-main ${show ? 'open' : 'closed'}`}>
      <div className='container'>
        <div className='contactUs'>
          <p>Contact Us</p>
          <button className='cross-toggle-1' onClick={() => showhide(!show)}>
            <div className="cross-toggle"></div>
          </button>
        </div>
      </div>

      <div className='grid-container'>
        <div className='grid-card'><h1>Work</h1></div>
        <div className='grid-card'><h1>About</h1></div>
        <div className='grid-card'><h1>Contact</h1></div>
        <div className='grid-card'><h1>Services</h1></div>
      </div>

      <div className='followUs container'>
        <p>Follow Us</p>
      </div>
    </header>

  {/* Contact Form */}
<div className='ContactUS-form'>
  <div className='contactUs-form-item container'>
      <p>Contact Us</p>
        <button className='toggle-button' onClick={() => showhide(!show)}>
          <div className="toggle"></div>
          <div className="toggle"></div>
        </button>
        {/* banner */}
    </div>
          <div className='contactUs-form-item-2 container'>
            <p>Contact Us</p>
            <h1>Let's get in touch!</h1>
            <h4>We can't wait to hear from you.</h4>
    </div>
    {/* banner */}

    {/* form */}
          <div className='contactUs-form-item-3 container'>

            <div id='contactUs-form-item-3-1'>
            <p>Work Inquires</p>
           <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder='Company Name' />
              <input type="text" placeholder='Message' />
                <input type="phone" placeholder='Contact Number' />
            </form>
            <button>Let's Work Together</button>
            </div>
    </div>
{/* form */}
  <div className='contactUs-form-item-4 container'>
      <div id='contactUs-form-item-4-1'>
           <h1>Tell us about your project</h1>
      </div>
 </div>
  </div>
<Footer/>
</>

</>
  );
}
