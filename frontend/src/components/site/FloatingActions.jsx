import React from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { contactInfo } from "@/mock";

const FloatingActions = ({ onEnquire }) => (
  <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-2.5">
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:bg-slate-100 hover:text-red-600 flex items-center justify-center transition-colors"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
    <a
      href={`tel:${contactInfo.phone}`}
      aria-label="Call"
      className="w-11 h-11 rounded-full bg-red-600 hover:bg-red-700 shadow-lg text-white flex items-center justify-center transition-transform hover:scale-105"
    >
      <Phone className="w-5 h-5" />
    </a>
    <a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg text-white flex items-center justify-center transition-transform hover:scale-105"
    >
      <MessageCircle className="w-5 h-5" />
    </a>
    <button
      onClick={onEnquire}
      className="px-4 h-11 rounded-full bg-red-600 hover:bg-red-700 shadow-lg text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center transition-transform hover:scale-105"
    >
      Talk to us
    </button>
  </div>
);

export default FloatingActions;
