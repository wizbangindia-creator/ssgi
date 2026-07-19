import React from "react";
import PageLayout from "@/components/site/PageLayout";
import PageHero from "@/components/site/PageHero";
import {
  Target, Compass, HeartHandshake, Lightbulb, Users, Rocket, Award, ShieldCheck, Leaf,
} from "lucide-react";

const missionPoints = [
  {
    icon: Rocket,
    title: "Industry-Ready Graduates",
    detail: "Deliver curricula and hands-on training that make every SSGI graduate immediately industry-relevant.",
  },
  {
    icon: Users,
    title: "Inclusive Access",
    detail: "Reach out to meritorious and underserved students of North India through scholarships and financial support.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    detail: "Foster a research-active, patent-filing culture across engineering, pharmacy and applied sciences.",
  },
  {
    icon: HeartHandshake,
    title: "Ethical Professionals",
    detail: "Instil integrity, empathy and social responsibility as non-negotiable traits of every SSGI graduate.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Excellence",
    detail: "Maintain the highest standards of AICTE, PCI, IKGPTU and PSBTE compliance across every programme.",
  },
  {
    icon: Leaf,
    title: "Sustainable Campus",
    detail: "Build and operate campuses that are green, safe and future-fit for the next generation of learners.",
  },
];

const coreValues = [
  { title: "Determination", detail: "To pursue excellence relentlessly, without shortcuts." },
  { title: "Dedication", detail: "To place learners at the centre of every institutional decision." },
  { title: "Devotion", detail: "To treat education as a lifelong service, not a business." },
  { title: "Integrity", detail: "To act ethically, transparently and responsibly at every level." },
  { title: "Innovation", detail: "To question the status quo and constantly evolve our teaching, research and campus practice." },
  { title: "Inclusion", detail: "To make our campus a safe, respectful and empowering space for every student." },
];

const VisionMission = () => (
  <PageLayout>
    <PageHero
      eyebrow="Purpose & Values"
      title="Vision & Mission"
      subtitle="The compass that guides everything we do at Sri Sai Group of Institutes."
      breadcrumb={[{ label: "About", to: "/about" }, { label: "Vision & Mission" }]}
    />

    {/* Vision */}
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="w-14 h-14 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md mb-5">
              <Compass className="w-7 h-7" />
            </div>
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Our Vision</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              To be North India's most trusted <span className="text-red-600">multi-disciplinary</span> educational group.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 md:mt-5 rounded-full" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="space-y-4 md:space-y-5 text-slate-700 text-sm md:text-base leading-relaxed">
            <p>
              To be recognised as North India's most trusted multi-disciplinary educational group — an
              institution where academic rigour, industry alignment, research excellence and human values meet
              to shape professionals who lead with competence and conscience.
            </p>
            <p>
              We aspire to build a campus where every learner — irrespective of geography, gender or financial
              background — finds the pathway to their fullest potential. Where classrooms, laboratories,
              hostels, sports grounds and student clubs together create an environment of ambition, empathy and
              excellence.
            </p>
            <p>
              Our vision is not measured only in placements and packages, but in the number of confident,
              capable and compassionate citizens SSGI adds to the country and the world.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-14 md:py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md mb-5 mx-auto">
            <Target className="w-7 h-7" />
          </div>
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Our Mission</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Six missions that <span className="text-red-600">drive us</span> every single day
          </h2>
          <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {missionPoints.map((m, i) => (
            <div key={m.title} className="group bg-white rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all p-5 md:p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-red-50 text-red-700 group-hover:bg-red-600 group-hover:text-white transition-colors flex items-center justify-center">
                  <m.icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-extrabold text-slate-200 group-hover:text-red-100 tabular-nums transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3 className="font-extrabold text-base md:text-lg text-slate-900 group-hover:text-red-700 transition-colors">
                {m.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Core values */}
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <div className="w-14 h-14 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md mb-5 mx-auto">
            <Award className="w-7 h-7" />
          </div>
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Core Values</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            The values that <span className="text-red-600">define SSGI</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto mt-4 md:mt-5 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {coreValues.map((v) => (
            <div key={v.title} className="rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-red-300 hover:shadow-md transition-all p-5 md:p-6">
              <div className="text-[10px] uppercase tracking-widest text-red-700 font-bold">SSGI Value</div>
              <div className="font-extrabold text-lg md:text-xl text-slate-900 mt-1">{v.title}</div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{v.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default VisionMission;
