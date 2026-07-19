import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Coffee,
  UtensilsCrossed,
  Sandwich,
  Cookie,
  IceCream,
  Soup,
  Clock,
  Sparkles,
  Heart,
  ArrowRight,
  ChevronLeft,
  BadgeCheck,
} from "lucide-react";

/* ---------- Menu (per cuisine) ---------- */
const CUISINES = {
  "North Indian": {
    accent: "from-orange-500 to-red-600",
    emoji: "🍛",
    items: [
      { name: "Butter Chicken + Naan",   price: "₹149", tag: "Bestseller" },
      { name: "Paneer Butter Masala",    price: "₹129", tag: "Veg Star" },
      { name: "Chole Bhature (2)",       price: "₹89",  tag: "" },
      { name: "Rajma Chawal",            price: "₹79",  tag: "Combo" },
      { name: "Amritsari Kulcha",        price: "₹69",  tag: "" },
      { name: "Dal Makhani + Rice",      price: "₹99",  tag: "" },
    ],
  },
  "South Indian": {
    accent: "from-amber-500 to-yellow-500",
    emoji: "🥞",
    items: [
      { name: "Masala Dosa",             price: "₹69",  tag: "Crispy" },
      { name: "Idli Sambar (4)",         price: "₹59",  tag: "" },
      { name: "Uttapam (Onion / Mix)",   price: "₹79",  tag: "" },
      { name: "Medu Vada (2)",           price: "₹49",  tag: "" },
      { name: "Filter Kaapi",            price: "₹35",  tag: "Signature" },
      { name: "Curd Rice",               price: "₹69",  tag: "" },
    ],
  },
  "Chinese": {
    accent: "from-rose-500 to-pink-600",
    emoji: "🥡",
    items: [
      { name: "Veg Hakka Noodles",       price: "₹89",  tag: "" },
      { name: "Chicken Manchurian",      price: "₹129", tag: "Spicy 🔥" },
      { name: "Schezwan Fried Rice",     price: "₹99",  tag: "Bestseller" },
      { name: "Chilly Paneer (Dry)",     price: "₹119", tag: "" },
      { name: "Momos (Steamed / Fried)", price: "₹69",  tag: "Trending" },
      { name: "Sweet Corn Soup",         price: "₹59",  tag: "" },
    ],
  },
  "Snacks & Chaats": {
    accent: "from-lime-500 to-green-600",
    emoji: "🥪",
    items: [
      { name: "Aloo Tikki Chaat",        price: "₹49",  tag: "Chatpata" },
      { name: "Pani Puri (6)",           price: "₹39",  tag: "" },
      { name: "Bombay Sandwich",         price: "₹59",  tag: "" },
      { name: "Grilled Cheese Toast",    price: "₹69",  tag: "" },
      { name: "Samosa (2) + Chutney",    price: "₹35",  tag: "Classic" },
      { name: "Bhel Puri",               price: "₹45",  tag: "" },
    ],
  },
  "Beverages": {
    accent: "from-sky-500 to-cyan-600",
    emoji: "☕",
    items: [
      { name: "Masala Chai",             price: "₹25",  tag: "Signature" },
      { name: "Filter Coffee",           price: "₹35",  tag: "" },
      { name: "Cold Coffee (Frappe)",    price: "₹79",  tag: "" },
      { name: "Fresh Lime Soda",         price: "₹49",  tag: "" },
      { name: "Mango Lassi",             price: "₹59",  tag: "Summer" },
      { name: "Choco Shake",             price: "₹79",  tag: "Trending" },
    ],
  },
  "Desserts": {
    accent: "from-fuchsia-500 to-purple-600",
    emoji: "🍰",
    items: [
      { name: "Gulab Jamun (2)",         price: "₹49",  tag: "Classic" },
      { name: "Choco Lava Cake",         price: "₹99",  tag: "Melty 🔥" },
      { name: "Kulfi Falooda",           price: "₹79",  tag: "" },
      { name: "Rasmalai (2)",            price: "₹69",  tag: "" },
      { name: "Ice-Cream Sundae",        price: "₹99",  tag: "" },
      { name: "Brownie + Ice-cream",     price: "₹109", tag: "Best pair" },
    ],
  },
};

const KPIS = [
  { icon: UtensilsCrossed, label: "Cuisines",         value: "6+",     accent: "bg-orange-500" },
  { icon: Sparkles,        label: "Menu items",        value: "60+",    accent: "bg-red-500"    },
  { icon: BadgeCheck,      label: "FSSAI certified",   value: "A+",     accent: "bg-emerald-500"},
  { icon: Heart,           label: "Combos from",       value: "₹49",    accent: "bg-fuchsia-500"},
];

