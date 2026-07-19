import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const PageHero = ({ eyebrow, title, subtitle, breadcrumb = [] }) => (
  <section className="relative overflow-hidden bg-slate-950 text-white py-14 md:py-20 border-b border-white/5">
    <div className="relative max-w-[1400px] mx-auto px-4">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs md:text-sm text-slate-300 mb-4 md:mb-5">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-red-300 transition-colors">
          <Home className="w-3.5 h-3.5" />
          Home
        </Link>
        {breadcrumb.map((b, i) => (
          <React.Fragment key={i}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            {b.to ? (
              <Link to={b.to} className="hover:text-red-300 transition-colors">{b.label}</Link>
            ) : (
              <span className="text-red-300 font-semibold">{b.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>

      {eyebrow && (
        <div className="text-[11px] uppercase tracking-widest text-red-400 font-bold mb-2">{eyebrow}</div>
      )}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-slate-300 text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-16 md:w-24 h-1 bg-red-600 mt-5 md:mt-6 rounded-full" />
    </div>
  </section>
);

export default PageHero;
