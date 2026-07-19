import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { indianStates } from "@/mock";
import { Send, CheckCircle2, Phone, MessageCircle } from "lucide-react";

/**
 * ProgramEnquiryForm — an inline "Quick Query" form embedded on every program page.
 * Auto-locks the program field to whatever page it's on.
 *
 * Props:
 *   program   – the current program (required, from data/programs.js)
 *   variant   – "compact" (sidebar) | "wide" (full section)
 */
const ProgramEnquiryForm = ({ program, variant = "compact" }) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.state) {
      toast({
        title: "A few required fields are empty",
        description: "Please fill Name, Phone and State to submit your query.",
      });
      return;
    }
    const payload = {
      ...form,
      program: program.name,
      programSlug: program.slug,
      discipline: program.discipline,
      submittedAt: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("ssgi_enquiries") || "[]");
    existing.push(payload);
    localStorage.setItem("ssgi_enquiries", JSON.stringify(existing));
    setSubmitted(true);
    toast({
      title: "Query received!",
      description: `Our admissions team will call about ${program.short} within 24 hours.`,
    });
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: "", phone: "", email: "", state: "", message: "" });
  };

  const isCompact = variant === "compact";

  if (submitted) {
    return (
      <div
        className={`rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white ${
          isCompact ? "" : "max-w-2xl mx-auto"
        }`}
        data-testid="program-enquiry-success"
      >
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-4 text-white">
          <div className="text-[10px] uppercase tracking-widest font-bold opacity-90">Query received</div>
          <div className="text-lg font-extrabold leading-tight">We&rsquo;ll be in touch shortly.</div>
        </div>
        <div className="p-6 md:p-8 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h4 className="text-lg md:text-xl font-bold text-slate-900">Thank you, {form.name}!</h4>
          <p className="mt-2 text-slate-600 text-sm md:text-[15px]">
            Our admissions counsellor will call <strong>{form.phone}</strong> within 24 hours regarding{" "}
            <strong>{program.short}</strong>.
          </p>
          <Button className="mt-5 bg-red-700 hover:bg-red-800 text-white" onClick={reset} data-testid="program-enquiry-reset">
            Send another query
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white ${
        isCompact ? "" : "max-w-2xl mx-auto"
      }`}
      data-testid={`program-enquiry-${variant}`}
    >
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 px-5 py-4 text-white">
        <div className="text-[10px] uppercase tracking-widest font-bold opacity-90">Quick Query · Admissions 2026</div>
        <div className="text-lg font-extrabold leading-tight">Ask about {program.short}</div>
        <div className="text-[11px] opacity-90 mt-0.5">
          Locked to this programme &middot; response within 24 hours
        </div>
      </div>

      <form className={`p-5 ${isCompact ? "space-y-3" : "md:p-6 space-y-3.5"}`} onSubmit={handleSubmit}>
        {/* Locked program field */}
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Programme</div>
          <div className="text-sm font-extrabold text-slate-900 leading-tight">{program.name}</div>
          <div className="text-[11px] text-slate-500 mt-0.5">{program.discipline} · {program.duration.split(" (")[0]}</div>
        </div>

        <div>
          <Label htmlFor={`pq-name-${program.slug}-${variant}`} className="text-slate-700 text-xs font-bold uppercase tracking-wider">
            Full Name *
          </Label>
          <Input
            id={`pq-name-${program.slug}-${variant}`}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Rahul Sharma"
            className="h-11"
            required
            data-testid={`program-enquiry-name-${variant}`}
          />
        </div>

        <div className={isCompact ? "" : "grid grid-cols-2 gap-3"}>
          <div className={isCompact ? "" : ""}>
            <Label htmlFor={`pq-phone-${program.slug}-${variant}`} className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Mobile *
            </Label>
            <Input
              id={`pq-phone-${program.slug}-${variant}`}
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="10-digit number"
              className="h-11"
              required
              data-testid={`program-enquiry-phone-${variant}`}
            />
          </div>
          {!isCompact && (
            <div>
              <Label htmlFor={`pq-email-${program.slug}-${variant}`} className="text-slate-700 text-xs font-bold uppercase tracking-wider">
                Email
              </Label>
              <Input
                id={`pq-email-${program.slug}-${variant}`}
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
                className="h-11"
                data-testid={`program-enquiry-email-${variant}`}
              />
            </div>
          )}
        </div>

        {isCompact && (
          <div>
            <Label htmlFor={`pq-email-c-${program.slug}`} className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Email
            </Label>
            <Input
              id={`pq-email-c-${program.slug}`}
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
              className="h-11"
              data-testid="program-enquiry-email-compact"
            />
          </div>
        )}

        <div>
          <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">Home State *</Label>
          <Select value={form.state} onValueChange={(v) => setForm({ ...form, state: v })}>
            <SelectTrigger className="h-11" data-testid={`program-enquiry-state-${variant}`}>
              <SelectValue placeholder="Select your state" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {indianStates.map((st) => (
                <SelectItem key={st} value={st}>{st}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {!isCompact && (
          <div>
            <Label htmlFor={`pq-msg-${program.slug}`} className="text-slate-700 text-xs font-bold uppercase tracking-wider">
              Your question (optional)
            </Label>
            <textarea
              id={`pq-msg-${program.slug}`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={`e.g. What is the eligibility for ${program.short}? Are hostels available?`}
              rows={3}
              className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              data-testid="program-enquiry-message"
            />
          </div>
        )}

        <Button
          type="submit"
          className="w-full h-11 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold uppercase tracking-wider text-sm shadow-lg shadow-red-800/30"
          data-testid={`program-enquiry-submit-${variant}`}
        >
          <Send className="w-4 h-4 mr-2" /> Send Query
        </Button>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <a href="tel:18001218427" className="text-center rounded-lg border border-slate-200 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors">
            <Phone className="w-3.5 h-3.5 inline mr-1" /> Call
          </a>
          <a href="https://wa.me/919418001818" target="_blank" rel="noreferrer" className="text-center rounded-lg border border-emerald-200 bg-emerald-50 py-2.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-colors">
            <MessageCircle className="w-3.5 h-3.5 inline mr-1" /> WhatsApp
          </a>
        </div>

        <p className="text-[11px] text-slate-500 text-center leading-relaxed">
          By submitting, you agree to be contacted by SSGI Admissions.
        </p>
      </form>
    </div>
  );
};

export default ProgramEnquiryForm;
