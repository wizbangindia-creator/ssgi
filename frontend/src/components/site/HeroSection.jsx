import React, { useState } from "react";
import { hero, heroPlacements, indianStates, disciplines, programsByDiscipline } from "@/mock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ChevronLeft, ChevronRight, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HeroSection = ({ onEnquire }) => {
  const { toast } = useToast();
  const [pIdx, setPIdx] = useState(0);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", state: "", discipline: "", program: "",
  });

  const p = heroPlacements[pIdx];

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.discipline || !form.program) {
      toast({ title: "Please fill required fields", description: "Name, Phone, Discipline & Program are required." });
      return;
    }
    const arr = JSON.parse(localStorage.getItem("ssgi_enquiries") || "[]");
    arr.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("ssgi_enquiries", JSON.stringify(arr));
    toast({ title: "Application submitted", description: "Our admissions team will contact you within 24 hours." });
    setForm({ name: "", email: "", phone: "", state: "", discipline: "", program: "" });
  };

  const programs = form.discipline ? programsByDiscipline[form.discipline] || [] : [];

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative background pattern (no photo) */}
      <div className="absolute inset-0 opacity-25"
           style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(220,38,38,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(220,38,38,0.25), transparent 50%)" }} />
      <div className="absolute inset-0 opacity-[0.06]"
           style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0 1px, transparent 1px 22px)" }} />

      <div className="relative max-w-[1400px] mx-auto px-4 py-10 sm:py-14 md:py-20 grid lg:grid-cols-12 gap-6 md:gap-8 items-center min-h-[540px] md:min-h-[620px]">
        {/* Left content */}
        <div className="lg:col-span-7">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            <span className="font-light italic text-white/85">Best</span> Educational{" "}
            <span className="text-red-500">Group</span>
            <br />
            <span className="font-extrabold">in Punjab (India)</span>
          </h1>
          <div className="w-16 md:w-24 h-1 bg-red-600 my-4 md:my-6" />
          <p className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-xl leading-relaxed">
            {hero.description}
          </p>
          <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3">
            <Button onClick={onEnquire} className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider px-5 md:px-6 py-5 md:py-6 text-xs md:text-sm rounded-md">
              {hero.cta} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white/60 text-white hover:bg-white hover:text-slate-900 font-bold uppercase tracking-wider px-5 md:px-6 py-5 md:py-6 text-xs md:text-sm">
              Explore Programmes
            </Button>
          </div>

          {/* Placement showcase */}
          <div className="mt-8 md:mt-10 flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setPIdx((v) => (v - 1 + heroPlacements.length) % heroPlacements.length)}
              aria-label="Previous placement"
              className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-4 md:pr-6 flex-1 max-w-md min-w-0">
              {/* Avatar placeholder */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full ring-2 ring-red-500 bg-slate-800 border border-white/10 flex items-center justify-center shrink-0">
                <User className="w-6 h-6 md:w-8 md:h-8 text-slate-400" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-red-300 font-bold truncate">{p.tag}</div>
                <div className="font-bold text-white text-sm md:text-base truncate">{p.name}</div>
                <div className="text-[11px] md:text-xs text-slate-300 truncate">{p.company}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-300">Package</div>
                <div className="text-base md:text-lg font-extrabold text-red-400">{p.package}</div>
              </div>
            </div>
            <button
              onClick={() => setPIdx((v) => (v + 1) % heroPlacements.length)}
              aria-label="Next placement"
              className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right registration card */}
        <div className="lg:col-span-5">
          <div className="bg-white text-slate-900 rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-white px-4 md:px-6 pt-5 md:pt-6 pb-3 text-center">
              <div className="text-[10px] md:text-[11px] uppercase tracking-widest text-slate-500 font-semibold">Apply Today For</div>
              <div className="text-base md:text-lg font-extrabold text-red-700 mt-0.5">SRI SAI GROUP OF INSTITUTES</div>
              <div className="inline-block bg-red-100 text-red-700 text-[10px] md:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm mt-2">
                Registration End Date: 15th July 2026
              </div>
            </div>
            <form onSubmit={submit} className="px-4 md:px-6 pb-5 md:pb-6 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input placeholder="Student Name*" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input placeholder="Student Email ID" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-1">
                  <span className="px-3 py-2 rounded-md border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">+91</span>
                  <Input placeholder="Mobile*" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="flex-1" />
                </div>
                <Select value={form.state} onValueChange={(v) => setForm({ ...form, state: v })}>
                  <SelectTrigger><SelectValue placeholder="Select State" /></SelectTrigger>
                  <SelectContent className="max-h-60">
                    {indianStates.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Select value={form.discipline} onValueChange={(v) => setForm({ ...form, discipline: v, program: "" })}>
                <SelectTrigger><SelectValue placeholder="Select Discipline*" /></SelectTrigger>
                <SelectContent className="max-h-60">
                  {disciplines.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={form.program} onValueChange={(v) => setForm({ ...form, program: v })} disabled={!form.discipline}>
                <SelectTrigger><SelectValue placeholder={form.discipline ? "Select Program*" : "Select Discipline First"} /></SelectTrigger>
                <SelectContent className="max-h-60">
                  {programs.map((p2) => <SelectItem key={p2} value={p2}>{p2}</SelectItem>)}
                </SelectContent>
              </Select>
              <div className="text-[10px] text-slate-500 leading-tight">
                By submitting this form, I agree to receive notifications from Sri Sai Group in the form of SMS/E-mail/Call.
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm py-5 md:py-6">
                Apply Now
              </Button>
              <div className="text-center text-xs text-slate-600">
                Already Registered? <a href="#login" className="text-red-600 font-semibold hover:underline">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
