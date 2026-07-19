import React, { useState } from "react";
import SEO from "@/components/site/SEO";
import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import HeroSection from "@/components/site/HeroSection";
import LegacyStats from "@/components/site/LegacyStats";
import NewsGrid from "@/components/site/NewsGrid";
import ProgramsExplorer from "@/components/site/ProgramsExplorer";
import Rankings from "@/components/site/Rankings";
import JointPlacementDrive from "@/components/site/JointPlacementDrive";
import TopPlacements from "@/components/site/TopPlacements";
import GlobalExperience from "@/components/site/GlobalExperience";
import WhyChoose from "@/components/site/WhyChoose";
import Infrastructure from "@/components/site/Infrastructure";
import Scholarships from "@/components/site/Scholarships";
import StudentsSpeak from "@/components/site/StudentsSpeak";
import Research from "@/components/site/Research";
import AdmissionProcess from "@/components/site/AdmissionProcess";
import NewsEvents from "@/components/site/NewsEvents";
import VirtualTour from "@/components/site/VirtualTour";
import Footer from "@/components/site/Footer";
import EnquiryModal from "@/components/site/EnquiryModal";
import FloatingActions from "@/components/site/FloatingActions";
import CountdownPopup from "@/components/site/CountdownPopup";
import { Toaster } from "@/components/ui/toaster";

const Home = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const openEnquiry = () => setEnquireOpen(true);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <SEO />
      <TopBar />
      <Header onEnquire={openEnquiry} />
      <main>
        <HeroSection onEnquire={openEnquiry} />
        <LegacyStats />
        <ProgramsExplorer onEnquire={openEnquiry} />
        <NewsGrid />
        <Rankings />
        <JointPlacementDrive onEnquire={openEnquiry} />
        <TopPlacements onEnquire={openEnquiry} />
        <Infrastructure />
        <GlobalExperience />
        <WhyChoose />
        <Scholarships onEnquire={openEnquiry} />
        <StudentsSpeak />
        <Research />
        <AdmissionProcess onEnquire={openEnquiry} />
        <NewsEvents />
        <VirtualTour onEnquire={openEnquiry} />
      </main>
      <Footer />
      <FloatingActions onEnquire={openEnquiry} />
      <CountdownPopup onApply={openEnquiry} />
      <EnquiryModal open={enquireOpen} onClose={() => setEnquireOpen(false)} />
      <Toaster />
    </div>
  );
};

export default Home;
