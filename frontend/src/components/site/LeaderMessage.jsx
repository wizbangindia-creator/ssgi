import React from "react";
import { Quote, User } from "lucide-react";
import Placeholder from "./Placeholder";

// Reusable leadership profile section with placeholder photo + designation card + long-form message
const LeaderMessage = ({
  name,
  designation,
  eyebrow,
  headline,
  paragraphs = [],
  signOff = "",
  quickFacts = [],
}) => (
  <section className="py-14 md:py-20 bg-white">
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: portrait placeholder + info card */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
            <Placeholder
              icon={User}
              label={name}
              className="w-full aspect-[4/5]"
              rounded="rounded-none"
              variant="light"
            />
            <div className="p-5 md:p-6 bg-gradient-to-br from-slate-50 to-white">
              <div className="text-[10px] uppercase tracking-widest text-red-700 font-bold">SSGI Leadership</div>
              <div className="text-xl md:text-2xl font-extrabold text-slate-900 mt-1">{name}</div>
              <div className="text-sm md:text-base text-red-600 font-semibold">{designation}</div>

              {quickFacts.length > 0 && (
                <ul className="mt-4 pt-4 border-t border-slate-200 space-y-2">
                  {quickFacts.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </aside>

        {/* Right: message */}
        <article className="lg:col-span-8">
          {eyebrow && (
            <div className="text-[11px] uppercase tracking-widest text-red-700 font-bold mb-3">{eyebrow}</div>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {headline}
          </h2>
          <div className="w-16 md:w-24 h-1 bg-red-600 mt-4 md:mt-5 mb-6 md:mb-8 rounded-full" />

          <div className="relative">
            <Quote className="w-10 h-10 md:w-12 md:h-12 text-red-100 absolute -top-2 -left-2" />
            <div className="relative space-y-4 md:space-y-5 text-slate-700 text-sm md:text-base leading-relaxed pl-2 md:pl-4">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {signOff && (
            <div className="mt-8 md:mt-10 border-t border-slate-200 pt-5">
              <div className="italic text-slate-500 text-sm">{signOff}</div>
              <div className="mt-1 font-extrabold text-slate-900">{name}</div>
              <div className="text-red-600 font-semibold text-sm">{designation}</div>
            </div>
          )}
        </article>
      </div>
    </div>
  </section>
);

export default LeaderMessage;
