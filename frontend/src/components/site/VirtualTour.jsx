import React from "react";
import { PlayCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const VirtualTour = ({ onEnquire }) => (
  <section id="virtual-tour" className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
    {/* Decorative background pattern */}
    <div
      className="absolute inset-0 opacity-25"
      style={{ backgroundImage: "radial-gradient(circle at 15% 20%, rgba(220,38,38,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(220,38,38,0.25), transparent 50%)" }}
    />
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0 1px, transparent 1px 22px)" }}
    />

    <div className="relative max-w-[1400px] mx-auto px-4">
      <div className="max-w-2xl">
        <div className="text-[11px] uppercase tracking-widest text-red-400 font-bold mb-3">Explore Our Campus</div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Step Inside <span className="font-light italic text-white/85">Sri Sai Group</span>
          <br />&mdash; <span className="text-red-500">Virtually!</span>
        </h2>
        <p className="mt-4 md:mt-5 text-slate-200 max-w-lg text-sm sm:text-base md:text-lg">
          Take an immersive 360° walk-through of our Badhani, Pathankot campus &mdash; anywhere, anytime.
        </p>
        <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs md:text-sm px-5 md:px-6 py-5 md:py-6">
            <PlayCircle className="w-5 h-5 mr-2" /> View Virtual Tour
          </Button>
          <Button onClick={onEnquire} variant="outline" className="bg-transparent border-white/60 text-white hover:bg-white hover:text-slate-900 font-bold uppercase tracking-wider text-xs md:text-sm px-5 md:px-6 py-5 md:py-6">
            <MapPin className="w-5 h-5 mr-2" /> Visit Campus
          </Button>
        </div>

        <div className="mt-8 md:mt-10 grid grid-cols-3 gap-3 md:gap-4 max-w-lg">
          {[
            { l: "1", s: "Mega Campus" },
            { l: "50+", s: "Programmes" },
            { l: "25+ Years", s: "Legacy" },
          ].map((k) => (
            <div key={k.s} className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center">
              <div className="text-xl md:text-3xl font-extrabold text-red-400">{k.l}</div>
              <div className="text-[10px] md:text-xs text-slate-300 uppercase tracking-widest mt-1">{k.s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default VirtualTour;
