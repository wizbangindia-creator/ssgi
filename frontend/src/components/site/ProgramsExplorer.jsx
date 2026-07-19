import React, { useState } from "react";
import { disciplines, programsByDiscipline } from "@/mock";
import {
  Cpu, Briefcase, Monitor, Pill, GraduationCap, Sprout, ChefHat, FlaskConical, Wrench, ArrowRight, Clock, IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap = {
  "Engineering": Cpu,
  "Management": Briefcase,
  "Computing / IT": Monitor,
  "Pharmacy": Pill,
  "Education": GraduationCap,
  "Agriculture": Sprout,
  "Hotel Management": ChefHat,
  "Applied Sciences": FlaskConical,
  "Diploma / Polytechnic": Wrench,
};

const durationMap = {
  "Engineering": "4 Years / 2 Years",
  "Management": "3 Years / 2 Years",
  "Computing / IT": "3 Years / 2 Years",
  "Pharmacy": "2–4 Years",
  "Education": "1–2 Years",
  "Agriculture": "4 Years",
  "Hotel Management": "4 Years",
  "Applied Sciences": "2 Years",
  "Diploma / Polytechnic": "3 Years",
};

const ProgramsExplorer = ({ onEnquire }) => {
  const [active, setActive] = useState(disciplines[0]);
  const programs = programsByDiscipline[active] || [];
  const Icon = iconMap[active] || Cpu;

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Academics</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore Our <span className="font-light italic text-slate-500">Wide-Range</span> of
            <br className="hidden md:block" /> <span className="text-red-600">50+ Programmes</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
        </div>

        {/* Discipline tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {disciplines.map((d) => {
            const DIcon = iconMap[d] || Cpu;
            const isActive = active === d;
            return (
              <button
                key={d}
                onClick={() => setActive(d)}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border transition-all ${
                  isActive
                    ? "bg-red-600 text-white border-red-600 shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:border-red-400 hover:text-red-700"
                }`}
              >
                <DIcon className="w-4 h-4" />
                {d}
              </button>
            );
          })}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-1 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-5">
              <Icon className="w-7 h-7" />
            </div>
            <div className="text-[11px] uppercase tracking-widest text-red-100 font-bold">SSGI Discipline</div>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-1 leading-tight">{active}</h3>
            <p className="mt-3 text-red-100 text-sm leading-relaxed">
              Industry-aligned {active.toLowerCase()} programmes with expert faculty, modern labs, and dedicated placement support.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-1 text-red-100 text-[10px] uppercase tracking-widest font-bold">
                  <Clock className="w-3 h-3" /> Duration
                </div>
                <div className="text-white font-extrabold text-sm mt-1">{durationMap[active]}</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center gap-1 text-red-100 text-[10px] uppercase tracking-widest font-bold">
                  <IndianRupee className="w-3 h-3" /> Fees
                </div>
                <div className="text-white font-extrabold text-sm mt-1">Affordable + Scholarship</div>
              </div>
            </div>

            <Button onClick={onEnquire} className="w-full mt-6 bg-white text-red-700 hover:bg-red-50 font-bold uppercase tracking-wider text-xs">
              Enquire About {active} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {programs.map((p, idx) => (
              <div
                key={p}
                className="group flex items-center gap-3 p-4 bg-slate-50 hover:bg-white border border-transparent hover:border-red-200 hover:shadow-md rounded-lg transition-all"
              >
                <div className="w-10 h-10 rounded-md bg-white border border-red-100 text-red-700 flex items-center justify-center shrink-0 font-extrabold text-sm">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm text-slate-900 group-hover:text-red-700 transition-colors truncate">
                    {p}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">AICTE / Regulator Approved</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsExplorer;
