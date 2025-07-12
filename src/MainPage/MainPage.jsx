import React, { useContext } from 'react'
import Banner from './Banner'
import Slogen from './Slogen'
import Collaboration from './Collaboration'
import BuyDomain from './BuyDomain'
import TipsForWeb from './TipsForWeb'
import Footer from '../Fotter/Footer'
import NavbarNew from '../All-navbar/NavbarNew'
import './Main.module.css'
import '../All-navbar/Navbar.module.css'
import Navbar2 from '../All-navbar/Navbar2'
export  const MainPage = () => {
  const data = localStorage.getItem('userdata')
  return (
    <>
{data ? <NavbarNew /> : <Navbar2 />}
<Slogen/>
<Collaboration/>
<BuyDomain/>
<Banner />
<TipsForWeb/>
<Footer/>
    </>
  )
}
