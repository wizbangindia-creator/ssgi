import React from "react";
import { events } from "@/mock";
import { CalendarDays, ArrowRight } from "lucide-react";

const NewsEvents = () => (
  <section className="bg-slate-50 py-16 md:py-14 md:py-20">
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Stay Updated</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            News &amp; <span className="text-red-600">Upcoming Events</span>
          </h2>
        </div>
        <a href="#" className="text-red-600 font-bold uppercase text-xs tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all">
          View All Events <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {events.map((e, i) => (
          <div key={i} className="group flex items-stretch gap-4 bg-white rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-md transition-all overflow-hidden">
            <div className="bg-gradient-to-b from-red-600 to-red-700 text-white flex flex-col items-center justify-center w-24 py-4 shrink-0">
              <CalendarDays className="w-5 h-5 mb-1 opacity-80" />
              <div className="text-lg font-extrabold leading-none">{e.date.split(" ")[1]}</div>
              <div className="text-xs uppercase tracking-widest opacity-90 mt-1">{e.date.split(" ")[0]}</div>
            </div>
            <div className="flex-1 py-4 pr-5">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-red-50 text-red-800 px-2 py-0.5 rounded-sm">
                {e.tag}
              </span>
              <div className="mt-2 font-bold text-slate-900 leading-snug group-hover:text-red-700 transition-colors">
                {e.title}
              </div>
              <a href="#" className="mt-2 inline-flex items-center gap-1 text-red-600 font-semibold text-xs uppercase tracking-widest hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NewsEvents;
