import React from "react";
import { UserPlus, FileEdit, FileCheck2, CreditCard, PartyPopper, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register",
    detail: "Fill the online enquiry form or call our admission helpline to begin your journey.",
  },
  {
    icon: FileEdit,
    step: "02",
    title: "Apply",
    detail: "Submit the online application form along with the required academic details.",
  },
  {
    icon: FileCheck2,
    step: "03",
    title: "Verify Documents",
    detail: "Upload / share your certificates for eligibility verification by our admissions cell.",
  },
  {
    icon: CreditCard,
    step: "04",
    title: "Pay Admission Fee",
    detail: "Confirm your seat by paying the admission fee online. Scholarships auto-applied.",
  },
  {
    icon: PartyPopper,
    step: "05",
    title: "Join SSGI",
    detail: "Complete on-campus registration and begin your student journey with orientation.",
  },
];

const AdmissionProcess = ({ onEnquire }) => (
  <section id="admission" className="relative py-14 md:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
    <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.35),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(220,38,38,0.25),transparent_45%)]" />
    <div className="relative max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-10 md:mb-14">
        <div className="text-[11px] uppercase tracking-widest text-red-400 font-bold mb-2">Simple &amp; Transparent</div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight">
          Your <span className="font-light italic text-white/85">Admission</span> in
          <span className="text-red-500"> 5 Simple Steps</span>
        </h2>
        <p className="mt-3 text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
          Join SSGI in just a few clicks. Our admissions team is with you at every step of the way.
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-red-600/40 via-red-500 to-red-600/40" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s) => (
            <div key={s.step} className="relative group">
              <div className="relative z-10 mx-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-lg transition-colors">
                <s.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-14 md:-translate-x-16 z-20 bg-slate-950 border border-red-500/60 text-red-400 font-extrabold text-xs px-2 py-1 rounded-sm">
                {s.step}
              </div>
              <div className="mt-4 text-center px-2">
                <div className="font-extrabold text-lg">{s.title}</div>
                <p className="mt-1.5 text-slate-300 text-xs md:text-sm leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={onEnquire} className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-6">
            Start Application <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="bg-transparent border-white/60 text-white hover:bg-white hover:text-slate-900 font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-6">
            Download Prospectus
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AdmissionProcess;
