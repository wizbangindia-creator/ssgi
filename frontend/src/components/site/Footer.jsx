import React from "react";
import { contactInfo, megaNav, brand } from "@/mock";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-slate-950 text-slate-300">
    <div className="max-w-[1400px] mx-auto px-4 py-14">
      {/* Top row: brand + description */}
      <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-4 bg-white/95 rounded-lg p-3 inline-flex w-auto">
            <img src={brand.logo} alt={brand.name} className="h-14 w-auto object-contain" />
          </div>
          <p className="text-sm leading-relaxed text-slate-400 max-w-md mt-4">
            Sri Sai Group of Institutes is a leading name in Higher and Technical Education in North India,
            with its mega campus at Pathankot, Punjab and Sri Sai University at Palampur, Himachal Pradesh.
          </p>
          <div className="flex gap-2 mt-5">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-colors">
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Reach Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <div>
                <a href={`tel:${contactInfo.phone}`} className="block hover:text-red-300">Call: {contactInfo.phoneShort}</a>
                <a href={`tel:${contactInfo.helpline.replace(/\s/g,'')}`} className="block hover:text-red-300">Helpline: {contactInfo.helpline}</a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-red-300">{contactInfo.email}</a>
            </li>
          </ul>
        </div>

        {megaNav.slice(0, 3).map((m) => (
          <div key={m.label} className="md:col-span-2 lg:col-span-1 xl:col-span-2">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">{m.label}</h3>
            <ul className="space-y-2 text-sm">
              {m.columns[0].items.slice(0, 6).map((it, i) => {
                const label = typeof it === "string" ? it : it.label;
                return (
                  <li key={i}>
                    <a href="#" className="hover:text-red-300 transition-colors">{label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Quick action strip */}
      <div className="grid md:grid-cols-4 gap-3 py-6 border-b border-white/10">
        {[
          { l: "Apply for Admission 2026", c: "bg-red-600 hover:bg-red-700" },
          { l: "SSGI Scholarship", c: "bg-red-600 hover:bg-red-700" },
          { l: "Virtual Campus Tour", c: "bg-emerald-600 hover:bg-emerald-700" },
          { l: "Pay Fees Online", c: "bg-slate-800 hover:bg-slate-700 border border-white/10" },
        ].map((b) => (
          <a key={b.l} href="#" className={`text-center py-3 rounded-md text-white font-bold uppercase tracking-wider text-xs ${b.c} transition-colors`}>
            {b.l}
          </a>
        ))}
      </div>

      <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div>&copy; {new Date().getFullYear()} Sri Sai Group of Institutes. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-red-300">Privacy Policy</a>
          <a href="#" className="hover:text-red-300">Terms of Service</a>
          <a href="#" className="hover:text-red-300">Sitemap</a>
          <a href="#" className="hover:text-red-300">Anti-Ragging</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
