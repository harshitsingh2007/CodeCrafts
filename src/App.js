import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './MainPage/MainPage';
import { SignUp } from './signup/SignUp';
import { LoginPage } from './login/LoginPage';
import { DesignMain } from './Design/DesignMain';
import { TemplateMain } from './Template/TemplateMain';
import AboutUs from './About-us/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import TemplatesDiscription from './Template/TemplatesDiscription';
import Account from './user-account/Account';
import Pricing from './pricing/Pricing';
import MainPageAdmin from './MainPage-Login/MainPageAdmin';
import Error from './404-page/Error';
import Loader from './Component/Loader.jsx';
import Auth from './Component/Auth.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/client" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/design" element={<DesignMain />} />
        <Route path="/template" element={<TemplateMain />} />
        <Route path="/template/:title" element={<TemplatesDiscription />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/account" element={<Account />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/admin/MainPage" element={<MainPageAdmin />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;