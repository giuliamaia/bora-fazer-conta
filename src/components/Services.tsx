import { ClipboardCheck, Sigma, UserRound, Zap, type LucideIcon } from "lucide-react";
import { services, whatsappUrl } from "@/config/site";
import { Reveal } from "./Reveal";
import { TrackedLink } from "./TrackedLink";
import { CircleDoodle, ParabolaGraph, RightTriangle } from "./Doodles";

const icons: Record<string, LucideIcon> = {
  matematica: Sigma,
  fisica: Zap,
  provas: ClipboardCheck,
  personalizadas: UserRound,
};

const sketches: Record<string, React.ReactNode> = {
  matematica: <ParabolaGraph className="h-24 w-24 text-chalk/70" />,
  fisica: <CircleDoodle className="h-24 w-24 text-chalk/70" />,
  provas: <RightTriangle className="h-24 w-24 text-chalk/70" />,
  personalizadas: (
    <svg viewBox="0 0 120 80" className="h-24 w-24 text-chalk/70" aria-hidden="true">
      <g className="chalk-stroke">
        <path d="M10 66 H110 M10 66 V10" />
        <path d="M16 56 L40 44 L62 48 L86 26 L106 18" style={{ stroke: "var(--color-chalk-yellow)" }} />
      </g>
    </svg>
  ),
};

export function Services() {
  return (
    <section id="aulas" className="board-dark relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-widest text-chalk-yellow">como posso te ajudar?</p>
          <h2 className="chalk-text mt-2 font-display text-5xl leading-none sm:text-7xl">
            Qual conta a gente vai resolver hoje?
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = icons[s.key];
            return (
              <li key={s.key}>
                <Reveal delay={i * 0.08} className="h-full">
                  <article className="group relative flex h-full flex-col rounded-xl border-2 border-chalk/40 bg-board/70 p-6 transition hover:-translate-y-1 hover:border-chalk-yellow/80">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Icon className="h-7 w-7 text-chalk-yellow" aria-hidden="true" />
                        <h3 className="mt-3 inline-block font-display text-3xl text-chalk">
                          <span className="chalk-underline pb-1">{s.title}</span>
                        </h3>
                      </div>
                      <div className="shrink-0">{sketches[s.key]}</div>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-chalk/85">{s.text}</p>
                    <TrackedLink
                      href={whatsappUrl(s.message)}
                      event="servico_card_click"
                      eventProps={{ servico: s.key }}
                      className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-chalk-yellow hover:underline"
                    >
                      Perguntar sobre {s.title.toLowerCase()} <span aria-hidden="true">→</span>
                    </TrackedLink>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 font-mono text-sm text-chalk/60">
          // formatos, níveis e valores: combine direto no WhatsApp.
        </p>
      </div>
    </section>
  );
}
