import { site, whatsappUrl } from "@/config/site";
import { TrackedLink } from "./TrackedLink";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-chalk/10 bg-board-dark/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#topo" className="font-display text-2xl leading-none text-chalk">
          Bora Fazer Conta<span className="text-chalk-yellow">!</span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 font-mono text-sm text-chalk/80 md:flex">
          <a href="#professor" className="hover:text-chalk-yellow">professor</a>
          <a href="#aulas" className="hover:text-chalk-yellow">aulas</a>
          <a href="#conteudos" className="hover:text-chalk-yellow">conteúdos</a>
          <a href="#duvidas" className="hover:text-chalk-yellow">dúvidas</a>
        </nav>
        <TrackedLink
          href={whatsappUrl()}
          event="cta_header_click"
          className="inline-flex items-center gap-2 rounded-full bg-chalk-yellow px-4 py-2 text-sm font-bold text-board-dark transition hover:brightness-110"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span>WhatsApp</span>
          <span className="sr-only"> — falar com {site.teacher}</span>
        </TrackedLink>
      </div>
    </header>
  );
}
