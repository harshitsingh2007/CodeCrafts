import { MainPage } from './MainPage/MainPage';
import './App.css'
import React, { useState } from 'react';
import SignUp from './signup/SignUp';

function App() {
  const[sing,setsign]=useState(false);
  function toggle() {
    setsign(prev => !prev)
    console.log(sing)
  }
  return (
    <>
      {sing ? <SignUp /> :<MainPage  main={toggle}  />}
    </>
  ); 
}
export default App;


