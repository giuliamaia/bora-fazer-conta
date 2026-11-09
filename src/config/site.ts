/**
 * Informações comerciais centralizadas.
 * Edite aqui: links, WhatsApp, vídeos e FAQ aparecem na página inteira.
 */

const WHATSAPP_NUMBER = "5581997583963";

export const DEFAULT_WA_MESSAGE =
  "Olá, Guilherme! Conheci o Bora Fazer Conta pelo site e gostaria de saber mais sobre suas aulas.";

export function whatsappUrl(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const site = {
  brand: "Bora Fazer Conta",
  teacher: "Guilherme Oliveira",
  tagline: "Matemática e Física sem fingir que tudo é óbvio.",
  signature: "Menos decoreba. Mais raciocínio.",
  catchphrase: "Bora Fazer Conta!",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://borafazerconta.com.br", // TODO: confirmar domínio
  title: "Bora Fazer Conta | Matemática e Física com Guilherme Oliveira",
  description:
    "Matemática e Física sem fingir que tudo é óbvio. Conheça o Bora Fazer Conta, acompanhe conteúdos educativos e fale com o professor Guilherme Oliveira.",
  whatsappDisplay: "+55 81 99758-3963",
  social: {
    instagram: "https://www.instagram.com/borafazercontagui/",
    youtube: "https://www.youtube.com/@borafazerconta",
    whatsapp: whatsappUrl(),
  },
} as const;

/**
 * Foto real do professor: coloque o arquivo em public/images/guilherme.png
 * (de preferência com fundo removido). Enquanto não existir, a página mostra
 * um placeholder claramente identificado.
 */
export const teacherPhoto = {
  file: "guilherme.jpg",
  alt: "Professor Guilherme Oliveira, do Bora Fazer Conta, ao lado da lousa",
};

export type Video = {
  id: string;
  title: string;
  platform: "YouTube";
  url: string;
  thumbnail: string;
};

/** Vídeos reais do canal oficial. Para trocar, edite esta lista (ID do vídeo + título). */
const yt = (id: string, title: string): Video => ({
  id,
  title,
  platform: "YouTube",
  url: `https://www.youtube.com/watch?v=${id}`,
  thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
});

export const videos: Video[] = [
  yt("2QTKqSHiwgs", "Como calcular a MEDIANA com número par de termos | Questão do ENEM 2025 resolvida"),
  yt("iL_3qSwCekE", "Questão CESGRANRIO – Banco do Brasil 2023 | Resolução Passo a Passo"),
  yt("V2TCK6ewRF0", "3 questões da prova dos BOMBEIROS PE (Soldado 2024) resolvidas | Matemática e Raciocínio Lógico"),
];

export const services = [
  {
    key: "matematica",
    title: "Matemática",
    text: "Aprendizagem de conceitos, exercícios e desenvolvimento do raciocínio matemático.",
    message: "Olá, Guilherme! Vim pelo site do Bora Fazer Conta e gostaria de saber mais sobre as aulas de Matemática.",
  },
  {
    key: "fisica",
    title: "Física",
    text: "Compreensão de fenômenos, fórmulas e resolução de problemas.",
    message: "Olá, Guilherme! Vim pelo site do Bora Fazer Conta e gostaria de saber mais sobre as aulas de Física.",
  },
  {
    key: "provas",
    title: "Preparação para provas",
    text: "Apoio na compreensão e resolução de questões.",
    message: "Olá, Guilherme! Vim pelo site do Bora Fazer Conta e gostaria de saber mais sobre a preparação para provas.",
  },
  {
    key: "personalizadas",
    title: "Aulas personalizadas",
    text: "Acompanhamento conforme as necessidades e dificuldades do aluno.",
    message: "Olá, Guilherme! Vim pelo site do Bora Fazer Conta e gostaria de saber mais sobre as aulas personalizadas.",
  },
] as const;

export const faq = [
  {
    q: "Como funcionam as aulas?",
    a: "Cada aluno tem uma necessidade diferente, então o melhor caminho é uma conversa rápida no WhatsApp. Assim dá para entender sua dificuldade e explicar como posso ajudar.",
  },
  {
    q: "As aulas são online ou presenciais?",
    a: "Chama no WhatsApp que eu te conto quais formatos estão disponíveis no momento.",
  },
  {
    q: "Para quais níveis de ensino?",
    a: "Manda uma mensagem contando qual é a sua série, curso ou prova, e a gente vê juntos como te ajudar.",
  },
  {
    q: "Como consultar horários?",
    a: "A disponibilidade muda ao longo do tempo, então o jeito mais fácil é consultar os horários direto no WhatsApp.",
  },
  {
    q: "Como saber os valores?",
    a: "Os valores dependem do que você precisa, então a gente combina direto no WhatsApp.",
  },
];
