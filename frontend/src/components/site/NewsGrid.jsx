import React from "react";
import { newsCards } from "@/mock";
import { ArrowRight, Newspaper, Calendar } from "lucide-react";

const NewsGrid = () => (
  <section className="bg-slate-50 py-16 md:py-14 md:py-20">
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Latest at SSGI</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            News, Milestones &amp; <span className="text-red-600">Recognitions</span>
          </h2>
        </div>
        <a href="#" className="text-red-700 font-bold uppercase text-xs tracking-widest hover:gap-3 inline-flex items-center gap-2 transition-all">
          View All News <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {newsCards.map((n, idx) => (
          <article
            key={idx}
            className="group relative bg-white rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="h-1.5 bg-gradient-to-r from-red-600 to-red-800" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                  <Newspaper className="w-3 h-3" /> {n.tag}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  {n.subtag}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-red-700 transition-colors">
                {n.title}
              </h3>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-4">
                {n.excerpt}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <Calendar className="w-3.5 h-3.5" /> July 2026
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-red-700 font-bold uppercase text-xs tracking-widest hover:gap-2.5 transition-all"
                >
                  {n.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default NewsGrid;
