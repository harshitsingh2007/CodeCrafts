import React from 'react'
import './Design.module.css'
import DesignTemplate from './DesignTemplate'
import ExploreDesign from './ExploreDesign'
import JoinPlatorm from './JoinPlatorm'
import Footer from '../MainPage/Footer'
import Navbar2 from '../All-navbar/Navbar2'
export const DesignMain = () => {
  return (
    <>
       <Navbar2/>
       <DesignTemplate/>
       <ExploreDesign/>
       <JoinPlatorm/>
      <Footer/>
    </>
  )
}
