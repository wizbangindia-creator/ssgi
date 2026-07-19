import React, { useState } from "react";
import { globalExperience } from "@/mock";
import { Plus, ArrowRight, Compass, Building2, Briefcase, GraduationCap, Globe, Users, Beaker } from "lucide-react";
import Placeholder from "./Placeholder";

const iconMap = [Building2, Briefcase, GraduationCap, Globe, Users, Beaker];

const GlobalExperience = () => {
  const [open, setOpen] = useState(0);
  const ActiveIcon = iconMap[open % iconMap.length] || Compass;

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-red-50 py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">SSGI Advantage</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Immerse yourself in a <span className="font-light italic text-slate-500">Career-First</span>
            <br />Educational Experience at <span className="text-red-600">SSGI Campus</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Accordion */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
            {globalExperience.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setOpen(i)}
                className={`w-full text-left px-4 md:px-6 py-4 flex items-center gap-3 md:gap-4 transition-colors ${
                  open === i ? "bg-slate-50" : "hover:bg-slate-50"
                }`}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  open === i ? "bg-red-600 text-white rotate-45" : "bg-red-50 text-red-700"
                }`}>
                  <Plus className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="font-extrabold text-slate-900 text-sm md:text-base">{item.title}</div>
                  {open === i && (
                    <div className="text-slate-600 text-xs md:text-sm mt-1 leading-relaxed">{item.detail}</div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Preview placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <Placeholder
              key={open}
              icon={ActiveIcon}
              label={globalExperience[open].title}
              className="w-full h-full"
              rounded="rounded-2xl"
              variant="dark"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5 md:p-6 text-white">
              <div className="text-[10px] md:text-[11px] uppercase tracking-widest text-red-300 font-bold">SSGI Feature</div>
              <div className="text-xl md:text-2xl font-extrabold mt-1">{globalExperience[open].title}</div>
              <a href="#" className="mt-3 inline-flex items-center gap-2 text-white font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all">
                View More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExperience;
