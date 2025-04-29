import React from 'react'
import Banner from './Banner'
import Slogen from './Slogen'
import Collaboration from './Collaboration'
import BuyDomain from './BuyDomain'
import TipsForWeb from './TipsForWeb'
import Footer from './Footer'
import NavbarNew from './NavbarNew'
import '../MainPage/Main.css'
import '../MainPage/Navbar.css'
export const MainPage = ({main}) => {

  return (
  <>
  
    <NavbarNew/>
<Banner/>
<Slogen main={main} />
<Collaboration/>
<BuyDomain/>
<TipsForWeb/>
<Footer/>
    </>
  )
}
