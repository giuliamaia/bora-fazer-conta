import { whatsappUrl } from "@/config/site";
import { Reveal } from "./Reveal";
import { TrackedLink } from "./TrackedLink";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { CircleDoodle, Formula, ParabolaGraph, RightTriangle, SolvedEquation } from "./Doodles";

export function FinalCta() {
  return (
    <section id="contato" className="board smudge relative overflow-hidden py-24 sm:py-32">
      <ParabolaGraph className="absolute left-2 top-6 hidden w-40 text-chalk/25 md:block" />
      <RightTriangle className="absolute bottom-8 right-6 hidden w-36 -rotate-6 text-chalk/25 md:block" />
      <CircleDoodle className="absolute right-[30%] top-6 hidden w-28 text-chalk/20 lg:block" />
      <Formula hover="x² − 5x + 6 = 0 → x = 2 ou x = 3" className="absolute bottom-10 left-[8%] hidden -rotate-2 text-lg text-chalk/30 md:block">
        x = (−b ± √(b² − 4ac)) / 2a
      </Formula>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="chalk-text font-display text-6xl leading-[0.95] sm:text-8xl">A conta não tá fechando?</h2>
          <p className="mt-3 font-display text-4xl text-chalk-yellow sm:text-5xl">Bora resolver isso juntos.</p>
          <p className="mx-auto mt-6 max-w-xl text-lg text-chalk/90">
            Entre em contato e descubra como podemos trabalhar suas dúvidas de Matemática e Física.
          </p>
          <TrackedLink
            href={whatsappUrl()}
            event="cta_final_click"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-chalk-yellow px-8 py-4 text-lg font-bold text-board-dark shadow-[0_5px_0_#a8873a] transition hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none sm:text-xl"
          >
            <WhatsAppIcon className="h-6 w-6" /> Chamar o Guilherme no WhatsApp
          </TrackedLink>
          <div className="mt-12 flex justify-center">
            <SolvedEquation />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
