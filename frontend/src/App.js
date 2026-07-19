import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/Home";
import About from "@/pages/About";
import FoundersMessage from "@/pages/FoundersMessage";
import ChairmansDesk from "@/pages/ChairmansDesk";
import ManagingDirector from "@/pages/ManagingDirector";
import CMDDesk from "@/pages/CMDDesk";
import VicePresident from "@/pages/VicePresident";
import DirectorPrincipal from "@/pages/DirectorPrincipal";
import VisionMission from "@/pages/VisionMission";
import Apply from "@/pages/Apply";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import AntiRagging from "@/pages/AntiRagging";
import Programs from "@/pages/Programs";
import ProgramDetail from "@/pages/ProgramDetail";
import CampusLife from "@/pages/CampusLife";
import CampusLifeDetail from "@/pages/CampusLifeDetail";
import Sports from "@/pages/campus/Sports";
import Cafeteria from "@/pages/campus/Cafeteria";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import ScrollToTop from "@/components/site/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/founders-message" element={<FoundersMessage />} />
          <Route path="/about/chairmans-desk" element={<ChairmansDesk />} />
          <Route path="/about/managing-director" element={<ManagingDirector />} />
          <Route path="/about/cmd-desk" element={<CMDDesk />} />
          <Route path="/about/vice-president" element={<VicePresident />} />
          <Route path="/about/director-principal" element={<DirectorPrincipal />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/apply-now" element={<Apply />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/anti-ragging" element={<AntiRagging />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/campus-life/sports" element={<Sports />} />
          <Route path="/campus-life/cafeteria" element={<Cafeteria />} />
          <Route path="/campus-life/:slug" element={<CampusLifeDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career" element={<Careers />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
