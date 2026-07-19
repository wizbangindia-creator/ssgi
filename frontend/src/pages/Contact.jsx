import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/site/PageLayout";
import { contactInfo } from "@/mock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  Home,
  Bus,
  ShieldAlert,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const departments = [
  { icon: GraduationCap, name: "Admissions Cell",       phone: contactInfo.helpline, email: "admissions@srisaigroup.edu.in", hours: "9 am – 6 pm, Mon–Sat" },
  { icon: Briefcase,     name: "Placement Cell",        phone: "+91 94180 01919",     email: "placements@srisaigroup.edu.in", hours: "10 am – 5 pm, Mon–Fri" },
  { icon: Home,          name: "Hostel Office",         phone: "+91 94180 01717",     email: "hostel@srisaigroup.edu.in",     hours: "8 am – 8 pm, All days" },
  { icon: Bus,           name: "Transport Office",      phone: "+91 94180 01616",     email: "transport@srisaigroup.edu.in",  hours: "7 am – 6 pm, Mon–Sat" },
  { icon: Users,         name: "Accounts / Finance",    phone: "+91 94180 01515",     email: "accounts@srisaigroup.edu.in",   hours: "10 am – 5 pm, Mon–Fri" },
  { icon: ShieldAlert,   name: "Anti-Ragging Cell",     phone: "+91 94180 01818",     email: "antiragging@srisaigroup.edu.in",hours: "24×7 during session" },
];

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General Enquiry", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast({ title: "Please fill Name, Phone and Message." });
      return;
    }
    const list = JSON.parse(localStorage.getItem("ssgi_contact_messages") || "[]");
    list.push({ ...form, submittedAt: new Date().toISOString() });
    localStorage.setItem("ssgi_contact_messages", JSON.stringify(list));
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll respond within 24 hours." });
  };

  return (
    <PageLayout>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(1000px 500px at 15% -10%, rgba(239,68,68,0.35), transparent 60%), radial-gradient(900px 500px at 100% 10%, rgba(249,115,22,0.25), transparent 60%), linear-gradient(180deg, #0b1220 0%, #0f172a 100%)",
        }}
        data-testid="contact-hero"
      >
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 pt-12 md:pt-20 pb-14 md:pb-20">
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link to="/" className="hover:text-red-300">Home</Link>
            <span className="text-slate-500">/</span>
            <span className="text-white font-semibold">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 text-red-200 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> We&rsquo;re here to help
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white">
              Let&rsquo;s talk about your <span className="text-red-500">future</span>.
            </h1>
            <p className="mt-5 md:mt-6 text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Have a question about admissions, scholarships, hostel, fees or careers at SSGI? Reach out via phone,
              WhatsApp, email or the form below &mdash; our team responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* PRIMARY CONTACT CARDS */}
      <section className="bg-white -mt-8 md:-mt-14 relative z-10" data-testid="contact-cards">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon: Phone,    accent: "from-red-600 to-rose-600",     title: "Call Admissions", value: contactInfo.helpline, sub: "Toll-Free · Mon–Sat 9 am–6 pm", href: `tel:${contactInfo.helpline.replace(/\s/g, "")}` },
              { icon: MessageCircle, accent: "from-emerald-500 to-teal-600", title: "WhatsApp", value: "+91 94180 01818", sub: "Fastest response — chat instantly", href: "https://wa.me/919418001818" },
              { icon: Mail,     accent: "from-sky-500 to-indigo-600",   title: "Email Us",       value: contactInfo.email, sub: "We reply within 24 hours", href: `mailto:${contactInfo.email}` },
              { icon: MapPin,   accent: "from-amber-500 to-orange-600", title: "Visit Campus",   value: "Badhani, Pathankot", sub: contactInfo.address, href: "https://www.google.com/maps?q=Sri+Sai+Group+of+Institutes+Pathankot" },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-5 md:p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all overflow-hidden relative"
                data-testid={`contact-card-${c.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${c.accent}`} />
                <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md mb-4">
                  <c.icon className="w-5 h-5" />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{c.title}</div>
                <div className="mt-1 font-extrabold text-slate-900 text-base leading-snug">{c.value}</div>
                <div className="mt-1 text-xs text-slate-500 leading-relaxed">{c.sub}</div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Reach out</span>
                  <ArrowRight className="w-4 h-4 text-red-700 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="bg-white py-14 md:py-20" data-testid="contact-form-section">
        <div className="max-w-[1400px] mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left — address & map */}
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Visit Us</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Sri Sai Group of Institutes
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />

            <div className="mt-6 space-y-4 text-slate-700 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Campus Address</div>
                  <div>{contactInfo.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Admission Helpline</div>
                  <div>{contactInfo.helpline} &nbsp;·&nbsp; {contactInfo.phone}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Email</div>
                  <div>{contactInfo.email}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">Office Hours</div>
                  <div>Monday – Saturday, 9:00 am – 6:00 pm (Sunday closed)</div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <iframe
                title="SSGI Campus Location"
                src="https://www.google.com/maps?q=Sri+Sai+Group+of+Institutes+Pathankot&output=embed"
                width="100%"
                height="340"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="contact-map"
              />
            </div>

            {/* Socials */}
            <div className="mt-6">
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">Follow Us</div>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Facebook,  label: "Facebook",  href: "https://facebook.com/srisaigroup",  color: "hover:bg-blue-600" },
                  { icon: Instagram, label: "Instagram", href: "https://instagram.com/srisaigroup", color: "hover:bg-pink-600" },
                  { icon: Youtube,   label: "YouTube",   href: "https://youtube.com/srisaigroup",   color: "hover:bg-red-600" },
                  { icon: Twitter,   label: "Twitter",   href: "https://twitter.com/srisaigroup",   color: "hover:bg-sky-500" },
                  { icon: Linkedin,  label: "LinkedIn",  href: "https://linkedin.com/school/srisaigroup", color: "hover:bg-blue-700" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-lg border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:text-white transition-colors ${s.color}`} aria-label={s.label}>
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — message form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 px-6 py-5 text-white">
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-90">Send us a message</div>
                <div className="text-xl font-extrabold leading-tight">We&rsquo;d love to hear from you.</div>
                <div className="text-[11px] opacity-90 mt-0.5">Our team responds within 24 hours.</div>
              </div>

              {submitted ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Thanks, {form.name}!</h4>
                  <p className="text-slate-600 mt-2 text-sm">
                    Your message has been received. We&rsquo;ll get back to you on <strong>{form.phone}</strong> shortly.
                  </p>
                  <Button className="mt-5 bg-red-700 hover:bg-red-800 text-white" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "General Enquiry", message: "" }); }} data-testid="contact-reset">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form className="p-6 md:p-8 space-y-4" onSubmit={handleSubmit} data-testid="contact-form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="c-name" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Name *</Label>
                      <Input id="c-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="h-11" required data-testid="contact-name" />
                    </div>
                    <div>
                      <Label htmlFor="c-phone" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Phone *</Label>
                      <Input id="c-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit number" className="h-11" required data-testid="contact-phone" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="c-email" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Email</Label>
                      <Input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="h-11" data-testid="contact-email" />
                    </div>
                    <div>
                      <Label htmlFor="c-subject" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Subject</Label>
                      <select id="c-subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="mt-1 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" data-testid="contact-subject">
                        {["General Enquiry", "Admissions 2026", "Scholarships", "Hostel & Transport", "Placements", "Fees & Refunds", "Partnership", "Media / Press"].map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="c-msg" className="text-slate-700 text-xs font-bold uppercase tracking-wider">Message *</Label>
                    <textarea id="c-msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" rows={5} className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500" required data-testid="contact-message" />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider shadow-lg shadow-red-800/30" data-testid="contact-submit">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                  <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                    By submitting, you agree to be contacted by the SSGI team via SMS, email or call.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="bg-slate-50 py-14 md:py-20" data-testid="contact-departments">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-8 md:mb-10">
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-2">Department Directory</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Reach the right team, faster.
            </h2>
            <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {departments.map((d) => (
              <div key={d.name} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl transition-shadow" data-testid={`contact-dept-${d.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0"><d.icon className="w-5 h-5" /></div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-base">{d.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1"><Clock className="w-3 h-3" /> {d.hours}</div>
                  </div>
                </div>
                <a href={`tel:${d.phone.replace(/\s|-/g, "")}`} className="flex items-center gap-2 text-sm text-slate-700 hover:text-red-700"><Phone className="w-3.5 h-3.5 text-red-600" /> {d.phone}</a>
                <a href={`mailto:${d.email}`} className="flex items-center gap-2 text-sm text-slate-700 hover:text-red-700 mt-1"><Mail className="w-3.5 h-3.5 text-red-600" /> <span className="break-all">{d.email}</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <Building2 className="w-10 h-10 md:w-12 md:h-12 text-red-500 mx-auto" />
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight">Come see us at Pathankot.</h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Book a campus tour or a personal counselling session with our admissions team.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link to="/apply">
              <Button className="h-12 px-8 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider" data-testid="contact-apply-cta">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="https://wa.me/919418001818" target="_blank" rel="noreferrer">
              <Button className="h-12 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
