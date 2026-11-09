/**
 * Eventos prontos para qualquer ferramenta de analytics.
 * Dispara em: window.dataLayer (GTM), gtag (GA4), plausible e um CustomEvent
 * "bfc:track" para integrações próprias. Nenhum evento representa matrícula:
 * são apenas cliques de interesse.
 */
export type TrackEvent =
  | "cta_principal_click"
  | "whatsapp_flutuante_click"
  | "cta_header_click"
  | "cta_professor_click"
  | "servico_card_click"
  | "youtube_click"
  | "instagram_click"
  | "cta_final_click";

type Win = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
  plausible?: (name: string, opts?: { props: Record<string, unknown> }) => void;
};

export function track(event: TrackEvent, props: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as Win;
  try {
    w.dataLayer?.push({ event, ...props });
    w.gtag?.("event", event, props);
    w.plausible?.(event, { props });
    window.dispatchEvent(new CustomEvent("bfc:track", { detail: { event, ...props } }));
  } catch {
    /* analytics nunca deve quebrar a página */
  }
}
