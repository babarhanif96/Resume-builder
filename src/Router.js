import React from 'react';

import './static/scss/app.scss';
import 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/presentation/header';
import Footer from './components/presentation/footer';
import LandingPage from './components/presentation/landingPage';
import GettingStarted from './components/presentation/gettingStarted';
import Login from './components/presentation/login';
import Register from './components/presentation/register';
import AboutUs from './components/presentation/aboutUs';
import Contacts from './components/presentation/contact';
import Education from './components/presentation/education';
import Finalize from  './components/presentation/finalizePage';
import App from './components/App/App';


function Routerr() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
        
        <Route path="/education" element={<Education />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
          <Route path="/App" element={<App />}></Route>
          <Route path="/getting-started" element={<GettingStarted />}></Route>
          <Route path="/resume-templates" element={<GettingStarted />}></Route>
          <Route path="/about-us"     element={<AboutUs />}></Route>
          <Route path="/finalize" element={<Finalize />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>             
          <Route path="/" element={<LandingPage />}></Route>
          {/* <Footer></Footer>  */}
        </Routes>
      
      </BrowserRouter>
   
    </div>
   
  );
}

export default Routerr;
