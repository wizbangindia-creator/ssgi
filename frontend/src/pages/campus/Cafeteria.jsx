import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Utensils,
  UtensilsCrossed,
  Coffee,
  Clock,
  BadgeCheck,
  Sparkles,
  Users,
  Leaf,
  ArrowRight,
  ChevronLeft,
  Phone,
} from "lucide-react";

const KPIS = [
  { icon: UtensilsCrossed, label: "Cuisines",      value: "6+"    },
  { icon: Sparkles,        label: "Menu items",    value: "60+"   },
  { icon: BadgeCheck,      label: "Hygiene rating",value: "A+"    },
  { icon: Users,           label: "Seating",       value: "800+"  },
];

const WHY = [
  { icon: BadgeCheck, title: "Hygiene first",       copy: "FSSAI-certified vendors, mandatory gloves &amp; caps, weekly deep cleaning and internal audits." },
  { icon: Utensils,   title: "Chef-led kitchens",   copy: "Experienced chefs curate seasonal menus with a focus on nutrition and taste." },
  { icon: Coffee,     title: "Student-friendly pricing", copy: "Thoughtful combo meals start at ₹49 &mdash; designed to be affordable for daily meals." },
  { icon: Leaf,       title: "Special diets",       copy: "Jain, vegan and gluten-free options are available at the main food court on request." },
  { icon: Users,      title: "Food committee",      copy: "A rotating student food committee gives feedback on menu, pricing and quality every semester." },
  { icon: Sparkles,   title: "Festival specials",   copy: "Diwali, Lohri, Christmas and Baisakhi bring limited-edition seasonal menus." },
  { icon: Clock,      title: "Long open hours",     copy: "Main food court runs 7:30 am – 10:30 pm. Hostel-block snack counters run late into the night." },
  { icon: UtensilsCrossed, title: "Multiple cafeterias", copy: "Three cafeterias across campus with distinct menus so nothing feels repetitive." },
];

const Cafeteria = () => (
  <PageLayout>
    {/* ============ HERO ============ */}
    <section className="relative overflow-hidden bg-slate-950 text-white" data-testid="cafeteria-hero">
      <div className="relative max-w-[1400px] mx-auto px-4 pt-8 md:pt-14 pb-12 md:pb-16">
        <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
          <Link to="/" className="hover:text-red-300">Home</Link>
          <span className="text-slate-500">/</span>
          <Link to="/campus-life" className="hover:text-red-300">Campus Life</Link>
          <span className="text-slate-500">/</span>
          <span className="text-white font-semibold">Cafeteria</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-200 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
              <Utensils className="w-3.5 h-3.5" /> Campus Life · Cafeteria
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              A campus fed on <span className="text-red-500">taste, hygiene &amp; care</span>.
            </h1>
            <p className="mt-4 text-red-200 text-base md:text-lg font-semibold">Healthy, hygienic and delicious &mdash; around the clock.</p>
            <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
              From the main food court to the pharmacy-block canteen, SSGI&rsquo;s cafeterias are more than just
              places to eat &mdash; they are the social hubs where friendships are made and late-night project
              ideas take shape.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/apply">
                <Button className="h-11 px-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:8427184271">
                <Button variant="outline" className="h-11 px-5 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-wider">
                  <Phone className="w-4 h-4 mr-2" /> 84271-84271
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-6 md:p-8">
              <Clock className="w-9 h-9 text-red-400" strokeWidth={1.6} />
              <div className="mt-4 text-[10px] uppercase tracking-widest text-red-300 font-bold">Open Hours</div>
              <div className="mt-1 text-white font-extrabold text-2xl leading-tight">7:30 am &ndash; 10:30 pm</div>
              <div className="mt-1 text-sm text-slate-400">Main food court &middot; every day</div>
              <div className="mt-4 pt-4 border-t border-white/10 text-sm text-slate-300">
                Snack counters near the hostel block operate late into the night.
              </div>
            </div>
          </div>
        </div>

        {/* KPI strip */}
        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {KPIS.map((k) => (
            <div key={k.label} className="rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-4 md:p-5">
              <div className="flex items-center gap-2 text-red-300 text-[10px] uppercase tracking-widest font-bold">
                <k.icon className="w-3.5 h-3.5" /> {k.label}
              </div>
              <div className="mt-2 text-white text-2xl md:text-3xl font-black tracking-tight tabular-nums">{k.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ WHY SSGI CAFETERIA ============ */}
    <section className="bg-white py-14 md:py-20" data-testid="cafeteria-why">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mb-8 md:mb-10">
          <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Why Our Cafeteria</div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Built on quality, hygiene and student feedback.
          </h2>
          <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY.map((w, i) => (
            <div key={w.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <div className="absolute top-4 right-5 text-slate-100 font-black text-4xl tabular-nums select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center mb-3">
                <w.icon className="w-5 h-5" />
              </div>
              <div className="font-extrabold text-slate-900 text-base leading-snug">{w.title}</div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: w.copy }} />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ============ CTA ============ */}
    <section className="bg-slate-950 text-white py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <Link to="/campus-life" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white">
          <ChevronLeft className="w-4 h-4" /> Back to Campus Life
        </Link>
        <Link to="/apply">
          <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider" data-testid="cafeteria-apply-cta">
            Apply for 2026 <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Cafeteria;
