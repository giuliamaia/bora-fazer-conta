"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/config/site";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-chalk/25 border-y border-chalk/25">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={`faq-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-2xl text-chalk hover:text-chalk-yellow sm:text-3xl"
              >
                {item.q}
                <ChevronDown
                  className={`h-6 w-6 shrink-0 text-chalk-yellow transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-8 text-lg leading-relaxed text-chalk/85">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
