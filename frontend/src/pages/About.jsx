import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import { GraduationCap, Building2, Users, Trophy, Target, HeartHandshake, ArrowRight, ShieldCheck, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const milestones = [
  { year: "1996", title: "Foundation", detail: "Sri Sai Group established at Pathankot with a humble start in technical education." },
  { year: "2001", title: "Engineering College", detail: "Sri Sai College of Engineering & Technology launched with B.Tech programmes." },
  { year: "2008", title: "Multi-Discipline Expansion", detail: "Introduction of Pharmacy, Management, IT and Education colleges." },
  { year: "2013", title: "Polytechnic & PG", detail: "Polytechnic diplomas and postgraduate programmes added across streams." },
  { year: "2018", title: "IBM Industry Tie-up", detail: "Industry-integrated B.Tech CSE launched in partnership with IBM." },
  { year: "2021", title: "Silver Jubilee", detail: "SSGI celebrates 25 years of academic excellence and impact." },
  { year: "2026", title: "Next Frontier", detail: "Future-ready programmes in AI, ML, Cyber Security and Emerging Technologies." },
];

const leaders = [
  { name: "Founder's Message", to: "/about/founders-message", role: "Vision of the Founder" },
  { name: "Chairman's Desk", to: "/about/chairmans-desk", role: "From the Chairman" },
  { name: "Managing Director", to: "/about/managing-director", role: "MD's Address" },
  { name: "CMD Desk", to: "/about/cmd-desk", role: "Chief Managing Director" },
  { name: "Vice President", to: "/about/vice-president", role: "VP's Message" },
  { name: "Director-Principal", to: "/about/director-principal", role: "Sri Sai College of Engg. & Tech." },
  { name: "Vision & Mission", to: "/about/vision-mission", role: "Purpose & Values" },
];

const highlights = [
  { icon: Trophy, value: "10,999+", label: "Placements" },
  { icon: Users, value: "40,346+", label: "Alumni" },
  { icon: BookOpen, value: "50+", label: "Programmes" },
  { icon: ShieldCheck, value: "25+", label: "Years of Legacy" },
];

const About = () => (
  <PageLayout>
    <PageHero
      eyebrow="Who We Are"
      title="About Sri Sai Group of Institutes"
      subtitle="Transforming dreams into reality since 1996 — a name synonymous with quality higher and technical education in North India."
      breadcrumb={[{ label: "About" }]}
    />

    {/* Overview */}
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Our Story</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            A humble start in <span className="text-red-600">1996</span> — a legacy that shaped
            <span className="font-light italic text-slate-500"> a generation.</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 md:mt-5 mb-6 rounded-full" />
          <div className="space-y-4 md:space-y-5 text-slate-700 text-sm md:text-base leading-relaxed">
            <p>
              Sri Sai Group of Institutes (SSGI), Pathankot began its journey in 1996 with a bold vision —
              to make world-class higher and technical education accessible to every deserving student across
              North India. What started as a modest institution has today evolved into a multi-disciplinary
              educational group offering more than 50 programmes across Engineering, Pharmacy, Management,
              Information Technology, Education, Agriculture, Hotel Management and Applied Sciences.
            </p>
            <p>
              Guided by the philosophy of the 3D's — <strong>Determination, Dedication and Devotion</strong> —
              SSGI has consistently walked the extra mile to build campuses that are vibrant, ambitious and
              always ahead of their times. Modern academic blocks, industry-grade laboratories, a digital
              library, well-equipped hostels, sports facilities and a lush green campus create an environment
              where students thrive academically and personally.
            </p>
            <p>
              Over 25+ years, SSGI has produced 40,000+ alumni serving in leading MNCs, government
              organisations and their own successful ventures across India and abroad. Strategic industry
              tie-ups with IBM, Pearson VUE and 200+ recruiters ensure students are industry-ready from day one.
            </p>
          </div>
          <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
            <Link to="/about/vision-mission">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs md:text-sm">
                Vision &amp; Mission <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/about/chairmans-desk">
              <Button variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100 font-bold uppercase tracking-wider text-xs md:text-sm">
                Chairman's Desk
              </Button>
            </Link>
          </div>
        </div>

        {/* Highlight stats */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-6 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-sm mb-3">
                <h.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-red-600">{h.value}</div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1">{h.label}</div>
            </div>
          ))}
          <div className="col-span-2 rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white p-5 md:p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <HeartHandshake className="w-5 h-5" />
              <div className="text-[11px] uppercase tracking-widest font-bold text-red-100">Our Promise</div>
            </div>
            <div className="font-extrabold text-lg md:text-xl leading-snug">
              “We do not just teach students. We shape careers, character and confidence.”
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Milestones timeline */}
    <section className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Our Journey</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Milestones that <span className="text-red-600">shaped SSGI</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-red-200" />
          <div className="space-y-4 md:space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className={`md:grid md:grid-cols-2 md:gap-8 items-center ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                <div className="md:[direction:ltr]">
                  <div className="relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow p-5 md:p-6">
                    <div className="hidden md:block absolute top-6 w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-md"
                         style={i % 2 === 0 ? { right: "-2.15rem" } : { left: "-2.15rem" }} />
                    <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold">{m.year}</div>
                    <div className="font-extrabold text-lg md:text-xl text-slate-900 mt-1">{m.title}</div>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">{m.detail}</p>
                  </div>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Leadership quick links */}
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Leadership</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet the <span className="text-red-600">Leadership</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {leaders.map((l) => (
            <Link key={l.to} to={l.to} className="group bg-white rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all p-5 md:p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{l.role}</div>
                <div className="font-extrabold text-slate-900 group-hover:text-red-700 transition-colors">{l.name}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
