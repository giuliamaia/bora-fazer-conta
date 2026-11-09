import { ImageResponse } from "next/og";

export const alt = "Bora Fazer Conta — Matemática e Física sem fingir que tudo é óbvio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#173C30",
          color: "#F2EBDD",
          border: "18px solid #102A23",
        }}
      >
        <div style={{ fontSize: 28, color: "#E9C46A", letterSpacing: 4 }}>PROFESSOR GUILHERME OLIVEIRA</div>
        <div style={{ fontSize: 120, fontWeight: 800, marginTop: 20 }}>Bora Fazer Conta!</div>
        <div style={{ fontSize: 44, color: "#E9C46A", marginTop: 16 }}>
          Matemática e Física sem fingir que tudo é óbvio.
        </div>
        <div style={{ fontSize: 30, marginTop: 40, opacity: 0.7 }}>a² + b² = c²   ·   V = R·i   ·   F = m·a</div>
      </div>
    ),
    size,
  );
}
