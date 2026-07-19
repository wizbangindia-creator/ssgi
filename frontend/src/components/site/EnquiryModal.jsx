import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { indianStates, disciplines, programsByDiscipline } from "@/mock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const EnquiryModal = ({ open, onClose }) => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    course: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.state || !form.course) {
      toast({
        title: "Missing details",
        description: "Please fill Name, Phone, State and Course.",
      });
      return;
    }
    // Persist locally for now (backend later)
    const existing = JSON.parse(localStorage.getItem("ssgi_enquiries") || "[]");
    existing.push({ ...form, submittedAt: new Date().toISOString() });
    localStorage.setItem("ssgi_enquiries", JSON.stringify(existing));
    setSubmitted(true);
    toast({
      title: "Enquiry received",
      description: "Our admissions team will get back to you soon.",
    });
  };

  const reset = () => {
    setForm({ name: "", email: "", phone: "", state: "", course: "" });
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={reset} />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">Enquire Now</h3>
            <p className="text-red-100 text-xs">Admissions 2026 &mdash; Talk to our counselors</p>
          </div>
          <button
            onClick={reset}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-9 h-9 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Thank you!</h4>
            <p className="text-slate-600 mt-2">
              Your enquiry has been received. Our admissions team will contact you within 24 hours.
            </p>
            <Button className="mt-5 bg-red-700 hover:bg-red-800 text-white" onClick={reset}>
              Close
            </Button>
          </div>
        ) : (
          <form className="p-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="10-digit mobile"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <Label>State *</Label>
              <Select value={form.state} onValueChange={(v) => setForm({ ...form, state: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {indianStates.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Discipline *</Label>
              <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v, program: "" })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a discipline" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {disciplines.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {form.course && (
              <div>
                <Label>Program *</Label>
                <Select value={form.program || ""} onValueChange={(v) => setForm({ ...form, program: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {(programsByDiscipline[form.course] || []).map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button type="submit" className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-6">
              <Send className="w-4 h-4 mr-2" /> Submit Enquiry
            </Button>
            <p className="text-[11px] text-slate-500 text-center">
              By submitting, you agree to be contacted by Sri Sai Group admissions team.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
