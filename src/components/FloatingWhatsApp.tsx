"use client";

import { whatsappUrl } from "@/config/site";
import { TrackedLink } from "./TrackedLink";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <TrackedLink
      href={whatsappUrl()}
      event="whatsapp_flutuante_click"
      aria-label="Falar com o Guilherme no WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] p-4 font-bold text-white shadow-lg transition hover:scale-105 sm:bottom-6 sm:right-6 sm:px-5 sm:py-3"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden sm:inline">Chamar no WhatsApp</span>
    </TrackedLink>
  );
}
