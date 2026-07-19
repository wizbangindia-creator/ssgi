import React, { useState } from "react";
import { whyChoose } from "@/mock";
import { ChevronRight } from "lucide-react";

const WhyChoose = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Why SSGI</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Should You <span className="font-light italic text-slate-500">Choose</span>
            <br /> <span className="text-red-600">Sri Sai Group of Institutes?</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
        </div>

        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {whyChoose.map((row, i) => {
            const isOpen = open === i;
            return (
              <div key={row.title}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full py-4 md:py-6 px-1 md:px-2 flex items-center gap-3 md:gap-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className={`text-2xl md:text-4xl font-extrabold tabular-nums w-10 md:w-14 shrink-0 transition-colors ${
                    isOpen ? "text-red-600" : "text-slate-300"
                  }`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className={`flex-1 font-extrabold text-sm sm:text-base md:text-2xl transition-colors leading-snug ${
                    isOpen ? "text-red-700" : "text-slate-900"
                  }`}>
                    {row.title}
                  </div>
                  <ChevronRight className={`w-5 h-5 md:w-6 md:h-6 shrink-0 transition-transform ${
                    isOpen ? "rotate-90 text-red-600" : "text-slate-400"
                  }`} />
                </button>
                {isOpen && (
                  <div className="pl-14 md:pl-24 pr-2 md:pr-8 pb-5 md:pb-6 -mt-1 max-w-4xl">
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed animate-[fadeIn_0.4s_ease-in-out]">
                      {row.detail}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
