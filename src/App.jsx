import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Router.jsx/Home';
import About from './Router.jsx/About';
import Services from './Router.jsx/Services';
import Contact from './Router.jsx/Contact';
import Profile from './Router.jsx/Profile';
import WebD from './Router.jsx/WebD';
import AppD from './Router.jsx/AppD';
import UIUX from './Router.jsx/UIUX';
import Clothes from './Router.jsx/Clothes';
import Footwear from './Router.jsx/Footwear';
import Accessories from './Router.jsx/Accessories';
import ParamHook from './Router.jsx/Compound.jsx/ParamHook';
import Details from './Router.jsx/Compound.jsx/Details';

export default function App() {




  return (



      <BrowserRouter>
      
      <div className="header">
       <Link to={""}>Home</Link>
        <Link to={"/About"}>About</Link>
         <Link to={"/Services"}>Services</Link>
          <Link to={"/Contact"}>Contact</Link>
           <Link to={"/Profile"}>Profile</Link>
         </div>
       <Routes>
        
        <Route path="" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>} >
          <Route path="WebD" element={<WebD/>}/>
           <Route path="AppD" element={<AppD/>}/>
           <Route path="UIUX" element={<UIUX/>}/>
          </Route>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Profile" element={<Profile/>} >
         <Route path="Clothes" element={<Clothes/>}/>
         <Route path="Footwear" element={<Footwear/>}/>
         <Route path="Accessories" element={<Accessories/>}/>
        </Route>
         <Route path="/Details/:id" element={<Details/>}/>
       </Routes>

      </BrowserRouter>
      
    
  )
}
