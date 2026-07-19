import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Search, ChevronDown } from "lucide-react";
import { primaryNav, megaNav, contactInfo, brand } from "@/mock";
import { Button } from "@/components/ui/button";

const MegaDropdown = ({ item, align = "center" }) => {
  const alignClass =
    align === "left"
      ? "left-0"
      : align === "right"
      ? "right-0"
      : "left-1/2 -translate-x-1/2";
  return (
    <div className={`absolute ${alignClass} top-full pt-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}>
      <div
        className={`bg-white rounded-b-lg shadow-2xl border border-slate-200 p-6 grid gap-6 ${
          item.columns.length > 2 ? "grid-cols-2 md:grid-cols-4 w-[900px]" : "grid-cols-2 w-[560px]"
        }`}
      >
      {item.columns.map((col, idx) => (
        <div key={idx}>
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-red-700 border-b border-red-100 pb-2 mb-3">
            {col.title}
          </h4>
          <ul className="space-y-1.5">
            {col.items.map((it, ii) => {
              const label = typeof it === "string" ? it : it.label;
              const to = typeof it === "object" ? it.to : null;
              return (
                <li key={ii}>
                  {to ? (
                    <Link to={to} className="text-[13px] text-slate-700 hover:text-red-700 transition-colors block">
                      {label}
                    </Link>
                  ) : (
                    <a href="#" className="text-[13px] text-slate-700 hover:text-red-700 transition-colors block">
                      {label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  </div>
  );
};

const Header = ({ onEnquire }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMega, setMobileMega] = useState(null);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      {/* Top row: logo | top-utility nav | helpline */}
      <div className="border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label={brand.name}>
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-14 md:h-16 w-auto object-contain shrink-0"
            />
          </Link>

          {/* Utility nav */}
          <nav className="hidden lg:flex items-center gap-5 text-[12px] font-semibold uppercase tracking-wider text-slate-700">
            {primaryNav.map((label) => {
              const routeMap = { "Contact Us": "/contact" };
              const to = routeMap[label];
              return to ? (
                <Link key={label} to={to} className="hover:text-red-700 transition-colors" data-testid={`utility-nav-${label.toLowerCase().replace(/\s+/g, "-")}`}>
                  {label}
                </Link>
              ) : (
                <a key={label} href="#" className="hover:text-red-700 transition-colors">
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Helpline + search + mobile */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${contactInfo.helpline.replace(/\s/g, "")}`}
              className="hidden md:flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors"
            >
              <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase tracking-widest opacity-90">Admission Helpline</div>
                <div className="text-sm font-bold">{contactInfo.helpline}</div>
              </div>
            </a>
            <button
              className="hidden md:inline-flex w-10 h-10 items-center justify-center rounded-md hover:bg-slate-100 text-slate-700"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="lg:hidden p-2 rounded hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega nav row */}
      <div className="hidden lg:block border-t border-slate-100 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <nav className="flex items-center justify-between gap-2 h-12">
            {megaNav.map((m, mi) => {
              const align =
                mi <= 1 ? "left" : mi >= megaNav.length - 2 ? "right" : "center";
              return (
                <div key={m.label} className="group relative h-full flex items-center">
                  <button className="flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider text-slate-800 hover:text-red-700 transition-colors px-2">
                    {m.label} <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <MegaDropdown item={m} align={align} />
                </div>
              );
            })}
            <Link to="/apply">
              <Button
                className="ml-2 bg-red-700 hover:bg-red-800 text-white font-bold uppercase text-xs tracking-wider"
                data-testid="header-apply-now-btn"
              >
                Apply Now
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[75vh] overflow-y-auto">
          <nav className="px-4 py-3 space-y-1">
            {megaNav.map((m, idx) => (
              <div key={m.label} className="border-b border-slate-100 last:border-0">
                <button
                  onClick={() => setMobileMega(mobileMega === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-3 font-bold uppercase text-sm text-slate-800"
                >
                  {m.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileMega === idx ? "rotate-180" : ""}`} />
                </button>
                {mobileMega === idx && (
                  <div className="pb-3 pl-2 space-y-3">
                    {m.columns.map((col, ci) => (
                      <div key={ci}>
                        <div className="text-[10px] font-bold uppercase text-red-700 tracking-widest mb-1">
                          {col.title}
                        </div>
                        <ul className="space-y-1">
                          {col.items.map((it, ii) => {
                            const label = typeof it === "string" ? it : it.label;
                            const to = typeof it === "object" ? it.to : null;
                            return (
                              <li key={ii}>
                                {to ? (
                                  <Link to={to} onClick={() => setMobileOpen(false)} className="text-sm text-slate-700 hover:text-red-700">
                                    {label}
                                  </Link>
                                ) : (
                                  <a href="#" className="text-sm text-slate-700 hover:text-red-700">{label}</a>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/apply" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-3 bg-red-700 hover:bg-red-800 text-white font-bold uppercase text-sm" data-testid="mobile-apply-now-btn">
                Apply Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
