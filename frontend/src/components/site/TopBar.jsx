import React, { useEffect, useState } from "react";
import { MessageCircle, Phone, Rotate3d, Facebook, Instagram, Youtube, Twitter, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { announcements, contactInfo } from "@/mock";

const TopBar = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % announcements.length), 4500);
    return () => clearInterval(t);
  }, []);
  const a = announcements[i];

  return (
    <div className="bg-slate-950 text-slate-100 text-xs">
      <div className="max-w-[1400px] mx-auto px-3 md:px-4 h-9 flex items-center gap-2 md:gap-4">
        {/* Rotating announcement */}
        <div className="flex items-center gap-1 md:gap-2 flex-1 min-w-0">
          <button
            onClick={() => setI((v) => (v - 1 + announcements.length) % announcements.length)}
            aria-label="Previous"
            className="hidden sm:inline-flex w-6 h-6 items-center justify-center rounded-full hover:bg-white/10"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <div key={i} className="flex items-center gap-2 md:gap-3 min-w-0 flex-1 animate-[fadeIn_0.5s_ease-in-out]">
            <span className="truncate text-[11px] md:text-xs">{a.text}</span>
            <a
              href={a.href}
              className="shrink-0 bg-red-600 hover:bg-red-700 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-2 md:px-2.5 py-1 rounded-sm transition-colors"
            >
              {a.cta}
            </a>
          </div>
          <button
            onClick={() => setI((v) => (v + 1) % announcements.length)}
            aria-label="Next"
            className="hidden sm:inline-flex w-6 h-6 items-center justify-center rounded-full hover:bg-white/10"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right utility */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-red-300 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" /> Whatsapp
          </a>
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1 hover:text-red-300 transition-colors">
            <Phone className="w-3.5 h-3.5" /> Call Us
          </a>
          <a href="#virtual-tour" className="flex items-center gap-1 hover:text-red-300 transition-colors">
            <Rotate3d className="w-3.5 h-3.5" /> 360°
          </a>
          <span className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2 text-slate-300">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, k) => (
              <a key={k} href="#" aria-label="social" className="hover:text-red-300 transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
