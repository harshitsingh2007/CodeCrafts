import React from 'react'
import MainNav from '../MainPage/MianNav'
import './Design.css'
import DesignTemplate from './DesignTemplate'
import ExploreDesign from './ExploreDesign'
import JoinPlatorm from './JoinPlatorm'
import Footer from '../MainPage/Footer'
export const DesignMain = () => {
  return (
    <>
       <MainNav/>
       <DesignTemplate/>
       <ExploreDesign/>
       <JoinPlatorm/>
      <Footer/>
    </>
  )
}
