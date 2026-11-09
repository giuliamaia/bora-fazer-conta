import { Reveal } from "./Reveal";
import { FaqList } from "./Faq";

export function FaqSection() {
  return (
    <section id="duvidas" className="board-dark py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-chalk-yellow">perguntas frequentes</p>
          <h2 className="chalk-text mt-2 mb-10 font-display text-5xl leading-none sm:text-7xl">Ficou alguma dúvida?</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <FaqList />
        </Reveal>
      </div>
    </section>
  );
}
