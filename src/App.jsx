// In this file. Research about createBrowserRouter router from react-router-dom v6.
// We shall switch to createBrowserRouter soon enough.

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CauseDetails from "./pages/causes/CauseDetails";
import Causes from "./pages/causes/Causes";
import DonatePage from "./pages/causes/DonatePage";
import Home from "./pages/home/Home";
import About from "./pages/about/components/About"
import Causes from "./pages/causes/Causes"
import Contact from "./pages/contact/components/Contact";
import Career from "./pages/career/components/Career";
import Volunteer from "./pages/volunteer/components/Volunteer";
import ApplyCareer from "./pages/applycareer/components/ApplyCareer";
import Leadership from "./pages/leadership/components/Leadership";
import Faqs from "./pages/faqs/components/Faqs";
import Appointment from "./pages/appointment/components/Appointment";
import Donners from "./pages/donners/components/Donners";
import DonationHistory from "./pages/donationhistory/components/DonationHistory";
import DonationFailed from "./pages/donationfailed/components/DonationFailed";
import Section404 from "./pages/404/components/Section404";
import ComingSoon from "./pages/comingsoon/components/ComingSoon";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/volunteer" element={<Volunteer />} />
        
        
        <Route path="/causes" element={<Causes />} />
        <Route path="/causes/:id" element={<CauseDetails />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
