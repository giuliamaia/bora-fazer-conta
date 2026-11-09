import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { teacherPhoto, site } from "@/config/site";


/**
 * Foto real do professor. Sem o arquivo em public/images, mostra um placeholder
 * claramente identificado (nunca uma pessoa gerada por IA).
 */
export function TeacherPhoto({ priority = false, className = "" }: { priority?: boolean; className?: string }) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "images", teacherPhoto.file));
  if (exists) {
    return (
      <Image
        src={`/images/${teacherPhoto.file}`}
        alt={teacherPhoto.alt}
        width={800}
        height={800}
        priority={priority}
        sizes="(min-width: 1024px) 420px, 80vw"
        className={`mx-auto h-auto w-full max-w-[460px] -rotate-1 rounded-2xl border-[6px] border-chalk object-cover shadow-[0_14px_30px_rgba(0,0,0,0.5)] ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`Espaço reservado para a foto de ${site.teacher}`}
      className={`relative mx-auto flex aspect-[4/5] w-full max-w-[420px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-chalk/50 bg-board-dark/50 p-6 text-center ${className}`}
    >
      <svg viewBox="0 0 64 64" className="h-20 w-20 text-chalk/60" aria-hidden="true">
        <g className="chalk-stroke" strokeWidth="2.4">
          <circle cx="32" cy="22" r="11" />
          <path d="M10 58 C10 42 54 42 54 58" />
        </g>
      </svg>
      <p className="font-mono text-xs uppercase tracking-widest text-chalk-yellow">Placeholder</p>
      <p className="font-display text-2xl text-chalk">Foto do Guilherme aqui</p>
      <p className="font-mono text-xs text-chalk/60">
        Salve a foto (fundo removido) em
        <br />
        public/images/{teacherPhoto.file}
      </p>
    </div>
  );
}
