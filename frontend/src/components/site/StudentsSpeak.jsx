import React, { useState } from "react";
import { testimonials } from "@/mock";
import { Quote, ArrowRight, User } from "lucide-react";
import Placeholder from "./Placeholder";

const StudentsSpeak = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Students Speak</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Discover the <span className="font-light italic text-slate-500">inspiring stories</span> and
            <br className="hidden md:block" />valuable insights from our <span className="text-red-600">accomplished graduates</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
        </div>

        {/* Thumbnails */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {testimonials.map((tt, i) => (
            <button
              key={tt.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full pl-1 pr-3 md:pr-4 py-1 border transition-all ${
                active === i
                  ? "bg-red-600 text-white border-red-600 shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:border-red-400"
              }`}
            >
              <span className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                active === i ? "bg-white/20" : "bg-slate-200"
              }`}>
                <User className={`w-4 h-4 ${active === i ? "text-white" : "text-slate-500"}`} strokeWidth={1.6} />
              </span>
              <span className="text-xs md:text-sm font-semibold">{tt.name.split(" ")[0]}.</span>
            </button>
          ))}
        </div>

        {/* Active testimonial */}
        <div className="grid md:grid-cols-5 gap-6 items-center bg-white rounded-2xl border border-slate-200 shadow-lg p-5 md:p-10 max-w-5xl mx-auto">
          <div className="md:col-span-2 relative rounded-xl overflow-hidden aspect-square">
            <Placeholder
              key={active}
              icon={User}
              label={t.name}
              className="w-full h-full"
              rounded="rounded-xl"
              variant="light"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 md:p-5 text-white">
              <div className="font-extrabold text-lg md:text-xl">{t.name}</div>
              <div className="text-red-300 text-xs md:text-sm">{t.course} • SSGI Alumnus</div>
            </div>
          </div>
          <div className="md:col-span-3">
            <Quote className="w-8 h-8 md:w-10 md:h-10 text-red-300 mb-3" />
            <p className="text-slate-700 text-sm md:text-lg italic leading-relaxed">{t.text}</p>
            <a href="#" className="mt-5 md:mt-6 inline-flex items-center gap-2 text-red-600 font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsSpeak;
