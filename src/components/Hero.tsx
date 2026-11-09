import { ArrowDown } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { TrackedLink } from "./TrackedLink";
import { TeacherPhoto } from "./TeacherPhoto";
import { ChalkUnderline, CircleDoodle, Formula, HandArrow, ParabolaGraph, RightTriangle } from "./Doodles";

export function Hero() {
  return (
    <section id="topo" className="board smudge relative overflow-hidden">
      {/* rabiscos de fundo (decorativos) */}
      <ParabolaGraph className="absolute -left-8 -bottom-16 hidden w-44 text-chalk/35 md:block" />
      <RightTriangle className="absolute right-[44%] top-8 hidden w-32 rotate-6 text-chalk/30 lg:block" />
      <CircleDoodle className="absolute -right-6 top-28 hidden w-36 text-chalk/25 xl:block" />
      <Formula hover="3² + 4² = 5²" className="absolute left-[6%] top-10 hidden -rotate-6 text-lg text-chalk/35 md:block">a² + b² = c²</Formula>
      <Formula hover="6 V = 2 Ω · 3 A" className="absolute bottom-10 right-[8%] hidden rotate-3 text-lg text-chalk/35 md:block">V = R · i</Formula>
      <Formula hover="10 N = 2 kg · 5 m/s²" className="absolute bottom-24 left-[42%] hidden -rotate-3 text-base text-chalk/30 lg:block">F = m · a</Formula>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:pb-24 lg:pt-20">
        <div>
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-chalk-yellow">
            Professor Guilherme Oliveira · Matemática e Física
          </p>

          <h1 className="chalk-text font-display text-[3.4rem] leading-[0.95] sm:text-8xl lg:text-[6.5rem]">
            <span className="write inline-block" style={{ ["--dur" as string]: "1.5s", ["--steps" as string]: 17 }}>
              Bora Fazer Conta<span className="text-chalk-yellow">!</span>
            </span>
          </h1>
          <ChalkUnderline className="mt-1 h-4 w-64 sm:w-96" />

          <p className="mt-6 max-w-xl font-display text-3xl leading-tight text-chalk-yellow sm:text-4xl">
            Matemática e Física sem fingir que tudo é óbvio.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-chalk/90">
            Chega de decorar fórmulas sem entender de onde elas vêm. Aqui, a ideia é aprender a pensar, conectar
            conceitos e resolver questões com mais confiança.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <TrackedLink
              href={whatsappUrl()}
              event="cta_principal_click"
              className="group inline-flex items-center gap-2 rounded-full bg-chalk-yellow px-7 py-3.5 text-lg font-bold text-board-dark shadow-[0_4px_0_#a8873a] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_#a8873a] active:translate-y-0.5 active:shadow-[0_1px_0_#a8873a]"
            >
              Bora aprender?
            </TrackedLink>
            <a
              href="#professor"
              className="inline-flex items-center gap-2 rounded-full border-2 border-chalk/70 px-6 py-3 text-lg font-semibold text-chalk transition hover:border-chalk-yellow hover:text-chalk-yellow"
            >
              Conhecer o professor <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-10 font-mono text-sm text-chalk/60">// menos decoreba. mais raciocínio.</p>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <span
            aria-hidden="true"
            className="absolute -top-11 left-0 z-10 hidden -rotate-3 font-display text-2xl text-chalk-yellow lg:block"
          >
            oi, prazer, sou o Gui!
          </span>
          <HandArrow className="absolute -top-9 left-64 z-10 hidden w-16 rotate-[8deg] text-chalk-yellow lg:block" />
          <TeacherPhoto priority />
        </div>
      </div>
    </section>
  );
}
