import React, { useState } from "react";
import SEO from "@/components/site/SEO";
import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import EnquiryModal from "@/components/site/EnquiryModal";
import FloatingActions from "@/components/site/FloatingActions";
import { Toaster } from "@/components/ui/toaster";

const PageLayout = ({ children }) => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const openEnquiry = () => setEnquireOpen(true);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased flex flex-col">
      <SEO />
      <TopBar />
      <Header onEnquire={openEnquiry} />
      <main className="flex-1">
        {typeof children === "function" ? children({ openEnquiry }) : children}
      </main>
      <Footer />
      <FloatingActions onEnquire={openEnquiry} />
      <EnquiryModal open={enquireOpen} onClose={() => setEnquireOpen(false)} />
      <Toaster />
    </div>
  );
};

export default PageLayout;
