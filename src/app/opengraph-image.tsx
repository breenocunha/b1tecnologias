import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "B1 Tecnologias — Tecnologia que transforma negócios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/marca/b1.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#07111F",
          color: "#F8FAFC",
          padding: "80px",
        }}
      >
        <img src={src} alt="" width={132} height={125} />
        <div style={{ display: "flex", marginTop: 28, fontSize: 22, letterSpacing: 8, color: "#22C7FF" }}>
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
