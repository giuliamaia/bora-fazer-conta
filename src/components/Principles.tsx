import { Reveal } from "./Reveal";
import { HandArrow, SolvedEquation } from "./Doodles";

const principles = [
  { n: "01", title: "Entender antes de decorar.", text: "A fórmula vem depois de saber de onde ela nasce." },
  { n: "02", title: "Aprender passo a passo.", text: "Uma etapa por vez, sem pular a parte que parecia óbvia." },
  { n: "03", title: "Desenvolver o raciocínio.", text: "Para resolver a questão de hoje e também a de amanhã." },
];

export function Principles() {
  return (
    <section id="metodo" className="board-dark relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-widest text-chalk-yellow">o método</p>
          <h2 className="chalk-text mt-2 font-display text-5xl leading-none sm:text-7xl">
            Não entendeu? A gente faz a conta de novo.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-chalk/90">
            Aprender Matemática e Física não deveria depender de fingir que você entendeu tudo na primeira explicação.
            Cada dúvida é uma oportunidade de construir o raciocínio.
          </p>
        </Reveal>

        {/* folha de caderno com os três princípios */}
        <Reveal className="relative mt-14" delay={0.1}>
          <div className="notebook relative -rotate-1 rounded-sm px-6 py-10 pl-[4.6rem] shadow-[0_18px_40px_rgba(0,0,0,0.4)] sm:px-10 sm:pl-[5.4rem]">
            <ul className="space-y-[1.9rem]">
              {principles.map((p) => (
                <li key={p.n} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                  <span className="font-mono text-sm text-chalk-red">{p.n}</span>
                  <h3 className="font-display text-3xl leading-tight text-board sm:text-4xl">{p.title}</h3>
                  <p className="text-base text-graphite/80 sm:ml-auto sm:max-w-xs">{p.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 rotate-1 font-display text-2xl text-chalk-red">
              ↳ dúvida boa é dúvida perguntada!
            </p>
          </div>
          <HandArrow className="absolute -bottom-10 right-2 hidden w-24 rotate-12 text-chalk-yellow sm:block" />
        </Reveal>

        <Reveal className="mt-16" delay={0.15}>
          <SolvedEquation />
          <p className="mt-2 font-mono text-sm text-chalk/60">// conferindo: 2·4 + 3 = 11 ✓</p>
        </Reveal>
      </div>
    </section>
  );
}
