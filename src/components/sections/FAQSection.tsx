"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-content max-w-3xl mx-auto">
        <SectionHeader
          label="คำถามที่พบบ่อย"
          title="FAQ"
          subtitle="คำตอบสำหรับคำถามที่ลูกค้าถามบ่อย"
          center
        />

        <div className="mt-12 divide-y divide-warm-200 border border-warm-200">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-navy text-sm sm:text-base">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-gold shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-warm-700 leading-relaxed border-t border-warm-100 bg-warm-50">
                  <p className="pt-4">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
