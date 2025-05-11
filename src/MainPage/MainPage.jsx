import React from 'react'
import Banner from './Banner'
import Slogen from './Slogen'
import Collaboration from './Collaboration'
import BuyDomain from './BuyDomain'
import TipsForWeb from './TipsForWeb'
import Footer from './Footer'
import NavbarNew from './NavbarNew'
import './Main.module.css'
import '../MainPage/Navbar.module.css'
export  const MainPage = () => {
  return (
  <>
<NavbarNew/>
<Banner />
<Slogen/>
<Collaboration/>
<BuyDomain/>
<TipsForWeb/>
<Footer/>
    </>
  )
}