const Cafeteria = () => {
  const cuisineKeys = Object.keys(CUISINES);
  const [active, setActive] = useState(cuisineKeys[0]);

  return (
    <PageLayout>
      {/* ============ HERO — warm, food-forward ============ */}
      <section
        className="relative overflow-hidden text-slate-900"
        style={{
          background:
            "radial-gradient(1000px 400px at 20% 0%, #fff7d6 0%, transparent 55%), radial-gradient(900px 400px at 100% 20%, #ffe1cf 0%, transparent 55%), linear-gradient(180deg, #fff6ee 0%, #ffece2 100%)",
        }}
        data-testid="cafeteria-hero"
      >
        {/* floating food emojis */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-60 text-6xl md:text-8xl">
          <span className="absolute top-10 left-8 -rotate-12">🍔</span>
          <span className="absolute top-24 right-16 rotate-6">🍕</span>
          <span className="absolute bottom-16 left-1/4 -rotate-6">🍜</span>
          <span className="absolute bottom-10 right-1/3 rotate-3">🧁</span>
          <span className="absolute top-1/2 left-1/2 rotate-12 hidden md:block">🥤</span>
          <span className="absolute bottom-24 right-8 -rotate-6 hidden md:block">🍩</span>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="flex items-center gap-2 text-xs text-slate-700 mb-6">
            <Link to="/" className="hover:text-red-700">Home</Link>
            <span className="text-slate-400">/</span>
            <Link to="/campus-life" className="hover:text-red-700">Campus Life</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-bold">Cafeteria</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white shadow-lg text-red-700 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest border border-red-100">
              <Sparkles className="w-3.5 h-3.5" /> Yumm-athon ongoing
            </div>
            <h1 className="mt-5 font-black tracking-tight leading-[0.95] text-slate-900">
              <span className="block text-6xl sm:text-7xl md:text-9xl">Eat.</span>
              <span className="block text-6xl sm:text-7xl md:text-9xl text-red-600 italic font-light">Chill.</span>
              <span className="block text-6xl sm:text-7xl md:text-9xl">Repeat.</span>
            </h1>
            <p className="mt-6 text-slate-700 text-base md:text-lg max-w-2xl leading-relaxed">
              SSGI&rsquo;s cafeterias are less &ldquo;food court&rdquo;, more &ldquo;campus soul&rdquo;. Chai adda,
              late-night maggi missions, birthday cakes, group-study fuel &mdash; all in one place, at student-friendly
              prices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu">
                <Button className="h-12 px-7 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm shadow-lg shadow-red-300">
                  Peek the Menu <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-white text-slate-800 px-4 py-3 rounded-full text-sm font-bold">
                <Clock className="w-4 h-4 text-red-600" /> 7:30 am &ndash; 10:30 pm daily
              </div>
            </div>
          </div>

          {/* Floating dish cards */}
          <div className="mt-14 hidden md:grid grid-cols-4 gap-4 max-w-4xl">
            {[
              { e: "🥘", n: "Butter Chicken", p: "₹149" },
              { e: "🍜", n: "Hakka Noodles",  p: "₹89" },
              { e: "☕", n: "Masala Chai",   p: "₹25" },
              { e: "🍰", n: "Lava Cake",     p: "₹99" },
            ].map((d, i) => (
              <div
                key={d.n}
                className={`rounded-3xl bg-white shadow-xl border border-slate-100 p-5 ${
                  i % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"
                } hover:rotate-0 hover:scale-105 transition-all duration-500`}
              >
                <div className="text-5xl">{d.e}</div>
                <div className="mt-2 font-black text-slate-900">{d.n}</div>
                <div className="text-red-600 font-black text-xl">{d.p}</div>
              </div>
            ))}
          </div>
        </div>

        {/* KPI Ticker */}
        <div className="relative bg-slate-950 text-white">
          <div className="max-w-[1400px] mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {KPIS.map((k) => (
              <div key={k.label} className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-lg text-white flex items-center justify-center shrink-0 ${k.accent}`}>
                  <k.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{k.label}</div>
                  <div className="text-2xl md:text-3xl font-black leading-none tabular-nums">{k.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CUISINE MENU ============ */}
      <section id="menu" className="bg-[#fff9f2] py-14 md:py-20 scroll-mt-32" data-testid="cafeteria-menu">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-black mb-2">Today&rsquo;s Menu</div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Pick a mood. <span className="text-red-600">Pick a flavour.</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm md:text-base">Prices are indicative &middot; combos, thalis and season specials rotate weekly.</p>
          </div>

          {/* Tabs */}
          <div className="mt-8 md:mt-10 overflow-x-auto -mx-4 px-4">
            <div className="flex items-center gap-2 min-w-max justify-center">
              {cuisineKeys.map((c) => {
                const isActive = active === c;
                return (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-black uppercase tracking-widest whitespace-nowrap transition-all border-2 ${
                      isActive
                        ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-300 scale-105"
                        : "bg-white border-slate-200 text-slate-700 hover:border-red-300"
                    }`}
                    data-testid={`cafeteria-tab-${c.toLowerCase().replace(/\s+|&/g, "-")}`}
                  >
                    <span className="text-lg">{CUISINES[c].emoji}</span> {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Menu items */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {CUISINES[active].items.map((it, i) => (
              <div
                key={it.name}
                className="group relative rounded-2xl bg-white border border-slate-100 p-5 md:p-6 hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${CUISINES[active].accent} opacity-30 group-hover:opacity-50 transition-opacity blur-2xl`} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-3xl">{CUISINES[active].emoji}</div>
                      <div className="mt-3 font-black text-slate-900 text-lg leading-tight">{it.name}</div>
                    </div>
                    <div className={`text-2xl md:text-3xl font-black tabular-nums bg-gradient-to-br ${CUISINES[active].accent} bg-clip-text text-transparent`}>
                      {it.price}
                    </div>
                  </div>
                  {it.tag && (
                    <div className="mt-4 inline-flex items-center gap-1.5 bg-slate-900 text-white text-[10px] uppercase tracking-widest font-black px-2.5 py-1 rounded-full">
                      <Sparkles className="w-3 h-3 text-yellow-400" /> {it.tag}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VIBES / VALUES ============ */}
      <section className="bg-white py-14 md:py-20" data-testid="cafeteria-vibes">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-8 md:mb-12">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-black mb-2">More than a canteen</div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Where <span className="text-red-600">friendships</span><br />
              get their calories.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Soup,      title: "Chef-led kitchens",     copy: "Experienced chefs curate seasonal menus with a taste + nutrition focus." },
              { icon: BadgeCheck,title: "Hygiene first",          copy: "FSSAI-certified vendors, gloves & caps, weekly deep cleaning + audits." },
              { icon: Sandwich,  title: "Student combos",         copy: "Thoughtful ₹49–₹149 combos so your wallet never says no." },
              { icon: Coffee,    title: "Late-night chai",        copy: "Wi-Fi, charging points and quiet corners for late-night grinds." },
              { icon: Cookie,    title: "Birthday specials",      copy: "Free brownies + a mini-cake surprise on your birthday. Yes, really." },
              { icon: IceCream,  title: "Vegan / Jain friendly",  copy: "Special-diet options at the main food court — just ask." },
              { icon: Heart,     title: "Food committee",         copy: "Rotating student committee gives feedback on menu, price & quality." },
              { icon: Sparkles,  title: "Festival menus",         copy: "Diwali, Lohri, Christmas & Eid special limited-edition menus." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center mb-3">
                  <v.icon className="w-5 h-5" />
                </div>
                <div className="font-black text-slate-900 text-base">{v.title}</div>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FUN CTA ============ */}
      <section className="bg-gradient-to-br from-orange-500 via-red-600 to-rose-600 text-white py-14 md:py-20 relative overflow-hidden" data-testid="cafeteria-cta">
        <div className="absolute -top-16 -right-16 text-[280px] opacity-10 select-none rotate-12">🍕</div>
        <div className="absolute -bottom-24 -left-16 text-[280px] opacity-10 select-none -rotate-12">🍩</div>
        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🍽️</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
            Hungry yet?<br />
            <span className="italic font-light">Come home to SSGI.</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/apply">
              <Button className="h-12 px-8 bg-white hover:bg-slate-100 text-red-700 font-black uppercase tracking-widest text-sm shadow-2xl" data-testid="cafeteria-apply-cta">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/campus-life">
              <Button variant="outline" className="h-12 px-6 bg-transparent border-white text-white hover:bg-white/10 hover:text-white font-black uppercase tracking-widest text-sm">
                <ChevronLeft className="w-4 h-4 mr-2" /> Campus Life
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Cafeteria;
