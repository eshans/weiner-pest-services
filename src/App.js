import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import NavbarBasic from './components/NavbarBasic';
import ContactMail from './pages/ContactMail';
import About from './pages/About';
import Pests from './/pages/Pests';
import Areas from './pages/Areas';
import NotFound from './pages/NotFound'
import { Ants, Bees, Roaches, Mice, Wasps, Bedbugs, Flies, Stinkbugs, Rats, Termites } from './components/Pests';
import PestsGallery from './pages/PestsGallery'
import Services from './pages/Services';
import CommercialServices from './pages/CommercialServices';
import ResidentialServices from './pages/ResidentialServices';


function App() {
  return (
    <div className="main">
      <Header />
      <NavbarBasic />

      {/* These are the main routes and subpages */}
      <div className="wrapper">
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/areas-we-serve' element={<Areas />} />
          <Route path='/pests-we-treat' element={<PestsGallery />} />
          <Route path='/pests-old' element={<Pests />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<ContactMail />} />
          <Route path='/ants' element={<Ants />} />
          <Route path='/wasps' element={<Wasps />} />
          <Route path='/roaches' element={<Roaches />} />
          <Route path='/bedbugs' element={<Bedbugs />} />
          <Route path='/termites' element={<Termites />} />
          <Route path='/carpenter-bees' element={<Bees />} />
          <Route path='/mice' element={<Mice />} />
          <Route path='/flies' element={<Flies />} />
          <Route path='/stinkbugs' element={<Stinkbugs />} />
          <Route path='/rats' element={<Rats />} />
          <Route path='/residential-services' element={<ResidentialServices />} />
          <Route path='/commercial-services' element={<CommercialServices />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
