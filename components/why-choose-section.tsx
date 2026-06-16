"use client";

import { useState } from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast Internet",
    desc: "Stream, work, and browse without interruption — every day.",
    stat: "Up to 40 Mbps",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Flexible Plans",
    desc: "Choose what works for your home and budget — no lock-ins.",
    stat: "From Ksh 1,100",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Local Support",
    desc: "A real team nearby, ready when you need help — not a call centre.",
    stat: "Always nearby",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Secure & Reliable",
    desc: "Safe browsing baked in — protect every device on your network.",
    stat: "All devices covered",
  },
];

export default function WhyChoose() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-[#f0f5f1] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-[#1a7a3c] text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            <span className="block w-5 h-px bg-[#1a7a3c]" />
            Why Superfy
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0d1f12] leading-tight tracking-tight">
            More than internet.<br />
            <span className="text-[#1a7a3c]">Peace of mind.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-[#4a5e4e] text-sm sm:text-base leading-relaxed max-w-md">
            Reliability, speed, and local care — built into every plan we offer.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#c8d8cb] border border-[#c8d8cb] rounded-lg sm:rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <div
              key={i}
              className={[
                "relative bg-white p-4 sm:p-6 lg:p-8 transition-colors duration-200 cursor-default",
                "group",
                // top-border between rows
                i >= 2 ? "border-t border-[#c8d8cb]" : "",
                hovered === i ? "bg-[#f7fdf8]" : "",
              ].join(" ")}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Left accent bar */}
              <span
                className={[
                  "absolute left-0 top-0 bottom-0 w-[3px] bg-[#1a7a3c] transition-transform duration-300 origin-bottom",
                  hovered === i ? "scale-y-100" : "scale-y-0",
                ].join(" ")}
              />

              {/* Icon */}
              <div
                className={[
                  "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1a7a3c] text-white mb-5 transition-transform duration-300",
                  hovered === i ? "scale-110 -rotate-3" : "",
                ].join(" ")}
              >
                {f.icon}
              </div>

              <h3 className="text-[#0d1f12] font-bold text-lg mb-1 tracking-tight">{f.title}</h3>
              <p className="text-[#4a5e4e] text-sm leading-relaxed">{f.desc}</p>

              {/* Stat line */}
              <span className="block mt-5 pt-4 border-t border-[#d4e8d8] text-[#1a7a3c] text-xs font-semibold tracking-widest uppercase">
                {f.stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
