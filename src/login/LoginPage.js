import React from 'react'
import Headerlogin from './Headerlogin';
import Bodylogin from './BodyLogin';
import FormLogin from './FormLogin';
import '../signup/Signup.css'
import Footer from '../signup/Footer';
const LoginPage = () => {
    return (
    <>
    <Headerlogin />
    <Bodylogin />
    <FormLogin />
    <Footer/>
    </>
   );
 }
 
export default LoginPage;