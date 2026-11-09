import type { Metadata, Viewport } from "next";
import { Caveat_Brush, JetBrains_Mono, Outfit } from "next/font/google";
import { site } from "@/config/site";
import { ChalkDefs } from "@/components/Doodles";
import "./globals.css";

const display = Caveat_Brush({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const sans = Outfit({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.brand,
  authors: [{ name: site.teacher }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.brand,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#102a23",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.teacher,
    jobTitle: "Professor de Matemática e Física",
    url: site.url,
    sameAs: [site.social.instagram, site.social.youtube],
    brand: { "@type": "Brand", name: site.brand },
  };

  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        {/* marca que há JS, para que as animações de revelação tenham fallback sem JS */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <ChalkDefs />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-chalk-yellow focus:px-4 focus:py-2 focus:text-board-dark"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
