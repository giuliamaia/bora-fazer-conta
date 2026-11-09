import Image from "next/image";
import { Play } from "lucide-react";
import { site, videos } from "@/config/site";
import { Reveal } from "./Reveal";
import { TrackedLink } from "./TrackedLink";

export function Videos() {
  return (
    <section id="conteudos" className="board relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-widest text-chalk-yellow">conteúdos gratuitos</p>
          <h2 className="chalk-text mt-2 font-display text-5xl leading-none sm:text-7xl">
            A conta também acontece por aqui.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-chalk/90">
            Questões resolvidas passo a passo nos canais oficiais. Os vídeos abrem direto no YouTube.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <li key={v.id}>
              <Reveal delay={i * 0.08} className="h-full">
                <TrackedLink
                  href={v.url}
                  event="youtube_click"
                  eventProps={{ video: v.id }}
                  className="group block h-full overflow-hidden rounded-xl border-2 border-chalk/40 bg-board-dark/60 transition hover:-translate-y-1 hover:border-chalk-yellow/80"
                >
                  <div className="relative aspect-video overflow-hidden bg-board-dark">
                    <Image
                      src={v.thumbnail}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 360px, 90vw"
                      loading="lazy"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-black/20 transition group-hover:bg-black/5">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-chalk-yellow text-board-dark">
                        <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-chalk-red">{v.platform}</p>
                    <h3 className="mt-1 text-lg font-semibold leading-snug text-chalk">{v.title}</h3>
                    <span className="mt-3 inline-block font-semibold text-chalk-yellow">
                      <span className="chalk-underline">Assistir</span>
                      <span className="sr-only"> no YouTube: {v.title}</span>
                    </span>
                  </div>
                </TrackedLink>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <TrackedLink
            href={site.social.youtube}
            event="youtube_click"
            eventProps={{ local: "canal" }}
            className="rounded-full bg-chalk-yellow px-6 py-3 font-bold text-board-dark transition hover:brightness-110"
          >
            Ver vídeos no YouTube
          </TrackedLink>
          <TrackedLink
            href={site.social.instagram}
            event="instagram_click"
            eventProps={{ local: "conteudos" }}
            className="rounded-full border-2 border-chalk/70 px-6 py-3 font-semibold text-chalk transition hover:border-chalk-yellow hover:text-chalk-yellow"
          >
            Acompanhar no Instagram
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
