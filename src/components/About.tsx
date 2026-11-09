import { site, whatsappUrl } from "@/config/site";
import { Reveal } from "./Reveal";
import { TeacherPhoto } from "./TeacherPhoto";
import { TrackedLink } from "./TrackedLink";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Formula, SineGraph } from "./Doodles";

export function About() {
  return (
    <section id="professor" className="board smudge relative overflow-hidden py-20 sm:py-28">
      <SineGraph className="absolute -right-10 bottom-4 hidden w-72 text-chalk/30 md:block" />
      <Formula hover="e^(iπ) = −1" className="absolute left-[4%] top-8 hidden -rotate-3 text-lg text-chalk/30 md:block">
        e^(iπ) + 1 = 0
      </Formula>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <TeacherPhoto />
            <p aria-hidden="true" className="mt-5 text-center font-display text-3xl text-chalk-yellow -rotate-1">
              {site.teacher}
            </p>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.1}>
          <p className="font-mono text-sm uppercase tracking-widest text-chalk-yellow">o professor</p>
          <h2 className="chalk-text mt-2 font-display text-5xl leading-none sm:text-7xl">Quem está por trás da lousa?</h2>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-chalk/90">
            <p>
              Prazer, eu sou Guilherme! Professor de Matemática e Física e a pessoa por trás do Bora Fazer Conta.
              Acredito que aprender fica muito mais interessante quando a gente entende o raciocínio por trás das fórmulas.
            </p>
            <p>
              Minha caminhada passa pela Engenharia Elétrica e pela Ciência de Dados, e é desse olhar que vem a vontade de
              explicar o &ldquo;porquê&rdquo; das contas, sem fingir que tudo é óbvio.
            </p>
          </div>

          <TrackedLink
            href={whatsappUrl()}
            event="cta_professor_click"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-chalk-yellow px-6 py-3 text-lg font-bold text-board-dark shadow-[0_4px_0_#a8873a] transition hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <WhatsAppIcon /> Conversar com o Guilherme
          </TrackedLink>
        </Reveal>
      </div>
    </section>
  );
}
