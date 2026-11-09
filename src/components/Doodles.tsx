import type { CSSProperties } from "react";

/** Filtro SVG que dá aspecto irregular de giz aos traços. Renderizar uma vez no layout. */
export function ChalkDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <filter id="chalk-rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" />
        </filter>
      </defs>
    </svg>
  );
}

type P = { className?: string; style?: CSSProperties };

/** Pontos de uma função em coordenadas SVG (origem no centro, escala em px por unidade). */
function plot(fn: (x: number) => number, x0: number, x1: number, cx: number, cy: number, sx: number, sy: number, n = 48) {
  return Array.from({ length: n + 1 }, (_, i) => {
    const x = x0 + ((x1 - x0) * i) / n;
    return `${i === 0 ? "M" : "L"}${(cx + x * sx).toFixed(1)} ${(cy - fn(x) * sy).toFixed(1)}`;
  }).join(" ");
}

/** y = x² — parábola com vértice na origem. */
export function ParabolaGraph({ className, style }: P) {
  const d = plot((x) => x * x, -1.5, 1.5, 100, 110, 42, 42);
  return (
    <svg viewBox="0 0 200 200" className={`egg ${className ?? ""}`} style={style} aria-hidden="true">
      <g className="chalk-stroke" strokeWidth="2">
        <path d="M10 110 H190 M100 15 V190" />
        <path d="M184 105 L190 110 L184 115 M95 21 L100 15 L105 21" />
        <path d="M142 106 v8 M184 106 v8" strokeWidth="1.6" opacity="0.7" />
        <path d="M96 68 h8" strokeWidth="1.6" opacity="0.7" />
      </g>
      <path d={d} className="chalk-stroke draw" pathLength={1} style={{ stroke: "var(--color-chalk-yellow)", strokeWidth: 3 }} />
      <circle r="5" className="egg-dot" style={{ offsetPath: `path("${d}")` }} />
      <text x="150" y="40" fill="var(--color-chalk-yellow)" fontFamily="var(--font-mono)" fontSize="15">y = x²</text>
      <text x="104" y="125" fill="currentColor" fontFamily="var(--font-mono)" fontSize="10" opacity="0.8">0</text>
    </svg>
  );
}

/** y = sen(x) de −π a 2π (aprox.). */
export function SineGraph({ className, style }: P) {
  const d = plot(Math.sin, -Math.PI, 2 * Math.PI, 40, 60, 30, 34, 90);
  return (
    <svg viewBox="0 0 270 120" className={`egg ${className ?? ""}`} style={style} aria-hidden="true">
      <g className="chalk-stroke" strokeWidth="1.8">
        <path d="M6 60 H264 M40 8 V112" />
      </g>
      <path d={d} className="chalk-stroke" style={{ stroke: "var(--color-chalk-red)", strokeWidth: 2.6 }} />
      <circle r="5" className="egg-dot" style={{ offsetPath: `path("${d}")` }} />
      <text x="206" y="30" fill="var(--color-chalk-red)" fontFamily="var(--font-mono)" fontSize="13">y = sen(x)</text>
    </svg>
  );
}

/** Triângulo retângulo 3-4-5 (satisfaz 3² + 4² = 5²). */
export function RightTriangle({ className, style }: P) {
  return (
    <svg viewBox="0 0 220 170" className={`egg ${className ?? ""}`} style={style} aria-hidden="true">
      <g className="chalk-stroke">
        <path d="M20 140 H180 V20 Z" />
        <path d="M164 140 V124 H180" strokeWidth="1.8" />
      </g>
      <g fill="currentColor" fontFamily="var(--font-mono)" fontSize="15">
        <text x="96" y="160">4</text>
        <text x="190" y="86">3</text>
        <text x="84" y="70" fill="var(--color-chalk-yellow)">5</text>
      </g>
      <text x="12" y="24" className="egg-note" fill="var(--color-chalk-yellow)" fontFamily="var(--font-mono)" fontSize="14">9 + 16 = 25</text>
    </svg>
  );
}

/** Círculo com raio e a fórmula da área. */
export function CircleDoodle({ className, style }: P) {
  return (
    <svg viewBox="0 0 180 180" className={`egg ${className ?? ""}`} style={style} aria-hidden="true">
      <g className="chalk-stroke">
        <circle cx="90" cy="90" r="62" />
      </g>
      <g className="egg-spin">
        <path d="M90 90 L152 90" className="chalk-stroke" style={{ stroke: "var(--color-chalk-yellow)" }} />
        <text x="114" y="82" fill="var(--color-chalk-yellow)" fontFamily="var(--font-mono)" fontSize="15">r</text>
      </g>
      <circle cx="90" cy="90" r="2.6" fill="currentColor" />
      <text x="56" y="132" fill="currentColor" fontFamily="var(--font-mono)" fontSize="13">A = πr²</text>
    </svg>
  );
}

/** Seta curva desenhada à mão. flip espelha horizontalmente. */
export function HandArrow({ className, style, flip }: P & { flip?: boolean }) {
  return (
    <svg viewBox="0 0 120 80" className={className} style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }} aria-hidden="true">
      <g className="chalk-stroke" strokeWidth="2.6">
        <path d="M8 14 C 40 4, 92 20, 100 62" />
        <path d="M86 52 L100 64 L106 44" />
      </g>
    </svg>
  );
}

/** Sublinhado de giz que se desenha. */
export function ChalkUnderline({ className, color = "var(--color-chalk-yellow)", delay = "0.9s" }: { className?: string; color?: string; delay?: string }) {
  return (
    <svg viewBox="0 0 300 16" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d="M4 10 C 60 3, 120 14, 180 7 S 270 9, 296 6"
        className="chalk-stroke draw"
        pathLength={1}
        style={{ stroke: color, strokeWidth: 3.4, ["--delay" as string]: delay, ["--dur" as string]: "0.8s" }}
      />
    </svg>
  );
}

/** Rótulo de fórmula em giz. Com `hover`, ao passar o mouse vira um exemplo numérico (easter egg). */
export function Formula({
  children,
  hover,
  className,
  style,
}: {
  children: React.ReactNode;
  hover?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span aria-hidden="true" className={`egg-formula font-mono select-none whitespace-nowrap ${hover ? "z-20" : ""} ${className ?? ""}`} style={style}>
      <span className="egg-formula-a">{children}</span>
      {hover && <span className="egg-formula-b">{hover}</span>}
    </span>
  );
}

/** Equação resolvida: 2x + 3 = 11 → x = 4 ✓ (2·4 + 3 = 11). */
export function SolvedEquation({ className }: { className?: string }) {
  return (
    <div className={className} aria-label="Exemplo: 2x + 3 = 11, então x = 4">
      <div aria-hidden="true" className="font-mono text-chalk/85 text-lg sm:text-2xl flex flex-wrap items-center gap-x-4 gap-y-1">
        <span>2x + 3 = 11</span>
        <span className="text-chalk-yellow">→</span>
        <span>2x = 8</span>
        <span className="text-chalk-yellow">→</span>
        <span className="text-chalk-yellow">x = 4</span>
        <svg viewBox="0 0 40 36" className="w-8 h-7 text-chalk-yellow" aria-hidden="true">
          <path d="M5 20 L16 31 L36 5" className="chalk-stroke draw-view" pathLength={1} style={{ strokeWidth: 4, ["--delay" as string]: "0.9s" }} />
        </svg>
      </div>
    </div>
  );
}
