import { ImageResponse } from "next/og";

export const alt = "B1 Tecnologias — Tecnologia que transforma negócios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#090909",
          color: "#f4f4f1",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 8, color: "#ff4d2a" }}>
          B1 TECNOLOGIAS
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            lineHeight: 1.05,
            marginTop: 28,
            maxWidth: 860,
            letterSpacing: -1.5,
          }}
        >
          Tecnologia que transforma negócios.
        </div>
      </div>
    ),
    { ...size },
  );
}
