import React from "react";
import { placementDrives } from "@/mock";
import { Briefcase, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const JointPlacementDrive = ({ onEnquire }) => (
  <section id="placements" className="relative py-16 md:py-14 md:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.35),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(220,38,38,0.3),transparent_45%)]" />
    <div className="relative max-w-[1400px] mx-auto px-4">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-red-500 font-bold mb-2">SSGI Career Cell</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight">
            Joint Placement <span className="bg-red-600 text-slate-950 px-3 rounded-md">Drive</span>
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Step into high-impact career opportunities with top recruiters and industry pioneers visiting SSGI campuses this season.
          </p>
        </div>
        <Button onClick={onEnquire} className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider px-6 py-6 text-sm">
          Register Now <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {placementDrives.map((d, i) => (
          <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-11 h-11 rounded-md bg-red-600 text-slate-950 flex items-center justify-center shrink-0 font-extrabold">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-extrabold text-lg text-white leading-snug">{d.company}</div>
                <div className="text-slate-400 text-xs mt-0.5">{d.branches}</div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-slate-300 text-xs">
                <Calendar className="w-3.5 h-3.5 text-red-500" /> Batch {d.batch}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 rounded-sm">
                {d.status}
              </span>
            </div>
            <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-red-500 font-bold uppercase text-xs tracking-widest hover:gap-2.5 transition-all">
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default JointPlacementDrive;
