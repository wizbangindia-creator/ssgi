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
import VisionMission from "@/pages/VisionMission";
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
          <Route path="/about/vision-mission" element={<VisionMission />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
