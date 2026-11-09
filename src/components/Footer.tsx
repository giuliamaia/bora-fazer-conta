import { Instagram, Youtube } from "lucide-react";
import { site } from "@/config/site";
import { TrackedLink } from "./TrackedLink";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  const year = new Date().getFullYear();
  const link = "inline-flex items-center gap-2 text-chalk/80 hover:text-chalk-yellow";
  return (
    <footer className="board-dark border-t border-chalk/15 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl text-chalk">
            {site.brand}<span className="text-chalk-yellow">!</span>
          </p>
          <p className="mt-1 text-chalk/75">{site.tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <TrackedLink href={site.social.instagram} event="instagram_click" eventProps={{ local: "rodape" }} className={link}>
              <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href={site.social.youtube} event="youtube_click" eventProps={{ local: "rodape" }} className={link}>
              <Youtube className="h-4 w-4" aria-hidden="true" /> YouTube
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href={site.social.whatsapp} event="cta_final_click" eventProps={{ local: "rodape" }} className={link}>
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </TrackedLink>
          </li>
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 font-mono text-xs text-chalk/50 sm:px-6">
        © {year} {site.brand} · {site.teacher}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
