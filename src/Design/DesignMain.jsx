import React from 'react'
import './Design.module.css'
import DesignTemplate from './DesignTemplate'
import ExploreDesign from './ExploreDesign'
import JoinPlatorm from './JoinPlatorm'
import Footer from '../Fotter/Footer'
import Navbar2 from '../All-navbar/Navbar2'
import NavbarNew from '../All-navbar/NavbarNew'
export const DesignMain = () => {
  const data=localStorage.getItem("user");
  return (
    <>
    { data?<NavbarNew/>:<Navbar2/>}
       <DesignTemplate/>
       <ExploreDesign/>
       <JoinPlatorm/>
      <Footer/>
    </>
  )
}
