import React from "react";
import { Wallet, Award, GraduationCap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const schemes = [
  {
    icon: Award,
    title: "Merit-Based Scholarship",
    detail: "Up to 100% fee waiver based on 10+2 marks, JEE, CET or entrance test scores.",
    highlight: "Up to 100%",
  },
  {
    icon: Users,
    title: "Need-Based Financial Aid",
    detail: "Special assistance for economically weaker students to make quality education accessible.",
    highlight: "Case-by-case",
  },
  {
    icon: GraduationCap,
    title: "Sports & Cultural Quota",
    detail: "Fee concessions for state and national level sports players and cultural achievers.",
    highlight: "Up to 50%",
  },
  {
    icon: Wallet,
    title: "Education Loan Support",
    detail: "Tie-ups with leading nationalised & private banks for hassle-free education loans.",
    highlight: "Zero hassle",
  },
];

const Scholarships = ({ onEnquire }) => (
  <section id="scholarship" className="bg-white py-14 md:py-20">
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Financial Support</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Quality Education, <span className="font-light italic text-slate-500">Made</span>
            <br /><span className="text-red-600">Affordable</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
            SSGI believes deserving students should never be limited by finances. Explore our multiple scholarship schemes and education loan tie-ups.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={onEnquire} className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs md:text-sm">
              Apply for Scholarship <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100 font-bold uppercase tracking-wider text-xs md:text-sm">
              View Fee Structure
            </Button>
          </div>
        </div>

        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
          {schemes.map((s) => (
            <div
              key={s.title}
              className="group relative bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all rounded-xl p-5 md:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <s.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-red-50 text-red-700">
                  {s.highlight}
                </span>
              </div>
              <h3 className="mt-4 font-extrabold text-base md:text-lg text-slate-900 group-hover:text-red-700 transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 text-slate-600 text-xs md:text-sm leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Scholarships;
