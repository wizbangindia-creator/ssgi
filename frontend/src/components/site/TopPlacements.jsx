import React from "react";
import { topPlacements, recruiters } from "@/mock";
import { TrendingUp, ArrowRight, User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopPlacements = ({ onEnquire }) => (
  <section className="bg-white py-14 md:py-20">
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-10 md:mb-12">
        <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Placement Highlights</div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          The World's <span className="font-light italic text-slate-500">Leading Companies</span>
          <br />Hire our <span className="text-red-600">Talent</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-5 md:mt-6">
          <Button onClick={onEnquire} className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs">
            Apply Now <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100 font-bold uppercase tracking-wider text-xs">
            View Placements
          </Button>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 md:mb-14">
        {[
          { v: "10,999+", l: "Placement Offers" },
          { v: "200+", l: "Recruiters Visited" },
          { v: "₹24.5 LPA", l: "Highest National Package" },
          { v: "₹10 LPA", l: "Package by 40+ Companies" },
        ].map((s) => (
          <div key={s.l} className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-4 md:p-5 text-center hover:shadow-md transition-shadow">
            <div className="text-xl md:text-3xl font-extrabold text-red-600">{s.v}</div>
            <div className="text-[10px] md:text-xs text-slate-600 mt-1 font-semibold uppercase tracking-wider leading-tight">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Top placement student placeholder cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10 md:mb-14">
        {topPlacements.map((s) => (
          <div key={s.name} className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-md hover:shadow-2xl transition-all">
            <div className="aspect-[3/4] relative overflow-hidden bg-slate-800 flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-15"
                style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0 10px, transparent 10px 20px)" }}
              />
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-700/80 border border-white/15 flex items-center justify-center">
                <User className="w-8 h-8 md:w-10 md:h-10 text-slate-400" strokeWidth={1.5} />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-red-300 font-bold truncate">Placed at {s.company}</div>
              <div className="font-bold text-white text-sm md:text-base leading-tight mt-1 truncate">{s.name}</div>
              <div className="text-[11px] md:text-xs text-slate-300 truncate">{s.role}</div>
              <div className="mt-2 inline-flex items-center gap-1 bg-red-600 text-white text-xs font-extrabold px-2 py-1 rounded-sm">
                <TrendingUp className="w-3.5 h-3.5" /> {s.pkg}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recruiters as text pill marquee */}
      <div>
        <h3 className="text-center text-slate-900 font-extrabold text-lg md:text-2xl mb-5 md:mb-6 px-2">
          Top-Tier Companies in SSGI's Placement Network
        </h3>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex gap-3 md:gap-4 animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
            {[...recruiters, ...recruiters].map((_src, i) => (
              <div
                key={i}
                className="shrink-0 h-16 md:h-20 w-32 md:w-44 flex items-center justify-center gap-2 rounded-lg bg-slate-50 border border-slate-200 shadow-sm px-3 md:px-5"
              >
                <Building2 className="w-4 h-4 md:w-5 md:h-5 text-slate-400 shrink-0" strokeWidth={1.5} />
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Recruiter #{(i % recruiters.length) + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TopPlacements;
