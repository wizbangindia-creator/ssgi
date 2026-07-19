import React from "react";
import { Home, Bus, Utensils, Dumbbell, BookOpen, Wifi, HeartPulse, TreePine, Beaker } from "lucide-react";

const facilities = [
  { icon: Home, title: "Modern Hostels", detail: "Separate boys & girls hostels with rooms of 24/7 security, hot water and mess." },
  { icon: Bus, title: "Transportation", detail: "Bus fleet connecting the campus to Pathankot & adjoining districts." },
  { icon: Utensils, title: "Cafeteria & Mess", detail: "Hygienic multi-cuisine mess & food court with nutritious meals every day." },
  { icon: Beaker, title: "Modern Labs", detail: "AI/ML, cyber, pharma, mech, civil and electronics labs with industry-grade equipment." },
  { icon: BookOpen, title: "Digital Library", detail: "Central library with e-journals, thousands of titles and quiet study zones." },
  { icon: Dumbbell, title: "Sports & Gym", detail: "Cricket, basketball, football grounds, indoor games and modern fitness centre." },
  { icon: HeartPulse, title: "Medical Care", detail: "On-campus medical room with tie-ups to Fortis, Sachdeva and city hospitals." },
  { icon: Wifi, title: "Wi-Fi Campus", detail: "Fully Wi-Fi enabled academic blocks and hostels for seamless learning." },
  { icon: TreePine, title: "Green Campus", detail: "Lush green landscaped campus with open-air amphitheatre and lawns." },
];

const Infrastructure = () => (
  <section id="campus-life" className="bg-slate-50 py-14 md:py-20">
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-10 md:mb-12">
        <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Campus Infrastructure</div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          A Vibrant Campus for <span className="font-light italic text-slate-500">Holistic</span>
          <br className="hidden md:block" /> Learning &amp; <span className="text-red-600">Living</span>
        </h2>
        <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-5">
        {facilities.map((f) => (
          <div
            key={f.title}
            className="group bg-white rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all p-4 md:p-6"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-red-50 text-red-700 group-hover:bg-red-600 group-hover:text-white transition-colors flex items-center justify-center mb-3 md:mb-4">
              <f.icon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm md:text-base group-hover:text-red-700 transition-colors">
              {f.title}
            </h3>
            <p className="mt-1.5 text-slate-600 text-xs md:text-sm leading-relaxed">{f.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Infrastructure;
